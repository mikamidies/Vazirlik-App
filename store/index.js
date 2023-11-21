export const state = () => ({
  code: "",
  translations: {},
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
