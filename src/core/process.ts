/*
 * @Author: saber2pr
 * @Date: 2019-04-07 22:06:56
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-07 22:50:56
 */
import { ServerResponse, IncomingMessage } from 'http'
import { Module } from './Module'
import { matchRequestAndModule } from './common/validators'
import { BFS } from './common/BFS'
import { Reflector } from './common/reflector'
/**
 * processModule
 *
 * @param {ServerResponse} res
 * @param {Module} mod
 */
export function processModule(res: ServerResponse, mod: Module) {
  res.write(mod.callback(), error => {
    if (error) {
      throw error
    }
  })
  res.end()
}
/**
 * responseModuleRequested
 *
 * @param {IncomingMessage} request
 * @param {ServerResponse} response
 */
export function responseModuleRequested(
  request: IncomingMessage,
  response: ServerResponse
) {
  return (mod: Module, parentMod?: Module) => {
    Reflector.defineUrlMetadata(mod, parentMod)
    if (matchRequestAndModule(request, mod)) {
      processModule(response, mod)
    }
  }
}
/**
 * processDep
 *
 * @param {IncomingMessage} request
 * @param {ServerResponse} response
 * @returns
 */
export function processDep(request: IncomingMessage, response: ServerResponse) {
  return (mod: Module) => BFS(mod, responseModuleRequested(request, response))
}
