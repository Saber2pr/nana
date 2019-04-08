/*
 * @Author: saber2pr
 * @Date: 2019-04-08 16:36:06
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-08 17:28:00
 */
import { createAction, dispatch } from '@saber2pr/event'
import { RequestListener } from 'http'
import { Context } from './type/context'
/**
 * createServerRequestListener
 *
 * @export
 * @param {Context} plugin
 * @returns {RequestListener}
 */
export function createServerRequestListener(plugin?: Object): RequestListener {
  return (request, response) => {
    try {
      dispatch<createAction<string, Context>>(request.url, {
        request,
        response,
        ...plugin
      })
    } catch (error) {
      console.log((error as Error).message)
      response.statusCode = 404
      response.end('404')
    }
  }
}
