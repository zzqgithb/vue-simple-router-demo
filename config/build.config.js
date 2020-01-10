/**
 * @Author : ZiQin Zhai
 * @Date : 2019/9/16 15:22
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2019/9/16 15:22
 * @Description 用户自定义配置
 * */
// 构建配置
const buildConfig = {
  mirrorConfig: {
    app: {
      mirrorPath: "D:\\2019-work\\je-paas-app\\test\\", // （镜像地址） 从h5项目拷贝静态资源到app项目中的绝对地址
    },
  },
};
module.exports = buildConfig;
