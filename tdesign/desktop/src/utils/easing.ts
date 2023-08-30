/**
 * @file
 * 缓动函数
 * 参考自: https://github.com/bameyrick/js-easing-functions/blob/master/src/index.ts
 */

 export interface EasingFunction {
  (current: number, start: number, end: number, duration: number): number;
}

/**
 * @export
 * @param {number} current 当前时间
 * @param {number} start 开始值
 * @param {number} end 结束值
 * @param {number} duration 持续时间
 * @returns
 */
export const linear: EasingFunction = function (current, start, end, duration) {
  const change = end - start;
  const offset = (change * current) / duration;
  return offset + start;
};

/**
 * @export
 * @param {number} current 当前时间
 * @param {number} start 开始值
 * @param {number} end 结束值
 * @param {number} duration 持续时间
 * @returns
 */
export const easeInOutCubic: EasingFunction = function (current, start, end, duration) {
  const change = (end - start) / 2;
  let time = current / (duration / 2);
  if (time < 1) {
    return change * time * time * time + start;
  }
  time -= 2;
  // eslint-disable-next-line no-return-assign
  return change * (time * time * time + 2) + start;
};