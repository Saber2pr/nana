import { Nana } from '../core/nana'
import { Module } from '../core/Module'

// 路由/hello/user
const userModule = Module({
  url: '/user',
  method: 'GET',
  callback() {
    return 'user!'
  }
})

// 路由/hello
const helloModule = Module({
  url: '/hello',
  method: 'GET',
  callback() {
    return 'hello!'
  },
  children: [userModule]
})

Nana([helloModule]).listen(3000, 'localhost', () =>
  console.log('http://localhost:3000')
)
