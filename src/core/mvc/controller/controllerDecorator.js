/**
 * @Author : ZiQin Zhai
 * @Date : 2020/1/19 14:33
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/1/19 14:33
 * @Description 控制装饰器
 **/
import { __extends } from "tslib";
export function Controller(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.hello = _this;
            return _this;
        }
        return class_1;
    }(constructor));
}
//# sourceMappingURL=controllerDecorator.js.map