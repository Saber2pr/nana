/*
 * @Author: saber2pr
 * @Date: 2019-04-07 21:41:12
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-07 23:00:10
 */
import { IncomingMessage } from 'http'
import { Module } from '../Module'
import { Reflector } from './reflector'
/**
 * matchRequestAndModule
 *
 * @export
 * @param {IncomingMessage} request
 * @param {Module} mod
 * @returns
 */
export function matchRequestAndModule(
  request: IncomingMessage,
  mod: Module
): boolean {
  if (request.method !== mod.method) {
    return false
  }
  return request.url === Reflector.getUrlMetadata(mod)
}
