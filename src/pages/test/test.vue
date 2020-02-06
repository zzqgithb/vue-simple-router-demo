<template>
  <view class="content">
    <view v-if="isShow">
      {{ testCtrl.testModel.testValue2 }}
      {{ testCtrl.testModel.testValue3 }}
    </view>
    <input type="text" v-model="testCtrl.testModel.testValue2" />
    <button @click="changeValue">测试</button>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import TestController from "@/pages/test/controller/TestController";
@Component({})
export default class Test extends Vue {
  isShow = false;
  created() {
    window.test = this;
    this._testCtrl = this.$createCtrl(TestController);
  }
  show() {
    this.isShow = !this.sShow;
  }
  changeValue() {
    this._testCtrl.testModel.testValue2 = 333;
  }
  get testCtrl() {
    return this._testCtrl;
  }

  @Watch("testModel", { immediate: true, deep: true })
  public onMsgChanged(newValue: string, oldValue: string) {
    alert(1);
  }
}
</script>
<style></style>
