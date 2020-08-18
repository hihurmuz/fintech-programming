export const state = () => ({
  lang: "tr"
});

export const mutations = {
  setLanguage(state, lang) {
    state.lang = lang;
  }
};

export const actions = {
  nuxtServerInit(store, context) {
    console.log("vuex worked when the server started...");
  }
};
