<template>
  <div class="m-5">
    <h1 class="headerCategories mb-4">{{ titleByLanguage(footerPage) }}</h1>
    <div class="pageContent" v-if="contentByLanguage !== ''" v-html="$md.render(contentByLanguage)"></div>
  </div>
</template>

<script>
import footerPageQuery from "../../apollo/queries/footer/footer-page";
import func from "../../plugins/functions";

export default {
  data() {
    return {
      footerPage: [],
    };
  },
  apollo: {
    footerPage: {
      prefetch: true,
      query: footerPageQuery,
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
    contentByLanguage() {
      let footerPage = this.footerPage;
      if (footerPage.id) {
        let lang = this.$store.state.lang;
        if (lang === "tr") {
          return footerPage.content_tr;
        } else if (lang === "cn") {
          return footerPage.content_cn;
        } else if (lang === "es") {
          return footerPage.content_es;
        } else {
          return footerPage.content_us;
        }
      } else {
        return "";
      }
    },
  },
};
</script>

