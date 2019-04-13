/*
 * @Author: saber2pr
 * @Date: 2019-04-08 16:36:06
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-13 17:18:38
 */
import { createAction, dispatch } from '@saber2pr/event'
import { RequestListener } from 'http'
import { Context } from './type/context'
import { resolveUrl } from './common/resolve'
import { fs } from './plugins/fs'
import * as url from 'url'
/**
 * __plugins
 */
const __plugins = {
  fs
}
/**
 * createServerRequestListener
 *
 * @export
 * @param {Context} plugin
 * @returns {RequestListener}
 */
export function createServerRequestListener(plugin?: Object): RequestListener {
  return (request, response) => {
    const context: Context = {
      request,
      response,
      params: url.parse(request.url, true).query,
      ...__plugins,
      ...plugin
    }
    try {
      dispatch<createAction<string, Context>>(resolveUrl(request.url), context)
    } catch (error) {
      console.log((error as Error).message)
      response.statusCode = 404
      response.end('404')
    }
  }
}
