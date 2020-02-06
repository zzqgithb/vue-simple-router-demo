/**
 * @Author : ZiQin Zhai
 * @Date : 2020/2/6 10:28
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/2/6 10:28
 * @Description
 **/
export type listSqlType = "search" | "parent" | "perm" | "queryStrategy"; // 列表搜索

export interface IListModel {
  building: boolean; // 列表是否加载完成
  readonly: boolean; // 是否为只读列表 只读列表不可删除，核心按钮不可以使用
  store: object; // 数据集合
  sqls: object;
}
