<template>
  <div>
    <button @click="izle">izle</button>
    <div v-if="articles.image" :data-src="api_url + articles.image.url">
      <h1>{{ articles.title }}</h1>
    </div>

    <div>
      <div>
        <div v-if="articles.content" v-html="$md.render(articles.content)"></div>
        <p v-if="articles.published_at">{{ moment(articles.published_at).format("MMM Do YY") }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import articleQuery from "~/apollo/queries/article/article";
import articleTrQuery from "~/apollo/queries/article/articleTR";
var moment = require("moment");

export default {
  data() {
    return {
      article: {},
      articleTr: {},
      moment: moment,
      api_url: process.env.strapiBaseUri,
    };
  },
  computed: {
    articles() {
      if (this.$store.state.language === "us") {
        return this.article;
      } else if (this.$store.state.language === "tr") {
        return this.articleTr;
      }
    },
  },
  apollo: {
    article: {
      prefetch: true,
      query: articleQuery,
      variables() {
        return { id: parseInt(this.$route.params.id) };
      },
    },
    articleTr: {
      prefetch: true,
      query: articleTrQuery,
      variables() {
        return { id: parseInt(this.$route.params.id) };
      },
    },
  },
  methods: {
    izle() {
      console.log(this.articleTr);
    },
  },
};
</script>
