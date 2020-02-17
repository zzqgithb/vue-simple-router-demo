/**
 * @Author : ZiQin Zhai
 * @Date : 2020/2/10 14:18
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/2/10 14:18
 * @Description
 **/
import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import IStoreTypes from "@/store/interface/IStoreTypes";
import testStore from "@/pages/test/store";
import homeStore from "@/pages/home/store";
Vue.use(Vuex);
const store: StoreOptions<IStoreTypes> = {
  modules: {
    testStore,
    homeStore
  },
};
export default new Vuex.Store<IStoreTypes>(store);
