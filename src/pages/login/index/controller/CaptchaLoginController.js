/**
 * 用于负责验证码登录的控制器
 * return 返回动态验证码登录传参params
 * */
var CaptchaLoginCtrl = /** @class */ (function () {
    function CaptchaLoginCtrl() {
    }
    CaptchaLoginCtrl.prototype.getCaptcha = function (telephone) {
        console.log('获取验证码');
    };
    ;
    /**
     * 继承ILoginService的login
     * parmas 参数遵循ILoginModel接口定义
     * return 返回动态验证码请求params
     * */
    CaptchaLoginCtrl.prototype.login = function (loginModel) {
        var username = loginModel.username;
        var captcha = loginModel.captcha;
        return '';
    };
    return CaptchaLoginCtrl;
}());
export default CaptchaLoginCtrl;
//# sourceMappingURL=CaptchaLoginController.js.map