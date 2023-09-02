/**
 * 传入一个值，获取它的类型
 * @param value
 * @returns {string}
 */
export function getPrototype(value) {
  return Object.prototype.toString
    .call(value)
    .replace(/^\[object (\S+)\]$/, '$1')
    .toLowerCase();
}
