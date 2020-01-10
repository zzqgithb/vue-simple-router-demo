<template>
  <view class="content">
    <uni-badge :text="text"></uni-badge>
  </view>
</template>

<script lang="ts">
import uniBadge from "@dcloudio/uni-ui/lib/uni-badge/uni-badge.vue";
import { Component } from "vue-property-decorator";
import Vue from "vue";

interface Test {
  readonly text: number;
}
@Component({
  name: "test",
  data: (): Test => {
    return {
      text: 123
    };
  },
  components: {
    uniBadge
  }
})
export default class TestComp extends Vue {}
</script>
<style></style>
