const func = {
  categoryName(category, lang) {
    if (lang == "tr") {
      return category.name_tr;
    } else if (lang == "cn") {
      return category.name_cn;
    } else if (lang == "es") {
      return category.name_es;
    } else if (lang == "us") {
      return category.name_us;
    } else {
      return "";
    }
  }
};

export default func;
