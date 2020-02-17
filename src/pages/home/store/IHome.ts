/**
 * @Author : ZiQin Zhai
 * @Date : 2020/2/17 17:19
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/2/17 17:19
 * @Description 首页
 **/
export default interface IHome {
  home?: object;
  app?: app;
  apps?: app[];
}
interface app {
  appId: string;
  appCode: string;
  appName: string;
}
