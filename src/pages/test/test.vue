<template>
  <view class="content">
    123
  </view>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TestController from "@/pages/test/controller/TestController";
@Component({})
export default class Test extends Vue {
  created() {
    new TestController();
  }
}
</script>
<style></style>
