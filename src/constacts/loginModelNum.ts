/**
 * @Author : ZiQin Zhai
 * @Date : 2020/2/4 12:14
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/2/4 12:14
 * @Description 登录类型
 **/
const enum loginModelNum {
  CAPTCHA = "captcha", // 验证码登录
  BASIC = "basic", // 基础登录方式
  WECHAT = "wechat", // 微信登录
  QY_WECHAT = "qyWechat", // 企业微信登录
  DING_TALK = "dingTalk", // 钉钉登录
  QQ = "qq" // qq登录
}

export default loginModelNum;
