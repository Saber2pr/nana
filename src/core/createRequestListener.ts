/*
 * @Author: saber2pr
 * @Date: 2019-04-08 16:36:06
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-14 14:32:46
 */
import { createAction, dispatch } from '@saber2pr/event'
import { RequestListener } from 'http'
import { Context } from './type/context'
import { resolve } from './common/resolve'
import { fs } from './plugins/fs'
import * as url from 'url'
import { log, logconfig } from './plugins/log'
import { Print } from './plugins/print'
/**
 * __plugins
 */
const __plugins = {
  print: Print,
  fs
}
/**
 * createServerRequestListener
 *
 * @export
 * @param {Context} plugin
 * @returns {RequestListener}
 */
export function createServerRequestListener(
  plugin?: Object,
  config?: logconfig
): RequestListener {
  return (request, response) => {
    const context: Context = {
      request,
      response,
      params: url.parse(request.url, true).query,
      ...__plugins,
      ...plugin
    }
    try {
      log(config)(request, response)
      dispatch<createAction<string, Context>>(resolve(request), context)
    } catch (error) {
      console.log((error as Error).message)
      response.statusCode = 404
      response.end('404')
    }
  }
}
