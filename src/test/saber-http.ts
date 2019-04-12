import { Nana } from '../core/Nana'
import { Module } from '../core/Module'

// 路由/user/nana/
const nana = Module({
  url: 'nana/',
  service(ctx) {
    ctx.response.end(ctx.nana)
  }
})

// 路由/user/
const user = Module({
  url: 'user/',
  service(ctx) {
    ctx.response.end(`user! ${JSON.stringify(ctx.params)}`)
  },
  children: [nana]
})

// 路由/
const hello = Module({
  url: '/',
  service(ctx) {
    ctx.response.end('hello!')
  },
  children: [user]
})

Nana.server([hello]).listen(3000, () => console.log('http://localhost:3000'))

Nana.use({
  nana: 'Nanasaki!'
})
