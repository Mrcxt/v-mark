/*
 * @Author: 虾哔哔
 * @Date: 2018-04-31 15:39:51
 * @Last Modified by: 虾哔哔
 * @Last Modified time: 2018-06-08 15:15:54
 */
/**
 * 函数防抖 返回函数连续调用时，空闲时间必须大于或等于 time，action 才会执行
 * @param time   {number}    空闲时间，单位毫秒
 * @param action {function}  请求关联函数，实际应用需要调用的函数
 * @return {function}    返回客户调用函数
 */
export function debounce(action, time) {
  let last = null;
  return function () {
    let ctx = this,
      args = arguments
    clearTimeout(last)
    last = setTimeout(function () {
      action.apply(ctx, args)
    }, time)
  }
}

/**
 * 函数节流 返回函数连续调用时，action 执行频率限定为 次 / delay
 * @param delay  {number}    延迟时间，单位毫秒
 * @param action {function}  请求关联函数，实际应用需要调用的函数
 * @return {function}    返回客户调用函数
 */
export function throttle(action, delay) {
  let last = 0
  return function () {
    let curr = +new Date()
    if (curr - last > delay) {
      action.apply(this, arguments)
      last = curr
    }
  }
}
