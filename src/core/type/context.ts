/*
 * @Author: saber2pr
 * @Date: 2019-04-08 16:48:46
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-14 14:31:49
 */
import { IncomingMessage, ServerResponse } from 'http'
import { fs } from '../plugins/fs'
import { Guard } from '@saber2pr/ts-lib'
import { Print } from '../plugins/print'
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
  fs: fs
  print: typeof Print
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
