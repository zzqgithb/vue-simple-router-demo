/**
 * @Author : ZiQin Zhai
 * @Date : 2019/12/16 17:53
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2019/12/16 17:53
 * @Description Vue mixins
 * */
import Vue from "vue";
import { JEControllerStatic } from "../core/mvc/controller/JEController";

/**
 * 全局mixins
 */
function initMixins() {
  Vue.prototype.$createCtrl = function(
    controller: JEControllerStatic,
    options?: any
  ) {
    controller.prototype.VM = this;
    const f = new controller(options);
    controller.prototype.VM = null;
    return f;
  };
}
initMixins();