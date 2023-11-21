export const state = () => ({
  code: "",
});
export const mutations = {
  getCode(state, payload) {
    state.code = payload;
  },
};
