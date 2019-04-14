/*
 * @Author: saber2pr
 * @Date: 2019-04-14 12:48:39
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-14 13:23:30
 */
import { stat, readdir } from 'fs'

export const pathBe = (path: string, type: 'dir' | 'file'): Promise<boolean> =>
  new Promise((resolve, reject) =>
    stat(path, (err, statu) =>
      err
        ? reject(err)
        : resolve(
            type === 'dir'
              ? statu.isDirectory()
              : type === 'file'
              ? statu.isFile()
              : false
          )
    )
  )

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
