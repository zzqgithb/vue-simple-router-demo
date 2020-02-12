import { __decorate } from "tslib";
import JEModel from "@/core/mvc/model/JEModel";
import { ObserverKey } from "@/core/mvc/model/modelDecorator";
//定义loginModel类，继承自JEModel 并且实现IJeModel和ILoginModel接口
export default class LoginModel extends JEModel {
  constructor(params) {
    //继承父级参数
    super(params);
    //私有命名空间
    this._nameSpace = "loginModel";
    //私有登录方式
    this._mode = "basic" /* BASIC */; //默认账户密码登录
    //公有双向绑定 username-必要传参
    this._username = "";
    //公有非必要传参showVer
    this._showVer = true;
    //公有非必要传参showVer
    this._showPwd = true;
  }
  get nameSpace() {
    return this._nameSpace;
  }
  set nameSpace(value) {
    this._nameSpace = value;
  }
  get mode() {
    return this._mode;
  }
  set mode(value) {
    this._mode = value;
  }
  get username() {
    return this._username;
  }
  set username(value) {
    this._username = value;
  }
  get password() {
    return this._password;
  }
  set password(value) {
    this._password = value;
  }
  get captcha() {
    return this._captcha;
  }
  set captcha(value) {
    this._captcha = value;
  }
  get accessToken() {
    return this._accessToken;
  }
  set accessToken(value) {
    this._accessToken = value;
  }
  get code() {
    return this._code;
  }
  set code(value) {
    this._code = value;
  }
  get showVer() {
    return this._showVer;
  }
  set showVer(value) {
    this._showVer = value;
  }
  get showPwd() {
    return this._showPwd;
  }
  set showPwd(value) {
    this._showPwd = value;
  }
}
__decorate([ObserverKey()], LoginModel.prototype, "_username", void 0);
__decorate([ObserverKey()], LoginModel.prototype, "_password", void 0);
__decorate([ObserverKey()], LoginModel.prototype, "_captcha", void 0);
__decorate([ObserverKey()], LoginModel.prototype, "_showVer", void 0);
__decorate([ObserverKey()], LoginModel.prototype, "_showPwd", void 0);
//# sourceMappingURL=LoginModel.js.map
