/**
 * @Author : ZiQin Zhai
 * @Date : 2020/2/17 17:00
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/2/17 17:00
 * @Description home相关的state
 **/
import IHome from "@/pages/home/store/IHome";
import { MutationTree, ActionTree, Module } from "vuex";
import IStoreTypes from "@/store/interface/IStoreTypes";
import { loadApk } from "../api/home";

const state: IHome = {};
const mutations: MutationTree<IHome> = {
  SET_APK(state, apkInfo) {
    state.app = apkInfo;
  }
};
const actions: ActionTree<IHome, IStoreTypes> = {
  /**
   * 加载当前APPId
   * @param state
   * @param commit
   * @param dispatch
   * @param appId
   * @constructor
   */
  LOAD_APK({ state, commit, dispatch }, appCode: string) {
    return new Promise((resolve: any, reject: any) => {
      const { app } = state;
      if (app) {
        resolve(app);
      } else {
        loadApk(appCode)
          .then((res: any) => {
            commit("SET_APK", res.obj);
            // JE.setApkCode(res.obj.APK_CODE);
            // JE.setApkName(res.obj.APK_TEXT);
            resolve(res.obj);
          })
          .catch((e: any) => {
            reject(e);
          });
      }
    });
  }
};

const home: Module<IHome, IStoreTypes> = {
  namespaced: true,
  mutations,
  actions,
  state
};
export default home;
