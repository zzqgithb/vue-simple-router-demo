<template>
  <view class="uni-common-form-style">
    <view class="uni-common-mt uni-loginbg">
      <img src="../../../../static/login/loginbg.png" alt="" srcset="" />
      <img class="login-logo" src="../../../../static/login/logo.png" alt="" />
    </view>
    <view class="uni-common-mt uni-center">
      <view class="uni-common-mt ">
        <view class="uni-form-item uni-column">
          <input
            ref="username"
            class="uni-input"
            type="number"
            placeholder="手机号/账户"
            v-model="testCtrl.username"
            @input="onKeyUsernameInput"
          />
        </view>
        <view class="uni-form-item uni-column">
          <input
            ref="password"
            class="uni-input"
            password
            type="text"
            placeholder="密码"
            v-model="testCtrl.password"
            @input="onKeyPasswordInput"
          />
        </view>
        <view class="uni-common-mt uni-change-login">
          <text>动态密码登录</text>
          <text>忘记密码？</text>
        </view>
      </view>
      <view class="uni-padding-wrap uni-common-mt uni-button-login">
        <button type="primary" @click="loginIn">登录</button>
      </view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
import ILoginService from "@/pages/login/index/interface/ILoginCtrl";
import { Component, Vue } from "vue-property-decorator";
import LoginController from "@/pages/login/controller/LoginController";
import  ILoginModel  from "@/pages/login/index/interface/ILoginModel";

@Component({})
export default class Login extends Vue {
  data(){
    return{
      username:'',
      password:'',
    };
  }
  created() {
    this._testCtrl = this.$createCtrl(LoginController);
  }
  get testCtrl(){
    console.log('888',this._testCtrl);
    return this._testCtrl;
  }
  loginIn(){
    // 请求后台
    // 成功后跳转
    return;
    uni.navigateTo({
      url: `../../../test/test?params=${Math.random()}`,
    });
  }
  onKeyUsernameInput(event){
      this.username = event.target.value;
  }
  onKeyPasswordInput(event){
     this.password = event.target.value;
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.uni-common-form-style {
  .uni-loginbg {
    img {
      width: 100%;
    }
    .login-logo {
      width: 80px;
      height: 80px;
      position: absolute;
      top: 10%;
      left: 50%;
      margin-left: -40px;
    }
  }
  .uni-center {
    margin-top: 60px;
    .uni-form-item {
      background: #f1f1f1;
      border-radius: 8px;
      width: 240px;
      margin: 20px auto;
      padding: 10px 30px;
      input {
      }
    }
    .uni-change-login {
      width: 300px;
      margin: 10px auto;
      display: flex;
      justify-content: space-between;
      color: #386bd0;
    }
    .uni-button-login {
      width: 300px;
      margin: 100px auto;
    }
  }
}
</style>
