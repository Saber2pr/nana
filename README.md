# @saber2pr/nana

[![npm](https://img.shields.io/npm/v/@saber2pr/nana.svg?color=blue)](https://www.npmjs.com/package/@saber2pr/nana)

> a http-server framework.

关于 nana ：

来源于 Nanasaki(七咲逢)，一位性格冷酷但擅长照顾人的少女！

```bash
# from npm
npm install @saber2pr/nana

# from github
git clone https://github.com/Saber2pr/nana.git
```

# API

## Module

创建一个路由节点

属性：

1. url 路由名称

> `url可以为*，表示拦截所有请求`

2. service 响应程序, 参数为 ctx

3. children 子路由

```ts
// 路由/user/nana/
const nana = Module({
  url: 'nana/',
  service(ctx) {
    ctx.response.end('nana!')
  }
})

// 路由：/user/
const user = Module({
  url: 'user/',
  service(ctx) {
    ctx.response.end('user!')
  },
  children: [nana]
})

// 路由：/
const hello = Module({
  url: '/',
  service(ctx) {
    ctx.response.end('hello!')
  },
  children: [user]
})
```

## Nana

主命名空间

### Nana.use

在 ctx 对象上添加属性

```ts
// 添加属性nana
Nana.use({
  nana: 'Nanasaki!'
})

const nana = Module({
  url: 'nana/',
  service(ctx) {
    // 读取属性ctx.nana
    ctx.response.end(ctx.nana)
  }
})
```

### Nana.server

参数为 modules 数组，你只需要将路由根模块放入！
返回 server 对象

```ts
Nana.server([hello]).listen(3000) // http://localhost:3000
```

### Nana.fileServer

启动一个文件服务器

```ts
Nana.fileServer().listen(3000) // http://localhost:3000
```

### Nana.callback

返回 requestListener 实例

当然你可以这样创建一个 Nana 程序

```ts
import { createServer } from 'http'

createServer(Nana.useModules([hello]).callback()).listen(3000)
```

---

## start

```bash
npm install
```

```bash
npm start

npm run dev

```

> Author: saber2pr

---

## develope and test

> you should write ts in /src

> you should make test in /src/test

> export your core in /src/index.ts!
