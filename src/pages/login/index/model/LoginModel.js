import { __decorate, __extends } from "tslib";
import JEModel from '@/core/mvc/model/JEModel';
import { ObserverKey } from '@/core/mvc/model/modelDecorator';
//定义loginModel类，继承自JEModel 并且实现IJeModel和ILoginModel接口
var LoginModel = /** @class */ (function (_super) {
    __extends(LoginModel, _super);
    function LoginModel(params) {
        var _this = 
        //继承父级参数
        _super.call(this, params) || this;
        //私有命名空间
        _this._nameSpace = 'loginModel';
        //私有登录方式
        _this._mode = "basic" /* BASIC */; //默认账户密码登录
        //公有双向绑定 username-必要传参
        _this._username = '';
        //公有非必要传参showVer
        _this._showVer = true;
        //公有非必要传参showVer
        _this._showPwd = true;
        return _this;
    }
    Object.defineProperty(LoginModel.prototype, "nameSpace", {
        get: function () {
            return this._nameSpace;
        },
        set: function (value) {
            this._nameSpace = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginModel.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        set: function (value) {
            this._mode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginModel.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginModel.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginModel.prototype, "captcha", {
        get: function () {
            return this._captcha;
        },
        set: function (value) {
            this._captcha = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginModel.prototype, "accessToken", {
        get: function () {
            return this._accessToken;
        },
        set: function (value) {
            this._accessToken = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginModel.prototype, "code", {
        get: function () {
            return this._code;
        },
        set: function (value) {
            this._code = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginModel.prototype, "showVer", {
        get: function () {
            return this._showVer;
        },
        set: function (value) {
            this._showVer = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginModel.prototype, "showPwd", {
        get: function () {
            return this._showPwd;
        },
        set: function (value) {
            this._showPwd = value;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        ObserverKey()
    ], LoginModel.prototype, "_username", void 0);
    __decorate([
        ObserverKey()
    ], LoginModel.prototype, "_password", void 0);
    __decorate([
        ObserverKey()
    ], LoginModel.prototype, "_captcha", void 0);
    __decorate([
        ObserverKey()
    ], LoginModel.prototype, "_showVer", void 0);
    __decorate([
        ObserverKey()
    ], LoginModel.prototype, "_showPwd", void 0);
    return LoginModel;
}(JEModel));
export default LoginModel;
//# sourceMappingURL=LoginModel.js.map