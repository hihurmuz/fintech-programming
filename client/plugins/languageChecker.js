import localStorage from "localStorage";
export default function({ store, redirect, route }) {
  const localLanguage = localStorage.getItem("fintechProgrammingLanguage");
  if (localLanguage !== "cn") {
    store.commit("setLanguage", localLanguage);
  }
}
