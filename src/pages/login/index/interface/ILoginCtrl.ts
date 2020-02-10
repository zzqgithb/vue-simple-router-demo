/**
 * @Author : ZiQin Zhai
 * @Date : 2020/1/19 17:35
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/1/19 17:35
 * @Description 登录相关的接口类型
 **/
import { ILoginModel } from "@/pages/login/index/interface/ILoginModel";

// 登录控制器, 用于操作登录相关的逻辑
export interface ILoginCtrl {
  init: () => void; // 初始化选择器
  // 切换登录模式 
  chooseLoginMode: (
    loginModeType: /* 登录类型枚举 不同登录类型会获取到不同的登录实例 */ string
  ) => void;
  login: () => void; // 调用LoginService中login的实现
  forgetPwd: () => void; // 忘记密码
}

// 平台最基础的账号密码登录
export interface ILoginService {
  // 调用各个授权登录的接口，返回用户的token
  login(loginModel: ILoginModel): string;
}

// 动态码登录
export interface ICaptchaLogin extends ILoginService {
  /**
   * 根据手机号码获取验证码
   * @param telephone
   */
  getCaptcha: (telephone: number) => void;
}

// 第三方平台登录 （待补充）
