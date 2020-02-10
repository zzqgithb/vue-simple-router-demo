import { __extends } from "tslib";
/**
 * 登录控制器
 *  */
import JEController from '@/core/mvc/controller/JEController';
import LoginModel from '../model/LoginModel';
import BasicLoginCtrl from './BasicLoginController';
import CaptchaLoginCtrl from './CaptchaLoginController';
var LoginCtrl = /** @class */ (function (_super) {
    __extends(LoginCtrl, _super);
    function LoginCtrl() {
        var _this = _super.call(this) || this;
        _this.createModel(LoginModel, {});
        _this.init();
        return _this;
    }
    LoginCtrl.prototype.init = function () {
        this.chooseLoginMode(this.loginModel.mode);
    };
    ;
    /**
     * 选择登录模式
     * @param {loginModelNum} loginModeType
     * @memberof LoginCtrl
     */
    LoginCtrl.prototype.chooseLoginMode = function (loginModeType) {
        this.loginModel.mode = loginModeType;
        var Ctor = function () { };
        if (loginModeType === "basic" /* BASIC */) {
            Ctor = BasicLoginCtrl;
        }
        else if (loginModeType === "captcha" /* CAPTCHA */) {
            Ctor = CaptchaLoginCtrl;
        }
        this.loginServiceCtrl = new Ctor();
    };
    ;
    LoginCtrl.prototype.login = function () {
        if (this.loginServiceCtrl) {
            this.loginServiceCtrl.login(this.loginModel);
        }
    };
    ;
    LoginCtrl.prototype.forgetPwd = function () {
    };
    ;
    return LoginCtrl;
}(JEController));
export default LoginCtrl;
//# sourceMappingURL=LoginController.js.map