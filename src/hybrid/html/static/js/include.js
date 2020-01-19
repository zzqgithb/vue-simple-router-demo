/**
 * 资源文件，app专用
 */
// eslint-disable-next-line func-names
(function() {
  // 网络路径,功能和插件用，系统文件用下面
  // var basicPath = 'http://localhost:13131/_www/';

  // debug模式
  /* window.APP = window.APP || {};
    window.APP.debug = {
      // serverUrl: 'http://dev.suanbanyun.com',
        pages: {
        'JE-PLUGIN-WF': {
        title: '工作流',
        page: '_www/pages/workflow/index.html'
      },
    }
} */

  // 开发模式
  let basicPath = "";
  let pluginPath = "";
  const scriptEls = document.getElementsByTagName("script");
  let include = "";
  for (let i = 0; i < scriptEls.length; i++) {
    const el = scriptEls[i];
    const src = el.getAttribute("src");
    if (src) {
      const index = src.indexOf("static/js/include.js");
      if (index != -1) {
        basicPath = src.substring(0, index);
        include = el.getAttribute("include");
        break;
      }
    }
  }
  // 开发环境
  const { href } = window.location;
  if (href.indexOf("/www/") != -1) {
    const www = href.split("/www/")[0];
    basicPath = `${www}/www/hybrid/html/`;
    localStorage.setItem("www", basicPath);
  } else if (href.indexOf("/doc/") != -1) {
    const www = href.split("/doc/")[0];
    basicPath = `${www}/www/hybrid/html/`;
    pluginPath = `${www}/doc/`;
    localStorage.setItem("www", basicPath);
  }
  const ux = {
    mui: ["static/ux/mui/mui.min.css", "static/ux/mui/mui.js"],
    picker: [
      "static/ux/picker/mui.picker.all.css",
      "static/ux/picker/mui.picker.all.js",
    ],
    previewimage: [
      "static/ux/previewimage/mui.previewimage.css",
      "static/ux/previewimage/mui.zoom.js",
      "static/ux/previewimage/mui.previewimage.js",
    ],
    pulltorefresh: [
      "static/ux/pulltorefresh/mui.pullToRefresh.js",
      "static/ux/pulltorefresh/mui.pullToRefresh.material.js",
    ],
    indexedlist: [
      "static/ux/indexedlist/mui.indexedlist.css",
      "static/ux/indexedlist/mui.indexedlist.js",
    ],
    enterfocus: ["static/ux/enterfocus/mui.enterfocus.js"],
    vue: ["static/ux/vue/vue.min.js"],
    jquery: ["static/ux/jquery/jquery-3.3.1.min.js"],
    ext: ["static/ux/ext/ext-debug.js"],
    inject: [
      "static/ux/inject/injectPluginStyle.css",
      "static/ux/inject/injectPluginScript.js",
    ],
    resetcss: ["static/ux/flexible/css_reset.css"],
    flexible: ["static/ux/flexible/flexible.js"],
    echart: [
      "static/ux/echart/echarts.min.js",
      "static/ux/echart/theme/dark.js",
      "static/ux/echart/theme/infographic.js",
      "static/ux/echart/theme/macarons.js",
      "static/ux/echart/theme/shine.js",
      "static/ux/echart/theme/vintage.js",
    ],
    sortable: ["static/ux/sortable/Sortable.min.js"],
    je: ["static/ux/je/je.min.css", "static/ux/je/je.min.js"],
    waves: ["static/ux/waves/waves.min.js", "static/ux/waves/waves.min.css"],
    autosize: ["static/ux/autosize/autosize.min.js"],
    vueRouter: ["static/ux/vue/vueRouter.js"],
    report: ["static/ux/report/je-ueditor.css"],
    scale: ["static/ux/scale/scale.js"],
  };

  // 页面包含的组件
  let files = [];

  // 处理包含的组件
  if (include && include.length > 0) {
    const inclouds = include.split(",");
    inclouds.forEach(key => {
      if (ux[key]) {
        files = files.concat(ux[key]);
      }
    });
  }

  // 公共样式
  const commonFile = [
    "static/fonts/font.css",
    "static/fonts/jeicon/iconfont.js",
    "static/ux/vue/vue.min.js",
    "static/ux/element/index.js",
    "static/ux/element/index.css",
    "static/ux/animate/animate.css",
  ];
  files.unshift(...commonFile);
  // 启用debug
  /* if (window.APP && window.APP.debug) {
    pluginPath = basicPath;
  } */
  // 注入到页面
  files.forEach(file => {
    file = basicPath + file;
    /* if(file.indexOf('plugins/') == 0){
      file = pluginPath + file;
    } else {
      file = basicPath + file;
    } */
    if (file.indexOf(".js") != -1) {
      document.write(
        `<script type="text/javascript" src="${file}" charset="utf-8"></script>`
      );
    } else {
      document.write(`<link rel="stylesheet" type="text/css" href="${file}"/>`);
    }
  });
})();
