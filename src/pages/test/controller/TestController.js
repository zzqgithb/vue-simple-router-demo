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
export default class TestController extends JEController {
    constructor() {
        super();
        this.init();
    }
    init() {
        this.createModel(TestModel, {
            testValue: "1",
        });
    }
}
//# sourceMappingURL=TestController.js.map