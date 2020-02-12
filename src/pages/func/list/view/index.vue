<template>
  <view>
    列表
  </view>
</template>

<script type="text/ecmascript-6">
import ListController from '../../../../components/list/controller/ListController';
export default {
    props: {},
    data() {
        return {};
    },
    computed: {},
    created() {
      this.$createCtrl(ListController,{})
    },
    mounted() {
    },
    updated() {
    },
    methods: {},
    watch: {},
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped></style>
