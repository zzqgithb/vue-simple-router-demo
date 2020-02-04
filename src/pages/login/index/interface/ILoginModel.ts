/**
 * @Author : ZiQin Zhai
 * @Date : 2020/2/4 11:27
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/2/4 11:27
 * @Description 登录模型对象接口
 **/

export interface ILoginModel {
  mode: string; // 登录模式 通过chooseLoginMode进行的赋值
  // 用户名
  username: string;
  // 密码
  password: string;
  // 平台验证码
  captcha?: string;
  // 第三方平台accessToken
  accessToken?: string;
  // 第三方平台返回的用户code
  code?: string;
}
