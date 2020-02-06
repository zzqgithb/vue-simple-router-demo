/**
 * @Author : ZiQin Zhai
 * @Date : 2019/11/13 11:30
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2019/11/13 11:30
 * @Description 基类模型
 * */
import Vue from "vue";
import { extendFrom } from "@/core/utils/util.js";
import { proxy } from "@/core/utils/proxy";
let JEModel = /** @class */ (function() {
  function JEModel(options) {
    // 从VM实例中copy回来的值
    this._data = {};
    this._option = options;
  }
  /**
   * 获取需要双向数据绑定的属性
   */
  JEModel.prototype.getObserverData = function() {
    let _this = this;
    let datas = {};
    (this.getObserverKey() || []).forEach(function(key) {
      datas[key] = _this[key];
    });
    return datas;
  };
  /**
   * 获取需要双向数据绑定的data
   */
  JEModel.prototype.getObserverKey = function() {
    return this._observerKeys;
  };
  /**
   * 设置需要双向数据绑定的数据
   * @param [Array || data] 数组或者按,分割的Key
   */
  JEModel.prototype.setObserverKey = function(keys) {
    let _this = this;
    if (this._data) {
      keys.forEach(function(key) {
        if (!_this._observerKeys.includes(key)) {
          // 将属性拷贝到_data中
          _this._data[key] = _this[key];
          _this._observerKeys.push(key);
        }
      });
    }
  };
  /**
   * 将需要双向数据绑定的模型对象进行处理
   */
  JEModel.prototype.handlerObserve = function(vm) {
    let keys = this.getObserverKey();
  };
  /**
   * 获取模型对象的命名空间
   */
  JEModel.prototype.getNameSpace = function() {
    return this.nameSpace;
  };
  /**
   * 更新命名空间
   * @param nameSpace
   * @return {*}
   */
  JEModel.prototype.setNameSpace = function(nameSpace) {
    return (this.nameSpace = nameSpace);
  };
  /**
   * 重新设置命名空间  在命名冲突时使用
   */
  JEModel.prototype.rename = function() {
    return this.setNameSpace(this.getNameSpace() + "_" + Math.random());
  };
  /**
   * 创建双向数据绑定对象
   */
  JEModel.prototype.defineReactive = function(vm) {
    if (vm._data === null) {
      console.error("JeController必须在beforeCreate之后执行");
      return false;
    }
    // 已经有重复的model在Vm实例上时候进行提醒
    if (vm.hasOwnProperty(this.getNameSpace())) {
      throw new Error(
        "model\u7C7B\u91CD\u590D\uFF0C\u8BF7\u68C0\u67E5\u3010" +
          this.getNameSpace() +
          "\u3011," +
          vm.$id
      );
    }
    vm[this.getNameSpace()] = vm._data[this.getNameSpace()] = Vue.observable(
      this.getObserverData()
    );
    this.doWatcher(vm);
    this.createGetterAndSetter(vm);
  };
  /**
   * 对用户定义的Watcher进行一次求值，订阅对当前VM实例的依赖
   */
  JEModel.prototype.doWatcher = function(vm) {
    let watchers = vm._watchers || [];
    watchers.forEach(function(watcher) {
      if (watcher.user) {
        watcher.get && watcher.get();
      }
    });
  };
  /**
   * 创建被观测数据的getter跟setter
   * @params {vm} vue 实例
   */
  JEModel.prototype.createGetterAndSetter = function(vm) {
    let observerData = vm[this.getNameSpace()];
    this._data = observerData;
    this.createProxy();
  };
  /**
   * 创建代理对象
   */
  JEModel.prototype.createProxy = function() {
    let _this = this;
    let data = this._data || {};
    Object.entries(data).forEach(function(_a) {
      let k = _a[0],
        v = _a[1];
      _this[k] = v;
      proxy(_this, "_data", k);
    });
  };
  /**
   * BaseModel 的子类
   * @param {string} nameSpace 命名空间
   */
  JEModel.extend = function(nameSpace) {
    SubModel.prototype.nameSpace = nameSpace;
    return SubModel;
  };
  return JEModel;
})();
export default JEModel;
/**
 * 继承方法
 */
var SubModel = extendFrom(JEModel, function(value, vm) {
  Object.assign(this, value);
});
//# sourceMappingURL=JEModel.js.map
