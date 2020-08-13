export const state = () => ({
  language: "us"
});

export const mutations = {
  setLanguage(state, lang) {
    state.language = lang;
  }
};
