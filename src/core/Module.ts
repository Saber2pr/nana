/*
 * @Author: saber2pr
 * @Date: 2019-04-07 22:04:58
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-07 22:42:21
 */
/**
 * Module
 *
 * @export
 * @interface Module
 */
export interface Module {
  url: string
  method: string
  callback: () => string | Buffer
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
