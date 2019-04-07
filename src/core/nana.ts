/*
 * @Author: saber2pr
 * @Date: 2019-04-07 22:12:44
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-07 23:10:01
 */
import { createServer } from 'http'
import { Module } from './Module'
import { createRequestListener } from './createRequestListener'
/**
 * # Nana
 *
 * @export
 * @param {Module[]} mods
 * @returns
 */
export function Nana(mods: Module[]) {
  return createServer(createRequestListener(mods))
}
