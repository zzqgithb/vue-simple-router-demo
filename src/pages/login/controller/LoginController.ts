/**
 * @Author : ZiQin Zhai
 * @Date : 2020/1/15 18:10
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/1/15 18:10
 * @Description
 **/
import JEController from "@/core/mvc/controller/JEController";
import LoginModel, { LoginModelParams } from "@/pages/login/model/LoginModel";

export default class LoginController extends JEController {
  constructor() {
    super();
    this.loginIn(option);
  }

  init() {
    this.createModel<LoginModelParams>(LoginModel,option);
  }
  loginIn(){
    console.log('点击登录',this);
    this.createModel<LoginModelParams>(LoginModel,option);
  }
}
