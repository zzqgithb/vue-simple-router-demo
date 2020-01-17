import { __decorate } from "tslib";
import { Component, Vue } from "vue-property-decorator";
import TestController from "@/pages/test/controller/TestController";
let Test = class Test extends Vue {
  created() {
    new TestController();
  }
};
Test = __decorate([Component({})], Test);
export default Test;
//# sourceMappingURL=test.vue.js.map
