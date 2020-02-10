import { __decorate } from "tslib";
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
export default class TestModel extends JEModel {
    constructor(params) {
        super(params);
        this.nameSpace = "testModel";
        this.testValue2 = "2";
        this.testValue3 = "3";
        this.testValue = params.testValue;
    }
}
__decorate([
    ObserverKey()
], TestModel.prototype, "testValue", void 0);
__decorate([
    ObserverKey()
], TestModel.prototype, "testValue2", void 0);
__decorate([
    ObserverKey()
], TestModel.prototype, "testValue3", void 0);
//# sourceMappingURL=TestModel.js.map