/*
 * @Author: saber2pr
 * @Date: 2019-04-07 22:04:58
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-08 16:54:10
 */
import { Context } from './type/context'
/**
 * Module
 *
 * @export
 * @interface Module
 */
export interface Module {
  url: string
  service: (ctx: Context) => void
  children?: Module[]
}
/**
 * Module
 *
 * @export
 * @param {Module} obj
 * @returns
 */
export function Module(obj: Module) {
  return obj
}
