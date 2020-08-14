<template>
  <div>
    <div>
      <div>
        <h1 class="headerCategories ml-4">
          {{ categoryNameLanguage(category) }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import articlesCategories from "../../apollo/queries/article/articles-categories";
export default {
  data() {
    return {
      category: []
    };
  },
  /*components: {    import ArticlesCard from "../../components/ArticlesCard";

    ArticlesCard
  },
        <ArticlesCard :articles="category.article_groups || []"/>

  */
  apollo: {
    category: {
      prefetch: true,
      query: articlesQuery,
      variables() {
        return { id: parseInt(this.$route.params.id) };
      }
    }
  },
  methods: {
    categoryNameLanguage(category) {
      let lang = this.$store.state.lang;
      if (lang === "tr") {
        return category.name_tr;
      } else if (lang === "cn") {
        return category.name_cn;
      } else if (lang === "es") {
        return category.name_es;
      } else {
        return category.name_us;
      }
    }
  }
};
</script>
