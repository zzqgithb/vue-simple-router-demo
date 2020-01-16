<template>
  <view>
    <web-view :src="url" @message="getMessage"></web-view>
  </view>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      url: "/hybrid/html/login/index.html",
    };
  },
  onLoad(options) {
    if (options && options.url) {
      this.url = options.url;
    }
  },
  methods: {
    getMessage(event) {
      uni.showModal({
        content: JSON.stringify(event.detail),
        showCancel: false
      });
    }
  }
};
</script>

<style></style>
