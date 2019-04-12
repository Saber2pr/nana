/*
 * @Author: saber2pr
 * @Date: 2019-04-12 12:38:15
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-12 13:14:53
 */
/**
 * resolveUrl
 * @param requestUrl
 */
export const resolveUrl = (requestUrl: string): string =>
  requestUrl.split('?')[0]
