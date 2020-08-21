const func = {
  categoryName(value, lang) {
    if (lang == "tr") {
      return value.name_tr;
    } else if (lang == "cn") {
      return value.name_cn;
    } else if (lang == "es") {
      return value.name_es;
    } else if (lang == "us") {
      return value.name_us;
    } else {
      return "";
    }
  },
  mainCategoryName(value, lang) {
    if (lang == "tr") {
      return value.title_tr;
    } else if (lang == "cn") {
      return value.title_cn;
    } else if (lang == "es") {
      return value.title_es;
    } else if (lang == "us") {
      return value.title_us;
    } else {
      return "";
    }
  },
  contentByLanguage(value, lang) {
    if (value.id) {
      if (lang === "tr") {
        return content_tr;
      } else if (lang === "cn") {
        return content_cn;
      } else if (lang === "es") {
        return content_es;
      } else {
        return content_us;
      }
    } else {
      return "";
    }
  }
};

export default func;
