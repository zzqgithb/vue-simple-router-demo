/**
 * @Author : ZiQin Zhai
 * @Date : 2019/12/12 11:11
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2019/12/12 11:11
 * @Description 项目配置信息
 * */
const merge = require("webpack-merge");
const fs = require("fs");
const path = require("path");

// 服务配置
let config = {
  server: "0.0.0.0",
  serverPort: "3000",
};

// 自定义配置
const custom = path.resolve(__dirname, "../config.json");
if (fs.existsSync(custom)) {
  config = merge(config, require("../config.json"));
}
module.exports = config;
