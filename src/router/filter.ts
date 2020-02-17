/**
 * @Author : ZiQin Zhai
 * @Date : 2020/2/17 16:35
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/2/17 16:35
 * @Description 路由过滤器
 **/
import router from "./index";
import { getToken, setBeforeUrl } from "@/helpers/auth";
import { isRouterWhite } from "./routerUtils";

/**
 * 路由拦截器
 * 1、判断用户是否登录
 *    Y：进入系统
 *    N：跳转至授权页面进行微信用户授权
 * 2、根据用户信息获取用户资源列表（暂无）
 * 3、进入系统
 */

router.beforeEach((to: any, from: any, next: any) => {
  const token = getToken();
  if (token) {
    // 功能刷新拦截
    getApk(() => {
      next();
    });
  } else if (isRouterWhite(to)) {
    next();
  } else if (!token && to.path !== "/auth" && to.path !== "/login") {
    // 第一次进入项目
    setBeforeUrl(to.fullPath); // 保存用户进入的url
    next("/auth");
  } else {
    next();
  }
});

/**
 * 获取apk
 */
function getApk(cb: any) {
  store.dispatch("LOAD_APK").then((res: any) => {
    // 保存用户信息
    // JE.setCurrentUser(JE.getCurrentUser());
    cb && cb(res);
  });
}

/**
 * view加载完毕
 */
router.afterEach((to: any, from: any) => {});
