import JEModel from '@/core/mvc/model/JEModel';
import IJeModel from '@/core/mvc/model/types/IJeModel';
import { ILoginModel } from '../interface/ILoginModel';
import loginModelNum from '@/constacts/loginModelNum'
import { ObserverKey } from '@/core/mvc/model/modelDecorator';

//定义loginModel类，继承自JEModel 并且实现IJeModel和ILoginModel接口
export default class LoginModel extends JEModel implements IJeModel, ILoginModel {
  //私有命名空间
  private _nameSpace = 'loginModel';
  public get nameSpace() {
    return this._nameSpace;
  }
  public set nameSpace(value) {
    this._nameSpace = value;
  }
  //私有登录方式
  private _mode = loginModelNum.BASIC;//默认账户密码登录
  public get mode() {
    return this._mode;
  }
  public set mode(value) {
    this._mode = value;
  }
  //公有双向绑定 username-必要传参
  @ObserverKey()
  private _username: string = '';
  public get username(): string {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }
  //公有双向绑定password-非必要传参
  @ObserverKey()
  private _password?: string | undefined;
  public get password(): string | undefined {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  //公有双向绑定captcha-非必要传参
  @ObserverKey()
  private _captcha?: string | undefined;
  public get captcha(): string | undefined {
    return this._captcha;
  }
  public set captcha(value: string | undefined) {
    this._captcha = value;
  }
  //私有非必要传参accessToken
  private _accessToken?: string | undefined;
  public get accessToken(): string | undefined {
    return this._accessToken;
  }
  public set accessToken(value: string | undefined) {
    this._accessToken = value;
  }
  //私有非必要传参code
  private _code?: string | undefined;
  public get code(): string | undefined {
    return this._code;
  }
  public set code(value: string | undefined) {
    this._code = value;
  }
//公有非必要传参showVer
  @ObserverKey()
  private _showVer: boolean = true;
  public get showVer(): boolean {
    return this._showVer;
  }
  public set showVer(value: boolean) {
    this._showVer = value;
  }
 //公有非必要传参showVer
 @ObserverKey()
 private _showPwd: boolean = true;
 public get showPwd(): boolean {
   return this._showPwd;
 }
 public set showPwd(value: boolean) {
   this._showPwd = value;
 }
  constructor(params:ILoginModel){// 参数遵循ILoginModel接口规则
    //继承父级参数
    super(params);
  }

}