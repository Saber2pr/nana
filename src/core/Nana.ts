/*
 * @Author: saber2pr
 * @Date: 2019-04-07 22:12:44
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-12 13:03:24
 */
import { createServer } from 'http'
import { Module } from './Module'
import { nana } from './common/nana'
import { createServerRequestListener } from './createRequestListener'
import { __ctx, Plugin } from './type/context'
import { subscribe } from '@saber2pr/event'

export namespace Nana {
  /**
   * # Nanasaki
   * ^o^
   *
   * @export
   * @param {Module[]} mods
   * @param {(currentMod: Module, pathFromRoot: string) => void} callback
   */
  export function love(
    mods: Module[],
    callback: (currentMod: Module, pathFromRoot: string) => void
  ) {
    nana(mods, callback)
    return Nana
  }
  /**
   * use
   *
   * @export
   * @template T
   * @param {Plugin<T>} obj
   */
  export function use<T>(obj: Plugin<T>) {
    Object.assign(__ctx, obj)
    return Nana
  }
  /**
   * useModules
   *
   * @export
   * @param {Module[]} mods
   */
  export function useModules(mods: Module[]) {
    nana(mods, (currentMod, url) => subscribe(url, currentMod.service))
    return Nana
  }
  /**
   * callback
   *
   * @export
   * @returns
   */
  export function callback() {
    return createServerRequestListener(__ctx)
  }
  /**
   * server
   *
   * @export
   * @param {Module[]} mods
   * @returns
   */
  export function server(mods: Module[]) {
    useModules(mods)
    return createServer(callback())
  }
}
