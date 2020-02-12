/**
 * @Author : ZiQin Zhai
 * @Date : 2020/2/12 9:27
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/2/12 9:27
 * @Description 表单模型接口相关数据
 **/
export interface IFormModels {
  readonly?: boolean; // 是否为只读表单，只读表单中所有的字段均为只读
  fields?: object[]; // 字段信息
  recordChanges: boolean; // 是否启用监控
  changeHistory: object; // 所有变更过的历史字段值
  $options?: {
    // 初始化数据
    values: object; // 加载的初始值
    readonly: boolean;
  };
}
