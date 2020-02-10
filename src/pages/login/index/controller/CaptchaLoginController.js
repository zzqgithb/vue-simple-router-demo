/**用于负责验证码登录的控制器 */
var CaptchaLoginCtrl = /** @class */ (function () {
    function CaptchaLoginCtrl() {
    }
    CaptchaLoginCtrl.prototype.getCaptcha = function (telephone) {
        console.log('获取验证码');
    };
    ;
    CaptchaLoginCtrl.prototype.login = function (loginModel) {
        var username = loginModel.username;
        var captcha = loginModel.captcha;
        console.log(username, captcha);
        return '';
    };
    return CaptchaLoginCtrl;
}());
export default CaptchaLoginCtrl;
//# sourceMappingURL=CaptchaLoginController.js.map