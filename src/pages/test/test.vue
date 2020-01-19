<template>
  <view class="content">
    {{ testCtrl.testModel.testValue }}
  </view>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TestController from "@/pages/test/controller/TestController";
@Component({})
export default class Test extends Vue {
  created() {
    window.test = this.testCtrl = this.$createCtrl(TestController);
  }
}
</script>
<style></style>
