import axios from 'axios'
import { buildIndexUrl, buildSheetUrl } from './utils'

const GST_PREFIX = /^gsx\$/

// const key = '1iCpYHV3MeGKyOlSjih4wFuhysAbEfgENLPpkJCO5jIs'

// const worksheetUrl = buildIndexUrl(key)

const getIdAndTitle = (c: { id: string; title: string }) => ({
  id: c.id.split('/').reverse()[0],
  title: c.title,
})

/**
 *
 * @param sheet simple getter
 * TODO: add a fallback if get fails
 */
const getEntries = (sheet: SheetV1) => sheet.data.feed.entry

/**
 *
 * @param rawEntry entire row, including metadata
 * @returns an array of allowed keys corresponding to table headings
 */
const allowedKeys = (rawEntry: Record<string, { $t: string }>) =>
  Object.keys(rawEntry).filter(e => GST_PREFIX.test(e))

/**
 *
 * @param keys an array of dirty keys, (ex. `gsx$keyname`)
 */
const stripKeys = (keys: Array<string>) => keys.map(k => k.replace(GST_PREFIX, ''))

/**
 *
 * @param ids an array of sheet id's
 * @returns an array of promises for each id
 */
const getSheets = (ids: Array<string>, key: string) => {
  const urls = ids.map(id => buildSheetUrl(key, id))

  return axios.all(urls.map(id => axios.get(id)))
}

/**
 *
 * @param entries correspond to a row
 * @param allowed keys
 * @param cleaned keys
 */
const process = ({
  entries,
  allowed,
  cleaned,
}: {
  entries: Entries
  allowed: Array<string>
  cleaned: Array<string>
}): Array<Array<[string, string]>> => {
  return entries.map(entry =>
    Object.keys(entry)
      .filter(key => allowed.includes(key))
      .map((key, i) => {
        return [cleaned[i], entry[key].$t]
      })
  )
}

/**
 * @param key a googlesheet worksheet key
 * @example '1iCpYHV3MeGKyOlSjih4wFuhysAbEfgENLPpkJCO5jIs'
 */
export const getData = (
  key: string,
  cb: (
    o: {
      id: string
      title: string
      entries: [string, string][][]
    }[]
  ) => void
) =>
  axios
    .get(buildIndexUrl(key))
    .then((sheet: WorkSheetV1) => {
      const info = sheet.data.feed.entry
        .map(f => ({ id: f.id.$t, title: f.title.$t }))
        .map(getIdAndTitle)

      // console.log('info:', info)
      return info
    })
    .then((info: Array<Info>) => {
      const ids = info.map(i => i.id)
      const promisedSheets = getSheets(ids, key)

      // console.log('promisedSheets', promisedSheets)

      promisedSheets.then(p => {
        const entries = p.map(getEntries)
        const allowed = entries.map(e => allowedKeys(e[0]))
        const cleaned = allowed.map(stripKeys)

        // console.log('entries', entries)
        // console.log('allowed', allowed)
        // console.log('cleaned', cleaned)

        const o = info.map((n, i) => {
          return {
            id: n.id,
            title: n.title,
            entries: process({
              entries: entries[i],
              allowed: allowed[i],
              cleaned: cleaned[i],
            }),
          }
        })

        cb(o)
      })
    })
    .catch(e => {
      console.error(e)
    })

type Entries = Array<{ [k: string]: { $t: string } }>

type WorkSheetV1 = {
  data: {
    feed: {
      entry: Array<{ id: { $t: string }; title: { $t: string } }>
    }
  }
}

type Info = {
  id: string
  title: string
}

type SheetV1 = {
  data: {
    feed: {
      entry: Entries
    }
  }
}
