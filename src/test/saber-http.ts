import { Nana } from '../core/Nana'
import { Module } from '../core/Module'

export type MyPlugin = { nana: string }

Nana.use<MyPlugin>({
  nana: 'nana'
})

// 路由/user/nana/
const nana = Module<MyPlugin>({
  url: 'nana/',
  service(ctx) {
    ctx.response.end(ctx.nana)
  }
})

// 路由/user/
const user = Module({
  url: 'user/',
  async service(ctx) {
    ctx.response.end(`user!\n${JSON.stringify(ctx.params, null, 2)}`)
  },
  children: [nana]
})

// 路由/
const hello = Module<MyPlugin>({
  url: '/',
  async service(ctx) {
    ctx.response.end('hello')
  },
  children: [user]
})

Nana.server([hello]).listen(3000, () => console.log('http://localhost:3000'))

Nana.watch({
  url: true
})
