import { ILoginService } from '../interface/ILoginCtrl';
import { ILoginModel } from "../interface/ILoginModel"
import JEController from '@/core/mvc/controller/JEController';
/**
 *  用于负责普通登录的控制器 
 *  return 返回普通登录传参params
 * */
export default class BasicLoginCtrl implements ILoginService {
  login(loginModel: ILoginModel): string {//参数遵循ILoginModel接口定义
    const username = loginModel.username;
    const password = loginModel.password;
    return JSON.stringify({
      "j_username":username,
      "j_password":password,
      isNew:1
    })//返回params  为请求登录做准备
  }
}