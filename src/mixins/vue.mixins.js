/**
 * @Author : ZiQin Zhai
 * @Date : 2019/12/16 17:53
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2019/12/16 17:53
 * @Description Vue mixins
 * */
import Vue from "vue";
/**
 * 全局mixins
 */
function initMixins() {
    Vue.prototype.$createCtrl = function (controller, options) {
        controller.prototype.VM = this;
        var f = new controller(options);
        controller.prototype.VM = null;
        return f;
    };
}
initMixins();
//# sourceMappingURL=vue.mixins.js.map