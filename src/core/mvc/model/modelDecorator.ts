/**
 * @Author : ZiQin Zhai
 * @Date : 2020/1/17 17:59
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/1/17 17:59
 * @Description 模型装饰器
 **/
/**
 * 被双向数据绑定的key
 * @constructor
 */
export function ObserverKey() {
  return function(this: any, target: any, propertyKey: string) {
    if (!target._observerKeys) {
      target._observerKeys = [];
    }
    target._observerKeys.push(propertyKey);
  };
}
