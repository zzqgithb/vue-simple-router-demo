<template>
  <view class="uni-common-form-style">
    <view class="uni-common-mt ">
      <view class="uni-form-item uni-column">
        <input class="uni-input" type="number" placeholder="请输入账号" />
      </view>
      <view class="uni-form-item uni-column">
        <input
          class="uni-input"
          password
          type="text"
          placeholder="请输入密码"
        />
      </view>
    </view>
    <view class="uni-padding-wrap uni-common-mt">
      <button type="primary" @click="loginIn">登录</button>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
import ILoginCtrl from "@/pages/login/index/interface/ILoginCtrl";

export default {
    props: {},
    data() {
        return {};
    },
    computed: {},
    created() {
    },
    mounted() {
    },
    updated() {
    },
    methods: {
      loginIn(){
        console.log('ILoginCtrl',ILoginCtrl);
        // 请求后台
        // 成功后跳转
        uni.navigateTo({
          url: `../../../test/test?params=${Math.random()}`,
        });
      },
    },
    watch: {},
};
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
