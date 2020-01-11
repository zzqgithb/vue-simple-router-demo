<template>
  <view class="content">
    <image class="logo" src="../../static/logo.png"></image>
    <view>
      <text class="title">{{ title }}</text>
    </view>
    <button type="default" @click="jumpPlugin">跳转到插件</button>
  </view>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "vue";

interface Test {
  readonly title: string;
}
@Component({
  data: (): Test => {
    return {
      title: "123"
    };
  },
  components: {}
})
export default class Index extends Vue {
  mounted() {
  }
  jumpPlugin() {
    uni.navigateTo({
      url: "/pages/plugin/index",
    });
  }
}
</script>
<style>
.content {
  text-align: center;
  height: 400upx;
}
.logo {
  height: 200upx;
  width: 200upx;
  margin-top: 200upx;
}
.title {
  font-size: 36upx;
  color: #8f8f94;
}
</style>
