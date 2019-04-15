/*
 * @Author: saber2pr
 * @Date: 2019-04-14 11:32:21
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-14 14:43:30
 */
import { RequestListener } from 'http'
import { Print } from './print'

export type config =
  | 'url'
  | 'method'
  | 'statusCode'
  | 'statusMessage'
  | 'headers'

export type logconfig = Partial<Record<config, boolean>>

export const log = (c?: logconfig): RequestListener => (request, _) => {
  if (!c) return
  c.url && Print.tips(`Nana watch-url:[${decodeURI(request.url)}]`)
  c.method && Print.tips(`Nana watch-method:[${request.method}]`)
  c.statusCode && Print.tips(`Nana watch-statusCode:[${request.statusCode}]`)
  c.statusMessage &&
    Print.tips(`Nana watch-statusMessage:[${request.statusMessage}]`)
  c.headers &&
    Print.tips(
      `Nana watch-headers:[${JSON.stringify(request.headers, null, 2)}]`
    )
}

export const __logconfig = {}
