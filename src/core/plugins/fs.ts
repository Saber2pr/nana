/*
 * @Author: saber2pr
 * @Date: 2019-04-13 17:15:00
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-13 17:30:49
 */
import { readFile, writeFile } from 'fs'

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
  write
}

export type fs = typeof fs
