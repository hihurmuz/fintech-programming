function categoryNameLanguage({ store }, payload) {
  if (store.state.lang === "tr") {
    return payload.name_tr;
  } else if (store.state.lang === "cn") {
    return payload.name_cn;
  } else if (store.state.lang === "es") {
    return payload.name_es;
  } else {
    return payload.name_us;
  }
}

export default {
  categoryNameLanguage
};
