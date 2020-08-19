<template>
  <div>
    <div class="mr-0 ml-0">
      <b-row>
        <b-col class="d-flex flex-wrap articleContainer">
          <nuxt-link
            class="md-2 articleCardContainer"
            v-for="article in articlesSortByAddedTime"
            :to="{ name: 'articles-id', params: { id: article.id } }"
            :key="article.id"
          >
            <div class="articleCardContent">
              <div>
                <img
                  class="articleCardContentImage"
                  :src="api_url + article.image.url"
                  alt
                  height="100"
                />
              </div>
              <div class="pt-4 pr-2 pb-2 pl-4">
                <p id="articleTitle">{{ articleTitleLanguage(article) }}</p>
              </div>
            </div>
          </nuxt-link>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      api_url: process.env.strapiBaseUri,
    };
  },
  props: {
    articles: Array,
  },
  computed: {
    articlesSortByAddedTime() {
      return this.articles.reverse();
    },
  },
  methods: {
    articleTitleLanguage(article) {
      let lang = this.$store.state.lang;
      if (lang === "tr") {
        return article.title_tr;
      } else if (lang === "cn") {
        return article.title_cn;
      } else if (lang === "es") {
        return article.title_es;
      } else {
        return article.title_us;
      }
    },
  },
};
</script>

<style>
</style>
