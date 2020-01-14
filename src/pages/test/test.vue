<template>
  <view class="content">
    {{ test }}
    <testComponent></testComponent>
  </view>
</template>

<script type="text/ecmascript-6">
  import testComponent from "./testComponent.vue";
export default {
  components:{
    testComponent,
  },
  data(){
    return{
      test:123,
    };
  },
};
</script>
<style></style>
