<template>
  <div>
    <h1 class="headerCategories ml-4">{{ categoryNameLanguage(mainCategory) }}</h1>
    <CategoryCard :categories="mainCategory.categories || []" />
  </div>
</template>

<script>
import mainCategory from "../../apollo/queries/main-category/main-category";
import CategoryCard from "../../components/CategoryCard";
import func from "../../plugins/functions";

export default {
  data() {
    return {
      mainCategory: [],
    };
  },
  components: {
    CategoryCard,
  },
  apollo: {
    mainCategory: {
      prefetch: true,
      query: mainCategory,
      variables() {
        return { id: parseInt(this.$route.params.id) };
      },
    },
  },
  methods: {
    categoryNameLanguage(category) {
      func.categoryName(category, this.$store.state.lang);
    },
  },
};
</script>

<style>
</style>