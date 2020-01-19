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

export type TestModelParams = {
  testValue: string;
};
export default class TestModel extends JEModel implements IJeModel {
  nameSpace = "testModel";
  @ObserverKey()
  testValue: string;
  constructor(params: TestModelParams) {
    super(params);
    this.testValue = params.testValue;
  }
}
