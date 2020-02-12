/**
 * @Author : ZiQin Zhai
 * @Date : 2020/2/12 10:52
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/2/12 10:52
 * @Description
 **/
import fieldTypeEnum from "@/constacts/fieldTypeEnum";

import IFormCtrl from "../../../form/interface/IFormCtrl";
export default interface IFieldModel {
  form?: IFormCtrl; // 当前字段关联的表单
  readonly?: boolean; // 表单是否只读
  value?: any; // 字段值
  label?: string; // 当前字段标签
  history: any[]; // 当前字段的变更历史 需要约定一个最大保存数量
  allowBlank: boolean; // 是否允许为空
  $options: {
    value: any;
    readonly: boolean;
    type: fieldTypeEnum;
  };
};;;;;;;;;;;
