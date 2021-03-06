/**
 * @Author : ZiQin Zhai
 * @Date : 2020/1/15 14:14
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/1/15 14:14
 * @Description
 **/
import { isPlainObject } from "@/core/utils/util";
import JEModel from "@/core/mvc/model/JEModel";
export default class JEController {
    constructor() {
        this._VM = null;
        this._model = {};
        if (this.__proto__.VM) {
            this.setVM(this.__proto__.VM);
            Object.defineProperty(this, "_VM", {
                enumerable: false
            });
        }
    }
    /**
     * 设置实例
     * @param vm
     */
    setVM(vm) {
        this._VM = vm;
    }
    getVM() {
        return this._VM;
    }
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
    createModel(ModelCons, options) {
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
    }
    /**
     * 设置模型对象
     * @param key
     * @param val
     * @private 内部方法
     */
    _setModel(key, val) {
        this.setModel(key, val);
        this[key] = val;
    }
    /**
     * 设置模型对象 并继承BaseModel
     * @param key
     * @param obj
     */
    setModel(key, obj) {
        if (isPlainObject(obj) && !(obj instanceof JEModel)) {
            const Sub = JEModel.extend(key);
            this.createModel(Sub, obj);
        }
        else {
            this._model[key] = obj;
        }
    }
    /**
     * 获取模型对象
     */
    getModel(key) {
        return this._model[key];
    }
    /**
     * 判断是否有某一个命名的参数
     * @param nameSpace
     * @return {boolean}
     */
    hasModel(nameSpace) {
        return this._model.hasOwnProperty(nameSpace);
    }
}
//# sourceMappingURL=JEController.js.map