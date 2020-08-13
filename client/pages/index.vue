<template>
  <div class="homeContainer">
    <h1 class="header">FINTECH PROGRAMMING</h1>

    <Articles :articles="articles"></Articles>
  </div>
</template>

<script>
import articlesQuery from "~/apollo/queries/article/articles";
import Articles from "../components/Articles";
export default {
  data() {
    return {
      articles: [],
    };
  },
  components: {
    Articles,
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery,
      variables() {
        return { id: parseInt(this.$route.params.id) };
      },
    },
  },
};
</script>

<style>
.homeContainer {
  padding: 70px 30px 70px 40px;
}
</style>
