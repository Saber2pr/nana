/*
 * @Author: saber2pr
 * @Date: 2019-04-07 22:04:58
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-08 16:54:10
 */
import { Context, ContextBase } from './type/context'
/**
 * Module
 *
 * @export
 * @interface Module
 */
export interface Module<T = Context> {
  url: string
  service: (ctx: T & ContextBase) => void
  children?: Module[]
}
/**
 * Module
 *
 * @export
 * @param {Module} obj
 * @returns
 */
export function Module<T = Context>(obj: Module<T>) {
  return obj
}
