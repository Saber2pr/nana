/*
 * @Author: saber2pr
 * @Date: 2019-04-07 21:37:00
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-07 22:07:05
 */
import { Module } from './Module'
import { RequestListener } from 'http'
import { processDep } from './process'
/**
 * createRequestListener
 *
 * @export
 * @param {Module[]} mods
 * @returns {RequestListener}
 */
export function createRequestListener(mods: Module[]): RequestListener {
  return (request, response) =>
    mods.forEach(mod => {
      try {
        processDep(request, response)(mod)
      } catch (error) {
        console.log(error)
      }
    })
}
