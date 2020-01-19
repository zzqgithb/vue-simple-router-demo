/**
 * @Author : ZiQin Zhai
 * @Date : 2020/1/15 14:14
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/1/15 14:14
 * @Description
 **/
import { isPlainObject } from "@/core/utils/util.js";
import JEModel from "@/core/mvc/model/JEModel";
let JEController = /** @class */ (function() {
  function JEController() {
    this._VM = null;
    this._model = {};
    if (this.__proto__.VM) {
      this.setVM(this.__proto__.VM);
    }
  }
  /**
   * 设置实例
   * @param vm
   */
  JEController.prototype.setVM = function(vm) {
    this._VM = vm;
  };
  JEController.prototype.getVM = function() {
    return this._VM;
  };
  /**
   * 创建模型类
   * @private
   */
  // _createModels(): void {
  //   this.MODEL.forEach((modelCons: JEModelStatic) => {
  //     this.createModel(modelCons, {});
  //   });
  // }
  /**
   * 创建模型对象
   * @param model 模型类
   */
  JEController.prototype.createModel = function(ModelCons, options) {
    if (!(ModelCons.prototype instanceof JEModel)) {
      throw new Error("模型参数异常");
    }
    let modelIns = new ModelCons(options);
    let nameSpace = modelIns.getNameSpace();
    if (this.hasModel(nameSpace)) {
      nameSpace = modelIns.rename();
    }
    this._setModel(nameSpace, modelIns);
    if (modelIns) {
      modelIns.defineReactive(this._VM);
    }
    return modelIns;
  };
  /**
   * 设置模型对象
   * @param key
   * @param val
   * @private 内部方法
   */
  JEController.prototype._setModel = function(key, val) {
    this.setModel(key, val);
    this[key] = val;
  };
  /**
   * 设置模型对象 并继承BaseModel
   * @param key
   * @param obj
   */
  JEController.prototype.setModel = function(key, obj) {
    if (isPlainObject(obj) && !(obj instanceof JEModel)) {
      let Sub = JEModel.extend(key);
      this.createModel(Sub, obj);
    } else {
      this._model[key] = obj;
    }
  };
  /**
   * 获取模型对象
   */
  JEController.prototype.getModel = function(key) {
    return this._model[key];
  };
  /**
   * 判断是否有某一个命名的参数
   * @param nameSpace
   * @return {boolean}
   */
  JEController.prototype.hasModel = function(nameSpace) {
    return this._model.hasOwnProperty(nameSpace);
  };
  return JEController;
})();
export default JEController;
//# sourceMappingURL=JEController.js.map
