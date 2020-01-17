/**
 * @Author : ZiQin Zhai
 * @Date : 2020/1/15 18:10
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/1/15 18:10
 * @Description
 **/
import JEModel from "@/core/mvc/model/JEModel";
import { ObserveKey } from "@/core/mvc/model/modelDecorator";

export default class TestModel extends JEModel {
  @ObserveKey()
  testValue: string = "1";
  constructor(params: any) {
    super(params);
  }
}
