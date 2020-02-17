/**
 * @Author : ZiQin Zhai
 * @Date : 2020/2/17 16:53
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/2/17 16:53
 * @Description 引入业务组件当中的所有router
 **/
interface routerParmas {
  meta: {
    white: boolean;
  };
}
// 根据路由的meta的white参数判断是否是白名单
export function isRouterWhite(obj: routerParmas): boolean {
  return !!obj.meta.white || false;
}
