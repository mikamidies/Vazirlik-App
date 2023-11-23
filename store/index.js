export const state = () => ({
  code: "",
  translations: {},
  auth: false,
  user: {},
});

export const mutations = {
  getCode(state, payload) {
    state.code = payload;
  },

  langRu(state, payload) {
    state.lang = payload;
  },

  getTranslations(state, payload) {
    state.translations = payload;
  },

  checkAuth(state) {
    localStorage.getItem("authToken")
      ? (state.auth = true)
      : (state.auth = false);
  },
  getUserInfo(state, payload) {
    state.user = payload;
  },
};

export const actions = {
  actionLangRu({ commit }, payload) {
    commit("langRu", payload);
  },
};

export const getters = {
  language(state) {
    return state.lang;
  },
};
