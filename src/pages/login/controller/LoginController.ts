/**
 * @Author : ZiQin Zhai
 * @Date : 2020/1/15 18:10
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/1/15 18:10
 * @Description
 **/
import JEController from "@/core/mvc/controller/JEController";
import LoginModel from "@/pages/login/model/LoginModel";
import  {ILoginModel}  from "@/pages/login/index/interface/ILoginModel";

export default class LoginController extends JEController {
  constructor(public params:ILoginModel) {
    super();
  }
  loginIn(){
    this.createModel<ILoginModel>(LoginModel,this.params);
  }
}
