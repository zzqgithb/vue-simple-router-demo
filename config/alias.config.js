/**
 * @Author : ZiQin Zhai
 * @Date : 2019/5/29 16:01
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2019/5/29 16:01
 * @Description webpack别名配置  单独处理是为了用于ide自动识别路径
 * */
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, `../${dir}`);
}

// 配置路径别名
const aliasConfig = {
  "@": resolve("../src"),
  "@je": resolve("../src/je"),
  components: resolve("../components"),
  assets: resolve("../assets"),
  utils: resolve("../utils"),
  views: resolve("../view"),
};
// 提供一个供vueconfig使用的别名表
const aliasForVue = webpackChain => {
  const keys = Object.keys(aliasConfig);
  keys.forEach(k => {
    const path = aliasConfig[k];
    webpackChain.resolve.alias.set(k, path);
  });
};
module.exports = {
  resolve: {
    alias: aliasConfig,
  },
  aliasForVue,
  aliasConfig,
};
