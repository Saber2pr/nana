import { Node, DFS } from '../core/common/DFS'
interface Test extends Node {
  value: number
}

const root: Test = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        {
          value: 3
        }
      ]
    },
    {
      value: 4
    },
    {
      value: 5,
      children: [
        {
          value: 6,
          children: [
            {
              value: 7
            }
          ]
        }
      ]
    }
  ]
}

DFS(root, node => console.log(node.value))

// interface TestP {
//   path: string
//   children?: TestP[]
// }

// const rootT: TestP = {
//   path: '/root',
//   children: [
//     {
//       path: '/src',
//       children: [
//         {
//           path: '/core',
//           children: [{ path: '/test' }]
//         }
//       ]
//     }
//   ]
// }

// DFS(rootT, (node, pre) => {
//   const KEY = '__$$pathFromRoot'
//   if (pre) {
//     Reflect.set(node, KEY, Reflect.get(pre, KEY) + node.path)
//   } else {
//     Reflect.set(node, KEY, node.path)
//   }
//   if (node.path === '/test') {
//     console.log(Reflect.get(node, KEY))
//   }
// })
