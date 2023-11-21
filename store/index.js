export const state = () => ({
  code: "",
  auth: false,
});
export const mutations = {
  getCode(state, payload) {
    state.code = payload;
  },
  checkAuth(state, payload) {
    state.auth = payload;
  },
};
