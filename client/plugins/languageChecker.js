import localStorage from "localStorage";
export default function({ store, redirect, route }) {
  //const user = localStorage.getItem("user");
  //const loggedStatus = store.getters['isLoggedIn']

  const localLanguage = localStorage.getItem("fintechProgrammingLanguage");
  if (localLanguage !== "cn") {
    store.commit("setLanguage", localLanguage);
  }
  //console.log("veri geldimi ..." + store.state.lang);
}
