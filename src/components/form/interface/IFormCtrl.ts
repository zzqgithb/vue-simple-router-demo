/**
 * @Author : ZiQin Zhai
 * @Date : 2020/2/12 9:21
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/2/12 9:21
 * @Description
 **/
export default interface IFormCtrl {
  init: () => void; // 表单初始化

  initFields: () => void; // 根据字段的配置信息实例化配置

  getChanges: () => void; // 获取表单中所有变更过的记录

  setReadOnly: (bool: boolean) => boolean; // 设置表单只读

  setValues: (values: object) => boolean; // 根据key设置字段值

  getFields: () => boolean; // 获取全部的字段

  getField: (fieldCode: string) => object; // 根据字段编码获取字段

  isValid: () => boolean; // 验证字段是否符合提交条件

  getValues: () => object; // 获取当前表单的所有值

  reset: () => boolean; // 将字段值全部清空

  resetByCode: (code: string) => boolean; // 根据字段code重置字段

  getPKValue: () => string; // 获取当前表单的主键值

  createField: (field: object) => object; // 根据字段配置创建字段，同时将当前的字段信息保存到模型的fields中
  // getDataFromServer: () => object; // 通过主键Id远程获取数据

  submit: () => object; // 校验表单合法性，进行数据提交
}
