import { __extends } from "tslib";
/**
 * @Author : ZiQin Zhai
 * @Date : 2020/1/15 18:10
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/1/15 18:10
 * @Description
 **/
import JEModel from "@/core/mvc/model/JEModel";
var LoginModel = /** @class */ (function (_super) {
    __extends(LoginModel, _super);
    // @ObserverKey()
    function LoginModel(params) {
        var _this = _super.call(this, params) || this;
        _this.params = params;
        _this.nameSpace = "loginModel";
        _this.LoginService = {
            login: function () {
                console.log('账号密码请求登录');
                var login = JE.ajax({
                    url: '',
                    params: {},
                });
                console.log(login.res);
            }
        };
        _this.CaptchaLogin = {
            login: function () {
                console.log('动态验证码登录');
            },
            getCaptcha: function () {
                console.log('获取动态验证码');
            }
        };
        params = _this.params;
        console.log('此处是login的具体实现', _this.params);
        //假数据--zh(账号密码) --dtm(动态码)  ---dsf(第三方)
        switch (params.mode) {
            case 'dtm':
                _this.CaptchaLogin.getCaptcha(Number(params.username));
                break;
            case 'dtmdl':
                _this.CaptchaLogin.login({ mode: params.mode, username: params.username, captcha: params.captcha });
                break;
            case 'dsf':
                _this.OtherLogin();
                break;
            default:
                _this.LoginService.login({ mode: params.mode, username: params.username, password: params.password });
        }
        return _this;
    }
    LoginModel.prototype.OtherLogin = function () {
        console.log('三方登录');
    };
    //登录请求的具体实现
    LoginModel.prototype.ajaxLogin = function () {
    };
    return LoginModel;
}(JEModel));
export default LoginModel;
//# sourceMappingURL=LoginModel.js.map