import { __decorate, __extends } from "tslib";
/**
 * @Author : ZiQin Zhai
 * @Date : 2020/1/15 18:10
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/1/15 18:10
 * @Description
 **/
import JEModel from "@/core/mvc/model/JEModel";
import { ObserverKey } from "@/core/mvc/model/modelDecorator.ts";
var TestModel = /** @class */ (function (_super) {
    __extends(TestModel, _super);
    function TestModel(params) {
        var _this = _super.call(this, params) || this;
        _this.nameSpace = "testModel";
        _this.testValue3 = "3";
        _this.testValue = params.testValue;
        _this.testValue2 = params.testValue2;
        return _this;
    }
    __decorate([
        ObserverKey()
    ], TestModel.prototype, "testValue", void 0);
    __decorate([
        ObserverKey()
    ], TestModel.prototype, "testValue2", void 0);
    return TestModel;
}(JEModel));
export default TestModel;
//# sourceMappingURL=TestModel.js.map