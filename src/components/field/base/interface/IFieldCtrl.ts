/**
 * @Author : ZiQin Zhai
 * @Date : 2020/2/12 10:49
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/2/12 10:49
 * @Description 字段控制器
 **/

export default interface IFieldCtrl {
  init: () => void; // 字段初始化事件
  setValue: () => void; // 设置字段值
  getValue: () => any; // 获取当前字段的值
  reset: () => void; // 重置当前字段的值
  resetField: () => void; // 重置当前字段中的所有值，包括label，只读情况等
  isEmpty: () => boolean; // 验证当前字段是否为空
  setAllowBlank: (allowBlank: boolean) => boolean; // 设置是否允许字段为空
  validate: () => boolean; // 验证当前字段是否符合提交规则
  valueChange: (val: any) => void; // 字段值发生改变时候触发的操作

  setReadOnly: (readonly: boolean) => boolean; // 设置只读情况
  setVisible: (visible: boolean) => boolean; // 设置可见情况
  toggleVisible: () => boolean; // 切换显隐状态
}
