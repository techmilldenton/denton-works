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
