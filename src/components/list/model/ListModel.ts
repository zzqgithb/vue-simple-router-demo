import JEModel from "@/core/mvc/model/JEModel";
import { ObserverKey } from "@/core/mvc/model/modelDecorator.ts";
import { listSqlType, IListModel } from "../interface/IListModel";
import IJeModel from '@/core/mvc/model/types/IJeModel';

export default class ListModel extends JEModel implements IListModel,IJeModel {
    nameSpace = 'listModel';
    private _primaryKey = ''; // 主键的属性名称
    public get primaryKey() {
        return this._primaryKey;
    }
    public set primaryKey(value) {
        this._primaryKey = value;
    }
    private _building = false; // 列表是否加载完成
    public get building() {
        return this._building;
    }
    public set building(value) {
        this._building = value;
    }
    private _readonly = false; // 是否为只读列表 只读列表不可删除，核心按钮不可以使用
    public get readonly() {
        return this._readonly;
    }
    public set readonly(value) {
        this._readonly = value;
    }
    private _store = {}; // 数据集合
    public get store() {
        return this._store;
    }
    public set store(value) {
        this._store = value;
    }
    private _sql;
    public get sqls() {
        return this._sqls;
    }
    public set sqls(value) {
        this._sqls = value;
    }

    constructor(params: IListModel) {
        super(params);
        this.primaryKey = params.primaryKey
        this.building = params.building
        this.readonly = params.readonly
        this.store = params.store
        this.sqls = params.sqls
    }
    
}