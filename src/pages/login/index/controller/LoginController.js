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
    /**
      * 初始化 实现ILoginCtrl接口的init方法
      * 无返回
      */
    LoginCtrl.prototype.init = function () {
        //将this.loginModel断言成LoginModel
        //初始化默认登录方法
        this.chooseLoginMode(this.loginModel.mode);
    };
    ;
    /**
     * 登录模式切换
     * @param {loginModelNum} loginModeType
     * @memberof LoginCtrl
     */
    LoginCtrl.prototype.chooseLoginMode = function (loginModeType) {
        this.loginModel.mode = loginModeType;
        //声明变量Ctor为any类型
        var Ctor = function () { };
        //处理不同的登录方式
        if (loginModeType === "basic" /* BASIC */) {
            Ctor = BasicLoginCtrl;
        }
        else if (loginModeType === "captcha" /* CAPTCHA */) {
            Ctor = CaptchaLoginCtrl;
        }
        //实例化Ctor
        this.loginServiceCtrl = new Ctor();
    };
    ;
    /**
    * 登录
    * 无返回
    */
    LoginCtrl.prototype.login = function () {
        if (this.loginServiceCtrl) {
            var params = this.loginServiceCtrl.login(this.loginModel);
            //不同的登录传参不同，请求同一个登录
            console.log('params', params);
            JE.ajax({
                url: '/rbac/login/login',
                data: JSON.parse(params),
            }).then(function (res) {
                console.log('res', res);
                alert(res.message);
                //不同登录请求 处理返回参数
                //this.loginServiceCtrl.afterLogin()
            });
        }
    };
    ;
    /**
     * 忘记密码 实现跳转 TODO 忘记密码设置成功直接登录或者跳转登录
     */
    LoginCtrl.prototype.forgetPwd = function () { };
    ;
    return LoginCtrl;
}(JEController));
export default LoginCtrl;
//# sourceMappingURL=LoginController.js.map