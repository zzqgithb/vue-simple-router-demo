/**
 * @Author : ZiQin Zhai
 * @Date : 2020/2/4 12:23
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/2/4 12:23
 * @Description 第三方平台类型
 **/
const enum thirdPlatform {
  WECHAT = "wechat", // 微信登录
  QY_WECHAT = "qyWechat", // 企业微信登录
  DING_TALK = "dingTalk", // 钉钉登录
  QQ = "qq" // qq登录
}

export default thirdPlatform;
