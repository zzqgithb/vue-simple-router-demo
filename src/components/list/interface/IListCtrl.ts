/**
 * @Author : ZiQin Zhai
 * @Date : 2020/2/6 10:28
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/2/6 10:28
 * @Description 列表控制器接口
 **/
// 数据的id或者是整条记录
type dataItem = string | object;
export default interface IListCtrl {
  // 创建数据集
  createStore: () => void;

  // 加载数据 返回一个promise，promise的结果为获取成功的数据集合
  load: (page: number, params: object) => Promise<any>;

  // 表单刷新
  refresh: (params: object) => Promise<any>;

  /**
   * 将数据通过render解析到页面
   * @param idOrData id或者是对应的每一条数据
   */
  render: (idOrData: dataItem) => string;

  /**
   * 移除数据
   * @param idsOrDatas id的数组或者数据的数组，如果为数据时候，需要校验是否包含主键信息，不包含需要爆出异常
   * @return 是否删除成功
   */
  removeData: (idsOrDatas: string[] | object[]) => boolean;

  /**
   * 根据主键记录获取数据
   * @param id
   */
  getDataById: (id: string) => object | never;

  getDataByIds: (ids: string[]) => object[] | never;
}
