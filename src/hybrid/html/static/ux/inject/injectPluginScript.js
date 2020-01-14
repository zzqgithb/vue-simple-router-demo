/*
 * 注入到插件首页 中的代码
 */

// 处理iOS 11 以上系统沉浸式状态栏灰条问题
if (plus.os.name === "iOS") {
  let web = plus.ios.currentWebview();
  let scr = plus.ios.getAttribute(web, "scrollView");
  plus.ios.setAttribute(scr, "contentInsetAdjustmentBehavior", "0");
}

// 处理返回键隐藏
let currentWebview = plus.webview.currentWebview();
let app = currentWebview.app;
if (app) {
  let header = document.querySelector(".header-blue");
  header && header.classList.add("not-home-page");
}
