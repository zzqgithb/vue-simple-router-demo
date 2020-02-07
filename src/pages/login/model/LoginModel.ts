/**
 * @Author : ZiQin Zhai
 * @Date : 2020/1/15 18:10
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/1/15 18:10
 * @Description
 **/
import JEModel from "@/core/mvc/model/JEModel";
import { ObserverKey } from "@/core/mvc/model/modelDecorator.ts";
import IJeModel from "@/core/mvc/model/types/IJeModel";
import { ILoginModel } from "@/pages/login/index/interface/ILoginModel";

export default class LoginModel extends JEModel implements IJeModel {
  nameSpace = "loginModel";
  @ObserverKey()
  constructor(public params: ILoginModel) {
    super(params);
    console.log('此处是login的具体实现')
  }
}
