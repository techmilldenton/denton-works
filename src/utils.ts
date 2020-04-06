import { useRef, useCallback, useEffect } from 'react'

export const buildIndexUrl = (key: string) =>
  `https://spreadsheets.google.com/feeds/worksheets/${key}/public/basic?alt=json`

export const buildSheetUrl = (key: string, sheetId: string) =>
  `https://spreadsheets.google.com/feeds/list/${key}/${sheetId}/public/values?alt=json`

export const fromEntries = <T>(entries: [keyof T, T[keyof T]][]): T =>
  entries.reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {} as T)

export const toEntries = <T>(obj: T): [keyof T, T[keyof T]][] =>
  Object.entries(obj).map(item => {
    const keyString = item[0] as keyof T
    const value = item[1]
    return [keyString, value]
  })

export type UseTimeoutFnReturn = [() => boolean | null, () => void, () => void]

export function useTimeoutFn(fn: Function, ms: number = 0): UseTimeoutFnReturn {
  const ready = useRef<boolean | null>(false)
  const timeout = useRef<ReturnType<typeof setTimeout>>()
  const callback = useRef(fn)

  const isReady = useCallback(() => ready.current, [])

  const set = useCallback(() => {
    ready.current = false
    timeout.current && clearTimeout(timeout.current)

    timeout.current = setTimeout(() => {
      ready.current = true
      callback.current()
    }, ms)
  }, [ms])

  const clear = useCallback(() => {
    ready.current = null
    timeout.current && clearTimeout(timeout.current)
  }, [])

  // update ref when function changes
  useEffect(() => {
    callback.current = fn
  }, [fn])

  // set on mount, clear on unmount
  useEffect(() => {
    set()

    return clear
  }, [ms])

  return [isReady, clear, set]
}
