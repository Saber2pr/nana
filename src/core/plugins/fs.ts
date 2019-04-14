/*
 * @Author: saber2pr
 * @Date: 2019-04-13 17:15:00
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-13 17:30:49
 */
import { readFile, writeFile, stat, readdir, exists } from 'fs'

export const isExist = (path: string) =>
  new Promise<boolean>(resolve => exists(path, resolve))

export const pathBe = (path: string, type: 'dir' | 'file'): Promise<boolean> =>
  new Promise((resolve, reject) => {
    stat(path, (err, statu) => {
      err && reject(err)
      if (type === 'dir') {
        resolve(statu.isDirectory())
      } else if (type === 'file') {
        resolve(statu.isFile())
      } else {
        throw new Error(`${path} is not a file or directory!`)
      }
    })
  })

export const readDir = (dir: string) =>
  new Promise<string[]>((resolve, reject) =>
    readdir(dir, (err, files) => (err ? reject(err) : resolve(files)))
  )

export const search = async (
  path: string,
  callback: (file: string) => void
) => {
  const files = await readDir(path)
  const walk = async (file: string) => {
    const isDir = await pathBe(file, 'dir')
    const isFile = await pathBe(file, 'file')
    isDir && search(file, callback)
    isFile && callback(file)
  }
  files.forEach(file => walk(`${path}/${file}`))
}

export const read = (path: string) =>
  new Promise<Buffer>((resolve, reject) =>
    readFile(path, (err, data) => (err ? reject(err) : resolve(data)))
  )

export type read = typeof read

export const write = (path: string, data: any) =>
  new Promise<void>((resolve, reject) =>
    writeFile(path, data, err => (err ? reject(err) : resolve()))
  )

export const fs = {
  read,
  write,
  pathBe,
  isExist
}

export type fs = typeof fs
