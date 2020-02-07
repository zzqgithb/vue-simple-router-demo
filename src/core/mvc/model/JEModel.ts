/**
 * @Author : ZiQin Zhai
 * @Date : 2019/11/13 11:30
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2019/11/13 11:30
 * @Description 基类模型
 * */
import Vue from "vue";
import { extendFrom, isArray, isString } from "@/core/utils/util.js";
import { proxy } from "@/core/utils/proxy";

export interface IJeModel {
  nameSpace:string
}

export interface JEModelStatic {
  new (options: any): JEModel;
}

export default class JEModel {
  // 从VM实例中copy回来的值
  _data: {
    [str: string]: any;
  } = {};
  // 原始数据
  _option?: object;

  [str: string]: any; // 兼容下面用this[key]取值
  constructor(options: any) {
    this._option = options;
  }

  /**
   * 获取需要双向数据绑定的属性
   */
  getObserverData() {
    const datas: {
      [str: string]: any;
    } = {};
    (this.getObserverKey() || []).forEach((key: any) => {
      datas[key] = this[key];
    });
    return datas;
  }

  /**
   * 获取需要双向数据绑定的data
   */
  getObserverKey() {
    return this._observerKeys;
  }

  /**
   * 设置需要双向数据绑定的数据
   * @param [Array || data] 数组或者按,分割的Key
   */
  setObserverKey(keys: string[]) {
    if (this._data) {
      keys.forEach(key => {
        if (!this._observerKeys.includes(key)) {
          // 将属性拷贝到_data中
          this._data[key] = this[key];
          this._observerKeys.push(key);
        }
      });
    }
  }

  /**
   * 将需要双向数据绑定的模型对象进行处理
   */
  handlerObserve(vm: Vue) {
    const keys = this.getObserverKey();
  }

  /**
   * 获取模型对象的命名空间
   */
  getNameSpace() {
    return this.nameSpace;
  }

  /**
   * 更新命名空间
   * @param nameSpace
   * @return {*}
   */
  setNameSpace(nameSpace: string) {
    return (this.nameSpace = nameSpace);
  }

  /**
   * 重新设置命名空间  在命名冲突时使用
   */
  rename() {
    return this.setNameSpace(`${this.getNameSpace()}_${Math.random()}`);
  }

  /**
   * 创建双向数据绑定对象
   */
  defineReactive(vm: Vue) {
    if (vm._data === null) {
      console.error("JeController必须在beforeCreate之后执行");
      return false;
    }
    // 已经有重复的model在Vm实例上时候进行提醒
    if (vm.hasOwnProperty(this.getNameSpace())) {
      throw new Error(
        `model类重复，请检查【${this.getNameSpace()}】,${vm.$id}`
      );
    }
    vm[this.getNameSpace()] = vm._data[this.getNameSpace()] = Vue.observable(
      this.getObserverData()
    );
    this.doWatcher(vm);
    this.createGetterAndSetter(vm);
  }

  /**
   * 对用户定义的Watcher进行一次求值，订阅对当前VM实例的依赖
   */
  doWatcher(vm: Vue) {
    const watchers = vm._watchers || [];
    watchers.forEach((watcher: any) => {
      if (watcher.user) {
        watcher.get && watcher.get();
      }
    });
  }

  /**
   * 创建被观测数据的getter跟setter
   * @params {vm} vue 实例
   */
  createGetterAndSetter(vm: Vue) {
    const observerData = vm[this.getNameSpace()];
    this._data = observerData;
    this.createProxy();
  }

  /**
   * 创建代理对象
   */
  createProxy() {
    const data = this._data || {};
    Object.entries(data).forEach(([k, v]) => {
      this[k] = v;
      proxy(this, "_data", k);
    });
  }

  /**
   * BaseModel 的子类
   * @param {string} nameSpace 命名空间
   */
  static extend(nameSpace: string) {
    SubModel.prototype.nameSpace = nameSpace;
    return SubModel;
  }
}

/**
 * 继承方法
 */
const SubModel = extendFrom(JEModel, function(this: any, value: any, vm: Vue) {
  Object.assign(this, value);
});
