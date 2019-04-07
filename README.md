# @saber2pr/nana

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

2. method 方法名

3. callback 响应程序

4. children 子路由

```ts
// 路由/hello
const helloModule = Module({
  url: '/hello',
  method: 'GET',
  callback() {
    return 'hello!'
  },
  children: [userModule]
})

// 路由/hello/user
const userModule = Module({
  url: '/user',
  method: 'GET',
  callback() {
    return 'user!'
  }
})
```

## Nana

主函数，参数为 module 数组，返回一个 Server

```ts
Nana([helloModule]).listen(3000, 'localhost', () =>
  console.log('http://localhost:3000')
)
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
