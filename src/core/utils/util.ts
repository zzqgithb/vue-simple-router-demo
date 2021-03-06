/**
 * @Author : ZiQin Zhai
 * @Date : 2019/5/29 14:52
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2019/5/31 14:52
 * @Description 判断数据类型  copy自尤雨溪
 * */

/**
 * 返回一个空对象
 * @type {Readonly<{}>}
 */
export const emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
/**
 * 校验是否为undefined
 * @param v 待校验数据
 * @returns boolean
 */
export function isUndef(v: any) {
  return v === undefined || v === null;
}

/**
 * 校验数据是否为非undefined
 * @param v 待校验数据
 * @returns boolean
 */
export function isDef(v: any) {
  return v !== undefined && v !== null;
}

/**
 * 校验数据是否为true
 * @param v 待校验数据
 * @returns boolean
 */
export function isRealTrue(v: any) {
  return v === true;
}

/**
 * 校验数据为真还是为假
 * @param v 待校验数据
 * @returns boolean
 */
export function isTrue(v: any) {
  return !!v;
}

/**
 * 校验数据是否为false
 * @param v 待校验数据
 * @returns boolean
 */
export function isRealFalse(v: any) {
  return v === false;
}

/**
 * 校验数据是否为一个基础类型
 * Check if value is primitive
 * return boolean
 */
export function isPrimitive(value: any) {
  return (
    typeof value === "string" ||
    typeof value === "number" ||
    // $flow-view-disable-line
    typeof value === "symbol" ||
    typeof value === "boolean"
  );
}

/**
 * 校验变量是否为一个对象
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 * return boolean
 */
export function isObject(obj: any) {
  return obj !== null && typeof obj === "object";
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
const _toString: () => any = Object.prototype.toString;

export function toRawType(value: any) {
  return _toString.call(value).slice(8, -1);
}

/**
 * 判断数组中是否有某个下标元素
 * @param arr 目标数组
 * @param index 要获取的下标
 * @returns item 目标下标的元素
 */
export function hasIndex(arr: any, index: any) {
  let item;
  if (Array.isArray(arr) && arr.length > index) {
    item = arr[index];
  }
  return item;
}

/**
 * 验证是不是一个空数组
 * @param arr 目标数组
 * @returns {arg is Array<any> | boolean}
 */
export function isEmptyArray(arr: any) {
  return Array.isArray(arr) && arr.length === 0;
}

/**
 * 验证是否为一个数组
 */
export function isArray(arr: any) {
  return Array.isArray(arr);
}

/**
 * 判断数据是否为一个纯粹的对象
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 * return boolean
 */
export function isPlainObject(obj: any) {
  return _toString.call(obj) === "[object Object]";
}

/**
 * 判断一个对象是否为String
 */
export function isString(obj: any) {
  return _toString.call(obj) === "[object String]";
}

/**
 * 将字符串修改为数组
 * @param params 数据模型
 * @param connect 字符串的连接方式
 * @return {*}
 */
export function stringToArray(params: any, connect = ",") {
  if (!isString(params) && !isArray(params)) {
    throw new Error(`参数异常，请检查参数类型 【${_toString().call(params)}】`);
  }
  return isArray(params) ? params : params.split(connect) || [];
}

/**
 * 判断数据是否为一个正则对象
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 * return boolean
 */
export function isRegExp(v: any) {
  return _toString.call(v) === "[object RegExp]";
}

/**
 * 检查val是否是一个有效的数组索引，其实就是验证是否是一个非无穷大的正整数
 * Check if val is a valid array index.
 */
export function isValidArrayIndex(val: any) {
  const n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val);
}

/**
 * 强转String
 * Convert a value to a string that is actually rendered.
 * return String
 */
export function toString(val: any) {
  return val == null
    ? ""
    : typeof val === "object"
    ? JSON.stringify(val, null, 2)
    : String(val);
}

/**
 * 强转number 如果成功转换则返回转换后的值 否则返回原数据
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 * return number | string
 */
export function toNumber(val: any) {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
}

/**
 * Remove an item from an array
 * 移除数组中的某一个元素
 * return Array<any> | void
 */
export function remove(arr: any, item: any) {
  if (arr.length) {
    const index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

/**
 * Check whether the object has the property.
 */
const { hasOwnProperty } = Object.prototype;

/**
 * 判断一个值是否为某一个对象的属性
 * @param obj 对象
 * @param key 值
 * @returns {boolean}
 */
export function hasOwn(obj: any, key: any) {
  return hasOwnProperty.call(obj, key);
}

/**
 * 柯里化函数
 * Create a cached version of a pure function.
export function cached(fn: any) {
  const cache = Object.create(null);
  return function cachedFn(str) {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}
 */

/**
 * 将字符串处理为驼峰
 * Camelize a hyphen-delimited string.
 */
// const camelizeRE = /-(\w)/g;
// export const camelize = cached(str =>
//   str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ""))
// );

/**
 * Capitalize a string.
 */
// export const capitalize = cached(
//   str => str.charAt(0).toUpperCase() + str.slice(1)
// );

/**
 * Convert an Array-like object to a real Array.
 * 将类数组对象处理为真实的数组
 * return Array<any>
 */
export function toArray(list: any, start: any) {
  start = start || 0;
  let i = list.length - start;
  const ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret;
}

/**
 * Mix properties into target object.
 * 浅拷贝
 * return to
 */
export function extend(to: any, _from: any) {
  for (const key in _from) {
    to[key] = _from[key];
  }
  return to;
}

/**
 * Merge an Array of Objects into a single Object.
 */
export function toObject(arr: []) {
  const res = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
}

/**
 * 空函数
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
export function noop(): any {}

/**
 * Always return false.
 */
export const no = () => false;

/**
 * 闭包保证函数只执行一次
 * Ensure a function is called only once.
 */
// export function once(fn: () => any) {
//   let called = false;
//   return function() {
//     if (!called) {
//       called = true;
//       fn.apply(this, arguments);
//     }
//   };
// }

/**
 * 消抖函数，保证函数在一定时间内只能触发一次，如果这个时间段内再次触发，则重新计算
 * @param func 目标对象
 * @param wait 等待时间
 * @param immediate 是否立即执行
 */
// export function debounce(func, wait, immediate) {
//   let timeout;
//
//   return function() {
//     const _this = this;
//
//     if (timeout) clearTimeout(timeout);
//     if (immediate) {
//       const callNow = !timeout;
//       timeout = setTimeout(() => {
//         timeout = null;
//       }, wait);
//       if (callNow) func.apply(_this, arguments);
//     } else {
//       timeout = setTimeout(function() {
//         func.apply(_this, arguments);
//       }, wait);
//     }
//   };
// }

/**
 * 节流函数 规定时间内只能触发一次
 * @param func
 * @param wait 等待时机
 */
// export function throttle(func, wait) {
//   let prevTimestamp = 0;
//   return function() {
//     const _this = this;
//     const now = Date.now();
//     if (now - prevTimestamp > wait) {
//       func.apply(_this, arguments);
//       prevTimestamp = now;
//     }
//   };
// }

/**
 * 从父类对象继承
 * @param Parent 父类
 * @param Sub 子类
 */
export function extendFrom(Parent: any, Sub: any) {
  Sub.prototype = Object.create(Parent.prototype);
  Sub.prototype.constructor = Sub;
  return Sub;
}
