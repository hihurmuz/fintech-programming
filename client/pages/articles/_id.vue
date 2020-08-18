<template>
  <div class="articleArea">
    <h1 class="mt-3 mb-3">{{ titles(articleGroup) }}</h1>
    <div class="iamgeContainer">
      <img class="articleCardContentImages" :src="imageUrl" :alt="imageUrl" />
    </div>
    <div class="mt-3" role="tablist">
      <b-card no-body class="mb-1" v-for="(item, index) in articleGroup.articles" :key="index">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block @click="openn(index)" variant="light">{{titles(item)}}</b-button>
        </b-card-header>
        <b-collapse :id="index + 1" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <div class="markdon" v-if="articleContent !== ''" v-html="$md.render(articleContent)"></div>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
    <p>{{ moment(articleGroup.updated_at).format("MMM Do YY") }}</p>
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
    openn(i) {
      this.articleIndex = i;
      this.$root.$emit("bv::toggle::collapse", i + 1);
    },
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
  margin: 10px 10%;
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
