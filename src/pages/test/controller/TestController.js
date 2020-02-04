import { __extends } from "tslib";
/**
 * @Author : ZiQin Zhai
 * @Date : 2020/1/15 18:10
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/1/15 18:10
 * @Description
 **/
import JEController from "@/core/mvc/controller/JEController";
import TestModel from "@/pages/test/model/TestModel";
var TestController = /** @class */ (function (_super) {
    __extends(TestController, _super);
    function TestController() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    TestController.prototype.init = function () {
        this.createModel(TestModel, {
            testValue: "1",
        });
    };
    return TestController;
}(JEController));
export default TestController;
//# sourceMappingURL=TestController.js.map