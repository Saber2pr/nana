/*
 * @Author: saber2pr
 * @Date: 2019-04-14 11:53:10
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-04-14 11:53:10
 */
export namespace Print {
  /**
   * error
   * @param message
   */
  export const error = (message: string) =>
    console.log(`\u001b[31m${message}\u001b[37m`)
  /**
   * success
   * @param message
   */
  export const success = (message: string) =>
    console.log(`\u001b[32m${message}\u001b[37m`)
  /**
   * tips
   * @param message
   */
  export const tips = (message: string) =>
    console.log(`\u001b[34m${message}\u001b[37m`)
}
