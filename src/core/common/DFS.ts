/*
 * @Author: saber2pr
 * @Date: 2019-04-07 21:57:53
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-07 22:27:48
 */
/**
 * Node
 *
 * @export
 * @interface Node
 */
export interface Node {
  children?: this[]
}
/**
 * DFS
 *
 * @export
 * @template T
 * @param {T} rootNode
 * @param {(currentNode: T, parent?: T) => void} callback
 * @param {T} [parentNode=null]
 */
export function DFS<T extends Node>(
  rootNode: T,
  callback: (currentNode: T, parent?: T) => void,
  parentNode: T = null
) {
  callback(rootNode, parentNode)
  rootNode.children &&
    rootNode.children.forEach(node => DFS(node, callback, rootNode))
}
