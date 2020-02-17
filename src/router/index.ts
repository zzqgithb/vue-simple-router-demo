/**
 * @Author : ZiQin Zhai
 * @Date : 2020/2/17 16:03
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/2/17 16:03
 * @Description 路由文件
 **/
import Vue from "vue";
//这里仅示范npm安装方式的引入，其它方式引入请看最上面【安装】部分
// @ts-ignore
import Router from "uni-simple-router";
Vue.use(Router);
//初始化
const router = new Router({
  // @ts-ignore
  routes: ROUTES, // 路由表
});

//全局路由前置守卫
router.beforeEach((to: any, from: any, next: any) => {
  alert(1);
  next();
});
// 全局路由后置守卫
router.afterEach((to: any, from: any) => {});
export default router;
