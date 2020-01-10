/**
 * @Author : ZiQin Zhai
 * @Date : 2019/6/25 13:42
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2019/6/25 13:42
 * @Description less配置
 * */
const path = require("path");

function mergeLessConfig(config) {
  const types = ["vue-modules", "vue", "normal-modules", "normal"];
  types.forEach(type =>
    addStyleResource(config.module.rule("less").oneOf(type))
  );
}

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [
        path.resolve(__dirname, "../../src/style/variable.less"),
        path.resolve(__dirname, "../../src/style/mixins/index.less"),
      ],
    });
}

module.exports = {
  mergeLessConfig,
};
