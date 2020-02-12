import JEModel from "@/core/mvc/model/JEModel";
export default class ListModel extends JEModel {
  constructor(params) {
    super(params);
    this.nameSpace = "listModel";
    this._primaryKey = ""; // 主键的属性名称
    this._building = false; // 列表是否加载完成
    this._readonly = false; // 是否为只读列表 只读列表不可删除，核心按钮不可以使用
    this._store = {}; // 数据集合
    this.primaryKey = params.primaryKey;
    this.building = params.building;
    this.readonly = params.readonly;
    this.store = params.store;
    this.sqls = params.sqls;
  }
  get primaryKey() {
    return this._primaryKey;
  }
  set primaryKey(value) {
    this._primaryKey = value;
  }
  get building() {
    return this._building;
  }
  set building(value) {
    this._building = value;
  }
  get readonly() {
    return this._readonly;
  }
  set readonly(value) {
    this._readonly = value;
  }
  get store() {
    return this._store;
  }
  set store(value) {
    this._store = value;
  }
  get sqls() {
    return this._sqls;
  }
  set sqls(value) {
    this._sqls = value;
  }
}
//# sourceMappingURL=ListModel.js.map
