/*
 * @Author: saber2pr
 * @Date: 2019-04-07 22:37:52
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-07 22:47:51
 */
import { METAKEY } from './metadataKeys'
import { Module } from '../Module'

export namespace Reflector {
  /**
   * defineUrlMetadata
   *
   * @export
   * @param {Module} node
   * @param {Module} [pre]
   */
  export function defineUrlMetadata(node: Module, pre?: Module) {
    if (pre) {
      Reflect.set(
        node,
        METAKEY.URL_KEY,
        Reflect.get(pre, METAKEY.URL_KEY) + node.url
      )
    } else {
      Reflect.set(node, METAKEY.URL_KEY, node.url)
    }
  }
  /**
   * getUrlMetadata
   *
   * @export
   * @param {Module} node
   * @returns
   */
  export function getUrlMetadata(node: Module) {
    return Reflect.get(node, METAKEY.URL_KEY)
  }
}
