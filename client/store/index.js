export const state = () => ({
  lang: "tr"
});

export const mutations = {
  setLanguage(state, lang) {
    state.lang = lang;
  }
};
