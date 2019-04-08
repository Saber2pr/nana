/*
 * @Author: saber2pr
 * @Date: 2019-04-08 16:48:46
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-08 17:30:16
 */
import { IncomingMessage, ServerResponse } from 'http'
/**
 * Base
 *
 * @export
 * @interface Base
 */
export interface Base {
  request: IncomingMessage
  response: ServerResponse
}
/**
 * Context
 *
 * @export
 * @interface Context
 */
export interface Context extends Base {
  [key: string]: any
}

export const __ctx = {}

export type Plugin<T> = T extends { request } | { response } ? never : T
