/**
 *  用于负责普通登录的控制器
 *  return 返回普通登录传参params
 * */
var BasicLoginCtrl = /** @class */ (function () {
    function BasicLoginCtrl() {
    }
    BasicLoginCtrl.prototype.login = function (loginModel) {
        var username = loginModel.username;
        var password = loginModel.password;
        return JSON.stringify({
            "j_username": username,
            "j_password": password,
            isNew: 1
        }); //返回params  为请求登录做准备
    };
    return BasicLoginCtrl;
}());
export default BasicLoginCtrl;
//# sourceMappingURL=BasicLoginController.js.map