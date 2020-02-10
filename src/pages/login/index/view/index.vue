<template>
  <view class="uni-common-form-style">
    <view class="uni-common-mt uni-loginbg">
      <img src="../../../../static/login/loginbg.png" alt="" srcset="" />
      <img class="login-logo" src="../../../../static/login/logo.png" alt="" />
    </view>
    <view class="uni-common-mt uni-center">
      <view class="uni-common-mt ">
        <view class="uni-form-item uni-column">
          <text class="jeicon jeicon-user-o"></text>
          <input
            ref="username"
            class="uni-input"
            type="number"
            placeholder="手机号/账户"
            placeholder-style="color:#aab2bd;"
            v-model="loginCtrl.loginModel.username"
          />
          <text class="jeicon jeicon-angle-right"></text>
        </view>
        <view class="uni-form-item uni-column">
          <text class="jeicon jeicon-lock"></text>
          <view
            v-show="loginCtrl.loginModel.showVer"
            class=""
            style="flex:1;display:flex;"
          >
            <input
              ref="password"
              class="uni-input"
              password
              type="text"
              placeholder="密码"
              placeholder-style="color: #aab2bd;"
              v-model="loginCtrl.loginModel.password"
            />
            <text class="jeicon jeicon-eye-close"></text>
          </view>
          <view
            v-show="!loginCtrl.loginModel.showVer"
            class=""
            style="flex:1;display:flex;"
          >
            <input
              ref="password"
              class="uni-input"
              type="text"
              placeholder="短信动态码"
              placeholder-style="color: #aab2bd;"
              v-model="loginCtrl.loginModel.captcha"
            />
            <text class="uni-getcode" @click="getCaptcha">获取</text>
          </view>
        </view>
        <view class="uni-common-mt uni-change-login">
          <!-- <text @click="loginCtrl.loginModel.showVer = !loginCtrl.loginModel.showVer">动态密码登录</text> -->
          <text>忘记密码？</text>
        </view>
      </view>
      <view class="uni-padding-wrap uni-common-mt uni-button-login">
        <button type="primary" @click="loginCtrl.login.call(loginCtrl)">
          登录
        </button>
        <view class="uni-other-login">
          <text class="jeicon jeicon-qq"></text>
          <text class="jeicon jeicon-weixin"></text>
        </view>
      </view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
import { Component, Vue ,Watch} from "vue-property-decorator";
import LoginController from "@/pages/login/index/controller/LoginController";

@Component({})
export default class Login extends Vue {
  created() {
    this._loginCtrl = this.$createCtrl(LoginController);
  }
  get loginCtrl(){
    return this._loginCtrl||{};
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
      width: 160rpx;
      height: 160rpx;
      position: absolute;
      top: 10%;
      left: 50%;
      margin-left: -80rpx;
    }
  }
  .uni-center {
    margin-top: 120rpx;
    .uni-form-item {
      background: #f1f1f1;
      border-radius: 16rpx;
      width: 520rpx;
      margin: 40rpx auto;
      padding: 20rpx 40rpx;
      display: flex;
      justify-content: space-between;
      input {
        margin-left: 30rpx;
        flex: 1;
      }
      .jeicon {
        color: #cfcfcf;
        &.jeicon-angle-right {
          transform: rotate(90deg);
        }
      }
      .uni-getcode {
        color: #fff;
        background: #386bd0;
        padding: 4rpx 16px;
        font-size: 20rpx;
      }
    }
    .uni-change-login {
      width: 600rpx;
      margin: 20rpx auto;
      display: flex;
      justify-content: space-between;
      color: #386bd0;
      font-size: 32rpx;
    }
    .uni-button-login {
      width: 600rpx;
      margin: 100rpx auto;
      button {
        box-shadow: 0 4rpx 4rpx 0 rgba(83, 109, 254, 0.44);
        color: #ffffff;
      }
      .uni-other-login {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 90rpx;
        text {
          flex: 1;
          text-align: center;
          color: #cfcfcf;
          font-size: 60rpx;
        }
      }
    }
  }
}
</style>
