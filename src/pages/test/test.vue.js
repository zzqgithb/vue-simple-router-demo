import { __decorate, __extends } from "tslib";
import { Component, Vue } from "vue-property-decorator";
import TestController from "@/pages/test/controller/TestController";
let Test = /** @class */ (function(_super) {
  __extends(Test, _super);
  function Test() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Test.prototype.created = function() {
    window.test = this.testCtrl = this.$createCtrl(TestController);
  };
  Test = __decorate([Component({})], Test);
  return Test;
})(Vue);
export default Test;
//# sourceMappingURL=test.vue.js.map
