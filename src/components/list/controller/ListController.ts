import listInterface from "../interface/IListCtrl";
import { listSqlType, IListModel } from '../interface/IListModel'
import JEController from '@/core/mvc/controller/JEController';
import ListModel from '../model/ListModel';

export default class ListController extends JEController implements listInterface {
    store: any = null;
    data: any = [];
    sqls: any = [];
    constructor(public funcCtrl: any) {
        super();
        this.funcCtrl = funcCtrl || {};
        // 創建模型對象
        this.createModel<IListModel>(ListModel, {
            primaryKey: 'test'
        })
        console.log(this.listModel)
    }

    /**
     * 初始化数据集store
     */
    createStore() {
        const { info } = this.funcCtrl;
        this.store = JE.createStore({
            url: JE.value(info.action, JE.getUrlMaps('je.core')) + JE.getUrlMaps('method.load'),
            params: {
                tableCode: info.tableName,
                orderSql: info.orderSql,
            },
            pageSize: info.pageSize,
            idName: info.pkName,
        });
    }
    /**
     * 加载数据
     * @param page 当前的页码
     * @param config 请求配置项
     * @return 返回的是请求的数据
     */
    load(page: number, config: any) {
        const me = this;
        const params = (config && config.params) || {};
        params.whereSql = this.getWhereSqls(params.whereSql || '');
        this.store.loadPage(page, {
            params,
            callback: (data: object) => {
                me.data = me.store.data;
                config && config.callback && config.callback(data);
            },
        });
    }

    getWhereSqls(whereSql: string) {
        // 拼接defaultSql
        whereSql += this.funcCtrl.info.whereSql;

        whereSql = JE.toXT(whereSql, '');
        JE.each(Object.assign({}, this.sqls), (sql) => {
            whereSql += sql || '';
        });
        return whereSql;
    }

    setWhereSql(key: listSqlType, val: string) {
        this.sqls[key] = val;
    }
}
