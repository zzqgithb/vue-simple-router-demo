import { __decorate, __extends } from "tslib";
import JEModel from '@/core/mvc/model/JEModel';
import { ObserverKey } from '@/core/mvc/model/modelDecorator';
var LoginModel = /** @class */ (function (_super) {
    __extends(LoginModel, _super);
    function LoginModel(params) {
        var _this = _super.call(this, params) || this;
        _this._nameSpace = 'loginModel';
        _this._mode = "captcha" /* CAPTCHA */;
        _this._username = '';
        _this._codeShow = true;
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
    Object.defineProperty(LoginModel.prototype, "codeShow", {
        get: function () {
            return this._codeShow;
        },
        set: function (value) {
            this._codeShow = value;
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
    ], LoginModel.prototype, "_codeShow", void 0);
    return LoginModel;
}(JEModel));
export default LoginModel;
//# sourceMappingURL=LoginModel.js.map