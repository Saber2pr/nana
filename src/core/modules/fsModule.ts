/*
 * @Author: saber2pr
 * @Date: 2019-04-14 14:13:39
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-14 14:33:23
 */
import { Module } from '../Module'
import { Context } from '../type/context'

export const createFileService = (ctx: Context) => async (url: string) => {
  const path = process.cwd() + decodeURI(url)
  try {
    if (path.includes('?')) return
    const res = await ctx.fs.read(path)
    ctx.response.end(res)
  } catch (err) {
    ctx.print.error(err.message)
    ctx.response.statusCode = 404
    ctx.response.end('404')
  }
}

export const FsModule = Module({
  url: '*',
  service: async ctx => {
    if (ctx.request.url === '/') return
    await createFileService(ctx)(ctx.request.url)
  }
})

export const HTMLIndexModule = Module({
  url: '/',
  service: async ctx => await createFileService(ctx)('/index.html')
})
