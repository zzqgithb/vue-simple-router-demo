/**
 * @Author : ZiQin Zhai
 * @Date : 2020/1/19 14:33
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/1/19 14:33
 * @Description 控制装饰器
 **/
export function Controller(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.hello = this;
        }
    };
}
//# sourceMappingURL=controllerDecorator.js.map