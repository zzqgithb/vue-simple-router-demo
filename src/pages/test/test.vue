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
import { State, Action, Mutation, namespace } from "vuex-class";
import TestController from "@/pages/test/controller/TestController";
const testStore:any = namespace("testStore");
console.log(testStore);
@Component({})
export default class Test extends Vue {
  @State('testStore') testStore:any;
  @testStore.Mutation("setUserName") setUserName:any;
  isShow = false;
  created() {
    this.setUserName("asdsa");
    console.log(this.testStore);
    JE.ajax({
      url: "/je/phone/app/loadApk",
      data: { apkCode: "2019-0102-1347-8233" },
    }).then((res:any) => {
      console.log(res);
    });
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
}
</script>
<style></style>
