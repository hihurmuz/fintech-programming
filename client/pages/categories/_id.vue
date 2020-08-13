<template>
  <div>
    <div class>
      <div class>
        <h1 class="headerCategories ml-4" @click="deneme">{{ categoryName }}</h1>
        <ArticlesInCategories :articles="categoryArticle || []"></ArticlesInCategories>
      </div>
    </div>
  </div>
</template>

<script>
import articlesQuery from "../../apollo/queries/article/articles-categories";
import articleTrsQuery from "../../apollo/queries/article/articles-categoryTr";
import ArticlesInCategories from "../../components/ArticlesInCategories";

export default {
  data() {
    return {
      category: [],
      categoryTr: [],
    };
  },
  components: {
    ArticlesInCategories,
  },
  computed: {
    categoryArticle() {
      if (this.$store.state.language === "us") {
        return this.category.articles;
      } else if (this.$store.state.language === "tr") {
        return this.categoryTr.article_trs;
      }
    },
    categoryName() {
      if (this.$store.state.language === "us") {
        return this.category.name;
      } else if (this.$store.state.language === "tr") {
        return this.categoryTr.name;
      }
    },
  },
  methods: {
    deneme() {
      console.log(this.categoryTr);
    },
  },
  apollo: {
    category: {
      prefetch: true,
      query: articlesQuery,
      variables() {
        return { id: parseInt(this.$route.params.id) };
      },
    },
    categoryTr: {
      prefetch: true,
      query: articleTrsQuery,
      variables() {
        return { id: parseInt(this.$route.params.id) };
      },
    },
  },
};
</script>
