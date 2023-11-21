export const state = () => ({
  code: "",
  auth: false,
  user: {},
});
export const mutations = {
  getCode(state, payload) {
    state.code = payload;
  },
  checkAuth(state, payload) {
    state.auth = payload;
  },
  getUserInfo(state, payload) {
    state.user = payload;
  },
};
