/**
 * @Author : ZiQin Zhai
 * @Date : 2020/1/15 18:10
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/1/15 18:10
 * @Description
 **/
import JEModel from "@/core/mvc/model/JEModel";
// import { ObserverKey } from "@/core/mvc/model/modelDecorator.ts";
import IJeModel from "@/core/mvc/model/types/IJeModel";
import { ILoginModel } from "@/pages/login/index/interface/ILoginModel";
import {ILoginService,ICaptchaLogin} from"@/pages/login/index/interface/ILoginCtrl"
export default class LoginModel extends JEModel implements IJeModel {
  nameSpace = "loginModel";
  // @ObserverKey()
  constructor(public params: ILoginModel) {
    super(params);
    params = this.params;
    params.code = 'dtmdl';
    console.log('此处是login的具体实现',this.params);
    //假数据--zh(账号密码) --dtm(动态码)  ---dsf(第三方)
    switch(params.code){
      case 'dtm':
      this.CaptchaLogin.getCaptcha(13161335902);
      break;
      case 'dtmdl':
      this.CaptchaLogin.login({mode:"dtmdl",username:'333',captcha:'444'});
      break;
      case 'dsf':
      this.OtherLogin();
      break;
      default:
      this.LoginService.login({mode:"111",username:'333',password:'444'});
    }
  }
  LoginService:ILoginService = {
    login:()=>{
      console.log('账号密码请求登录');
      return;
      JE.ajax({
        url:'',

      })
    }
  };
  CaptchaLogin:ICaptchaLogin = {
    login:()=>{
      console.log('动态验证码登录')
    },
    getCaptcha:()=>{
      console.log('获取动态验证码')
    }
  }
  OtherLogin(){
    console.log('三方登录')
  }
}
