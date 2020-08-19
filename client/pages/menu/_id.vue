<template>
  <div class="m-5">
    <h1 class="headerCategories mb-4">{{ titleByLanguage(menuPage) }}</h1>
    <div class="pageContent" v-if="contentByLanguage !== ''" v-html="$md.render(contentByLanguage)"></div>
  </div>
</template>

<script>
import menuPageQuery from "../../apollo/queries/menu/menu-page";
import func from "../../plugins/functions";

export default {
  data() {
    return {
      menuPage: [],
    };
  },
  apollo: {
    menuPage: {
      prefetch: true,
      query: menuPageQuery,
      variables() {
        return { id: parseInt(this.$route.params.id) };
      },
    },
  },
  methods: {
    titleByLanguage(value) {
      return func.mainCategoryName(value, this.$store.state.lang);
    },
  },
  computed: {
    contentByLanguage: function () {
      let menu = this.menuPage;
      if (menu.id) {
        let lang = this.$store.state.lang;
        if (lang === "tr") {
          return menu.content_tr;
        } else if (lang === "cn") {
          return menu.content_cn;
        } else if (lang === "es") {
          return menu.content_es;
        } else {
          return menu.content_us;
        }
      } else {
        return "";
      }
    },
  },
};
</script>

<style>
.pageContent {
  text-align: justify;
}
</style>