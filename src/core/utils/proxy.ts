/**
 * @Author : ZiQin Zhai
 * @Date : 2019/11/13 15:54
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2019/11/13 15:54
 * @Description 代理对象
 * */
import { noop } from "@/core/utils/util.js";

const sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop,
};
/**
 * 创建代理
 * @param target 目标对象
 * @param sourceKey 代理的目标地址
 * @param key 取值的key
 */
export function proxy(target: any, sourceKey: string, key: any) {
  sharedPropertyDefinition.get = function proxyGetter(this: any) {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(this: any, val: any) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}
