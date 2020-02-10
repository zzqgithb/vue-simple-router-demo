/**
 * @Author : ZiQin Zhai
 * @Date : 2020/2/10 14:36
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/2/10 14:36
 * @Description
 **/
import ITestStore from "./interface/ITestStore";
import { MutationTree, ActionTree, Module } from "vuex";
import IStoreTypes from "@/store/interface/IStoreTypes";

const state: ITestStore = {
  userName: "test",
  password: "123",
};
const mutations: MutationTree<ITestStore> = {
  setUserName(state, userName) {
    state.userName = userName;
  },
  setPassword(state, password: string) {
    state.password = password;
  }
};

const actions: ActionTree<ITestStore, IStoreTypes> = {
  asyncMethods({ state, commit, dispatch }, params: ITestStore) {
    commit("setUserName", params.userName);
    commit("setPassword", params.password);
  },
};
const testStore: Module<ITestStore, IStoreTypes> = {
  namespaced: true,
  state,
  mutations,
  actions
};
export default testStore;
