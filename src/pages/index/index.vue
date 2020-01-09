<template>
  <view class="content">
    <image class="logo" src="../../static/logo.png"></image>
    <view>
      <text class="title">{{ title }}</text>
    </view>

    <uni-drawer :visible="true">
      <view style="padding:30rpx;">
        <view class="uni-title">抽屉式导航</view>
      </view>
    </uni-drawer>
  </view>
</template>

<script lang="ts">
import uniDrawer from "@dcloudio/uni-ui";
import { Component } from "vue-property-decorator";
import Vue from "vue";

interface Test {
  readonly title: string;
}
@Component({
  data: (): Test => {
    return {
      title: "123",
    };
  }
})
export default class Index extends Vue {
  component: { uniDrawer: uniDrawer };
  mounted() {
    console.log(this);
  }
  replaceInput() {}
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
