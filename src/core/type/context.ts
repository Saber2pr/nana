/*
 * @Author: saber2pr
 * @Date: 2019-04-08 16:48:46
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-12 18:40:12
 */
import { IncomingMessage, ServerResponse } from 'http'
import { Guard } from './tools'
/**
 * ContextBase
 *
 * @export
 * @interface Base
 */
export interface ContextBase {
  request: IncomingMessage
  response: ServerResponse
  params: Object
}
/**
 * Context
 *
 * @export
 * @interface Context
 */
export interface Context extends ContextBase {
  [key: string]: any
}

export const __ctx = {}
export type Plugin<T> = Guard<T, ContextBase>
