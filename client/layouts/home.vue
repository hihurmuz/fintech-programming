<template>
  <div>
    <modal name="indexModal" width="100%" height="100%">
      <b-row id="modalRow">
        <b-col class="imageArea"></b-col>
        <b-col class="pl-5 pt-5">
          <h1 class="header">FINTECH PROGRAMMING</h1>
          <ul id="categoryList">
            <li :key="category.id" v-for="category in categories" @click="hideModal">
              <nuxt-link
                id="categoryItem"
                :to="{ name: 'category-id', params: { id: category.id } }"
                tag="a"
              >{{ categoryName(category)}}</nuxt-link>
            </li>
          </ul>
        </b-col>
      </b-row>
    </modal>
    <Nuxt />
  </div>
</template>

<script>
import categoriesQuery from "../apollo/queries/category/categories";
import func from "../plugins/functions";
export default {
  data() {
    return {
      categories: [],
    };
  },
  apollo: {
    categories: {
      prefetch: true,
      query: categoriesQuery,
    },
  },
  mounted() {
    this.$modal.show("indexModal");
  },
  methods: {
    categoryName(category) {
      return func.categoryName(category, this.$store.state.lang);
    },
    hideModal() {
      this.$modal.hide("indexModal");
    },
  },
};
</script>

<style scoped>
.imageArea {
  background-image: url(../static/background.jpg);
  background-size: 100% 100%;
}
#modalRow {
  height: 100%;
}
#categoryItem {
  font-size: 1.5rem;
  line-height: 2;
  color: #999;
}
#categoryItem:hover {
  color: #666;
  text-decoration: none;
}
#categoryList {
  list-style: none;
  padding-left: 0;
}
</style>
