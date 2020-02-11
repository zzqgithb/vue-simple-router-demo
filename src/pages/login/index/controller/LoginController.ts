/**
 * 登录控制器
 *  */
import JEController from '@/core/mvc/controller/JEController';
import { ILoginCtrl, ILoginService } from '../interface/ILoginCtrl';
import { ILoginModel } from '../interface/ILoginModel';
import LoginModel from '../model/LoginModel';
import loginModelNum from '@/constacts/loginModelNum';
import BasicLoginCtrl from './BasicLoginController';
import CaptchaLoginCtrl from './CaptchaLoginController';
export default class LoginCtrl extends JEController implements ILoginCtrl {
  loginServiceCtrl?: ILoginService;
  constructor() {
    super();
    this.createModel<ILoginModel>(LoginModel, {})
    this.init()
  }
 /**
   * 初始化 实现ILoginCtrl接口的init方法 
   * 无返回
   */
  init(): void {
    //将this.loginModel断言成LoginModel
    //初始化默认登录方法
    this.chooseLoginMode((this.loginModel as LoginModel).mode)
  };

  /**
   * 登录模式切换
   * @param {loginModelNum} loginModeType
   * @memberof LoginCtrl
   */
  chooseLoginMode(loginModeType: loginModelNum): void {
    this.loginModel.mode = loginModeType;
    //声明变量Ctor为any类型
    let Ctor:any = function (){}
    //处理不同的登录方式
    if (loginModeType === loginModelNum.BASIC) {
      Ctor = BasicLoginCtrl
    }else if(loginModeType === loginModelNum.CAPTCHA){
      Ctor = CaptchaLoginCtrl
    }
    //实例化Ctor
    this.loginServiceCtrl = new Ctor();
  };
   /**
   * 登录
   * 无返回
   */
  login(): void {
    if(this.loginServiceCtrl){
      let params =  this.loginServiceCtrl.login(this.loginModel);
      //不同的登录传参不同，请求同一个登录
      console.log('params',params)
      JE.ajax({
        url:'/rbac/login/login',
        data:JSON.parse(params),
      }).then((res:any)=>{
        console.log('res',res);
        alert(res.message)
        //不同登录请求 处理返回参数
        //this.loginServiceCtrl.afterLogin()
      })
    }
  };
  /**
   * 忘记密码 实现跳转 TODO 忘记密码设置成功直接登录或者跳转登录
   */
  forgetPwd(): void {};
}