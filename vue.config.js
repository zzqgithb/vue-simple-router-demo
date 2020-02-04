// vue.config.js 配置说明
// 官方vue.config.js 参考文档 https://cli.vuejs.org/zh/config/#css-loaderoptions
// 这里只列一部分，具体配置参考文档
const dev = process.env.NODE_ENV !== "production";
const devtool = dev && "source-map";
const { aliasForVue } = require("./config/alias.config.js");
const { mergeLessConfig } = require("./config/less.config");

module.exports = {
  filenameHashing: true,
  lintOnSave: true,
  // 如果你想要在生产构建时禁用 eslint-loader，你可以用如下配置
  // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。(默认false)
  // runtimeCompiler: false,

  /**
   * 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
   *  打包之后发现map文件过大，项目文件体积很大，设置为false就可以不输出map文件
   *  map文件的作用在于：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。
   *  有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
   * */
  productionSourceMap: dev,

  /**
   * 开发环境下配置显示源码，可用于断点调试
   */
  configureWebpack: {
    devtool,
  },

  /**
   * webpack 链
   * @param config
   */
  chainWebpack: config => {
    aliasForVue(config);
    mergeLessConfig(config);
    config.when(process.env.NODE_ENV === "development", config =>
      config.devtool("cheap-module-source-map\n")
    );
  },
  // configureWebpack: config => {
  //   if (!dev) {
  //     unPackage(config);
  //   }
  // },
  css: {
    loaderOptions: {},
  },

  // 它支持webPack-dev-server的所有选项
  devServer: {
    disableHostCheck: true, // 可通过域名访问
    host: "0.0.0.0",
    port: 3000, // 端口号
    https: false, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理

    // 配置多个代理
    proxy: {
      "/api": {
        target: "http://dev.suanbanyun.com",
        // target: 'http://tempdev.suanbanyun.com',
        // target: 'http://dev.suanbanyun.com',
        ws: true,
        changeOrigin: true, // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          "^/api": "",
        },
      }
    },
  },
};
