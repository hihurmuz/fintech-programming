import localStorage from "localStorage";
export default function({ store, redirect, route }) {
  const localLanguage = localStorage.getItem("fintechProgrammingLanguage");
  if (localLanguage) {
    store.commit("setLanguage", localLanguage);
  }
}
