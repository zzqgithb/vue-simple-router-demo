const state = {
    userName: "test",
    password: "123",
};
const mutations = {
    setUserName(state, userName) {
        state.userName = userName;
    },
    setPassword(state, password) {
        state.password = password;
    }
};
const actions = {
    asyncMethods({ state, commit, dispatch }, params) {
        commit("setUserName", params.userName);
        commit("setPassword", params.password);
    },
};
const testStore = {
    namespaced: true,
    state,
    mutations,
    actions
};
export default testStore;
//# sourceMappingURL=index.js.map