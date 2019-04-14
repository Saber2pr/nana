/*
 * @Author: saber2pr
 * @Date: 2019-04-14 11:51:17
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-14 12:30:27
 */
import { IncomingMessage } from 'http'
/**
 * resolve
 * @param request
 */
export const resolve = (request: IncomingMessage): string => {
  return decodeURI(request.url).split('?')[0]
}
