<template>
  <div class="articleArea">
    <b-row align-h="center">
      <b-col cols="8">
        <h1 class="mt-3 mb-3">{{ articleGroup.title_us }}</h1>
        <div class="iamgeContainer">
          <img class="articleCardContentImages" :src="imageUrl" :alt="imageUrl" />
        </div>
        <div class="markdon" v-if="articleContent !== ''" v-html="$md.render(articleContent)"></div>
        <p>{{ moment(articleGroup.updated_at).format("MMM Do YY") }}</p>
      </b-col>
      <b-col class="articleList mt-3">
        <b-button
          block
          v-for="(item,index) in articleGroup.articles"
          :key="index"
          variant="outline-secondary"
          @click="articleIndex = index"
        >{{titles(item)}}</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import articleQuery from "~/apollo/queries/article/article-group";
import moment from "moment";
import { List, Map } from "immutable";

export default {
  data() {
    return {
      articleGroup: {},
      articleIndex: 0,
      articleTitle: "title ...",
      moment: moment,
      api_url: process.env.strapiBaseUri,
    };
  },
  apollo: {
    articleGroup: {
      prefetch: true,
      query: articleQuery,
      variables() {
        return { id: parseInt(this.$route.params.id) };
      },
    },
  },
  computed: {
    imageUrl: function () {
      let imgUrl = this.articleGroup.image && this.articleGroup.image.url;
      return this.api_url + imgUrl;
    },
    articleContent: function () {
      if (this.articleGroup.id) {
        let lang = this.$store.state.lang;
        let articles = List(this.articleGroup.articles);
        let index = this.articleIndex;

        if (lang === "tr") {
          return articles.get(index).content_tr;
        } else if (lang === "cn") {
          return articles.get(index).content_cn;
        } else if (lang === "es") {
          return articles.get(index).content_es;
        } else {
          return articles.get(index).content_us;
        }
      } else {
        return "";
      }
    },
  },
  methods: {
    titles(value) {
      if (this.articleGroup.id) {
        let lang = this.$store.state.lang;
        let articles = List(this.articleGroup.articles);

        if (lang === "tr") {
          return value.title_tr;
        } else if (lang === "cn") {
          return value.title_cn;
        } else if (lang === "es") {
          return value.title_es;
        } else {
          return value.title_us;
        }
      } else {
        return "";
      }
    },
  },
};
</script>

<style>
.articleArea {
  margin: 10px 15%;
}
.markdon {
  text-align: justify;
}
.articleCardContentImages {
  max-width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.iamgeContainer {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
