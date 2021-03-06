import { ICaptchaLogin } from '../interface/ILoginCtrl';
import { ILoginModel } from "../interface/ILoginModel"
/**
 * 用于负责验证码登录的控制器 
 * return 返回动态验证码登录传参params
 * */
export default class CaptchaLoginCtrl implements ICaptchaLogin {
  getCaptcha(telephone: number): void{
    console.log('获取验证码')
  };
  /** 
   * 继承ILoginService的login 
   * parmas 参数遵循ILoginModel接口定义
   * return 返回动态验证码请求params
   * */
  login(loginModel: ILoginModel): string {
    const username = loginModel.username
    const captcha = loginModel.captcha
    return JSON.stringify({
      "j_username": username,
      "loginType": 'PHONE',
      "j_code": captcha,
      "state": '',
      "isNew": 1,
    })
  }
}