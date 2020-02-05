<template>
  <view class="uni-common-form-style">
    <view class="uni-common-mt ">
      <view class="uni-form-item uni-column">
        <input
          ref="username"
          class="uni-input"
          type="number"
          placeholder="请输入账号"
          v-model="ILoginModel.username"
          @input="onKeyUsernameInput"
        />
      </view>
      <view class="uni-form-item uni-column">
        <input
          ref="password"
          class="uni-input"
          password
          type="text"
          placeholder="请输入密码"
          v-model="ILoginModel.password"
          @input="onKeyPasswordInput"
        />
      </view>
    </view>
    <view class="uni-padding-wrap uni-common-mt">
      <button type="primary" @click="loginIn">登录</button>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
import ILoginService from "@/pages/login/index/interface/ILoginCtrl";
import { Component, Vue } from "vue-property-decorator";
import LoginController from "@/pages/login/controller/LoginController";
import  ILoginModel  from "@/pages/login/index/interface/ILoginModel";

@Component({})
// export default {
//     props: {},
//     data() {
//         return {};
//     },
//     computed: {},
//     created() {
//     },
//     mounted() {
//     },
//     updated() {
//     },
//     methods: {
//       loginIn(){

//       },
//     },
//     watch: {},
// };
export default class Login extends Vue {
  data(){
    return{
      username:'',
      password:'',
    };
  }
  created() {
    console.log('开始创建');
  }
  loginIn(){
    console.log('this',this.username,this.password);
    this.testCtrl = this.$createCtrl(LoginController);
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
  margin: 10px;
  .uni-form-item {
    margin: 10px;
  }
  input {
    border: 1px solid #ccc;
    height: 40px;
    border-radius: 8px;
  }
}
</style>
