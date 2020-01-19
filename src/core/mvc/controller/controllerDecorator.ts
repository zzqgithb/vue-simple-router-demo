/**
 * @Author : ZiQin Zhai
 * @Date : 2020/1/19 14:33
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/1/19 14:33
 * @Description 控制装饰器
 **/

export function Controller<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    hello = this;
  };
}
