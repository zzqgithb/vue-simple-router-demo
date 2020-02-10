/**用于负责普通登录的控制器 */
var BasicLoginCtrl = /** @class */ (function () {
    function BasicLoginCtrl() {
    }
    BasicLoginCtrl.prototype.login = function (loginModel) {
        var username = loginModel.username;
        var password = loginModel.password;
        console.log(username, password);
        return '';
    };
    return BasicLoginCtrl;
}());
export default BasicLoginCtrl;
//# sourceMappingURL=BasicLoginController.js.map