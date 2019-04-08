/*
 * @Author: saber2pr
 * @Date: 2019-04-08 16:13:40
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-04-08 16:13:40
 */
import { Module } from '../Module'
import { BFS } from './BFS'
import { Reflector } from './reflector'
/**
 * nana
 *
 * @export
 * @param {Module[]} modules
 * @param {(currentMod: Module, pathFromRoot: string) => void} callback
 */
export function nana(
  modules: Module[],
  callback: (currentMod: Module, pathFromRoot: string) => void
) {
  modules.forEach(mod =>
    BFS(mod, (currentNode, parentNode) => {
      Reflector.defineUrlMetadata(currentNode, parentNode)
      callback(currentNode, Reflector.getUrlMetadata(currentNode))
    })
  )
}
