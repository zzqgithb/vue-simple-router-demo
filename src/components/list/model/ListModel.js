import { __extends } from "tslib";
import JEModel from "@/core/mvc/model/JEModel";
var ListModel = /** @class */ (function (_super) {
    __extends(ListModel, _super);
    function ListModel(params) {
        var _this = _super.call(this, params) || this;
        _this.nameSpace = 'listModel';
        _this._primaryKey = ''; // 主键的属性名称
        _this._building = false; // 列表是否加载完成
        _this._readonly = false; // 是否为只读列表 只读列表不可删除，核心按钮不可以使用
        _this._store = {}; // 数据集合
        _this.primaryKey = params.primaryKey;
        _this.building = params.building;
        _this.readonly = params.readonly;
        _this.store = params.store;
        _this.sqls = params.sqls;
        return _this;
    }
    Object.defineProperty(ListModel.prototype, "primaryKey", {
        get: function () {
            return this._primaryKey;
        },
        set: function (value) {
            this._primaryKey = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListModel.prototype, "building", {
        get: function () {
            return this._building;
        },
        set: function (value) {
            this._building = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListModel.prototype, "readonly", {
        get: function () {
            return this._readonly;
        },
        set: function (value) {
            this._readonly = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListModel.prototype, "store", {
        get: function () {
            return this._store;
        },
        set: function (value) {
            this._store = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListModel.prototype, "sqls", {
        get: function () {
            return this._sqls;
        },
        set: function (value) {
            this._sqls = value;
        },
        enumerable: true,
        configurable: true
    });
    return ListModel;
}(JEModel));
export default ListModel;
//# sourceMappingURL=ListModel.js.map