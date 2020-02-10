import { __extends } from "tslib";
/**
 * @Author : ZiQin Zhai
 * @Date : 2020/1/15 18:10
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/1/15 18:10
 * @Description
 **/
import JEController from "@/core/mvc/controller/JEController";
import LoginModel from "@/pages/login/model/LoginModel";
var LoginController = /** @class */ (function (_super) {
    __extends(LoginController, _super);
    function LoginController(params) {
        var _this = _super.call(this) || this;
        _this.params = params;
        return _this;
    }
    LoginController.prototype.loginIn = function () {
        this.createModel(LoginModel, this.params);
    };
    return LoginController;
}(JEController));
export default LoginController;
//# sourceMappingURL=LoginController.js.map