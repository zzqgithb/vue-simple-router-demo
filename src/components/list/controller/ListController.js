import { __extends } from "tslib";
import JEController from '@/core/mvc/controller/JEController';
import ListModel from '../model/ListModel';
var ListController = /** @class */ (function (_super) {
    __extends(ListController, _super);
    function ListController(funcCtrl) {
        var _this = _super.call(this) || this;
        _this.funcCtrl = funcCtrl;
        _this.store = null;
        _this.data = [];
        _this.sqls = [];
        _this.funcCtrl = funcCtrl || {};
        // 創建模型對象
        _this.createModel(ListModel, {
            primaryKey: 'test'
        });
        console.log(_this.listModel);
        return _this;
    }
    /**
     * 初始化数据集store
     */
    ListController.prototype.createStore = function () {
        var info = this.funcCtrl.info;
        this.store = JE.createStore({
            url: JE.value(info.action, JE.getUrlMaps('je.core')) + JE.getUrlMaps('method.load'),
            params: {
                tableCode: info.tableName,
                orderSql: info.orderSql,
            },
            pageSize: info.pageSize,
            idName: info.pkName,
        });
    };
    /**
     * 加载数据
     * @param page 当前的页码
     * @param config 请求配置项
     * @return 返回的是请求的数据
     */
    ListController.prototype.load = function (page, config) {
        var me = this;
        var params = (config && config.params) || {};
        params.whereSql = this.getWhereSqls(params.whereSql || '');
        this.store.loadPage(page, {
            params: params,
            callback: function (data) {
                me.data = me.store.data;
                config && config.callback && config.callback(data);
            },
        });
    };
    ListController.prototype.getWhereSqls = function (whereSql) {
        // 拼接defaultSql
        whereSql += this.funcCtrl.info.whereSql;
        whereSql = JE.toXT(whereSql, '');
        JE.each(Object.assign({}, this.sqls), function (sql) {
            whereSql += sql || '';
        });
        return whereSql;
    };
    ListController.prototype.setWhereSql = function (key, val) {
        this.sqls[key] = val;
    };
    return ListController;
}(JEController));
export default ListController;
//# sourceMappingURL=ListController.js.map