/**
 * @Author : ZiQin Zhai
 * @Date : 2020/1/17 17:59
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/1/17 17:59
 * @Description 模型注解
 **/
/**
 * 被双向数据绑定的key
 * @constructor
 */
export function ObserveKey() {
  console.log(arguments);
  return function(target: any, attrName: string, value: any) {
    console.log(arguments);
  };
}
