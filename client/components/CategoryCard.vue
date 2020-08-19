<template>
  <div class="mr-0 ml-0">
    <b-row>
      <b-col class="d-flex flex-wrap articleContainer">
        <nuxt-link
          class="md-2 articleCardContainer"
          v-for="category in categories"
          :to="{ name: 'category-id', params: { id: category.id } }"
          :key="category.id"
        >
          <div class="articleCardContent">
            <div>
              <img
                class="articleCardContentImage"
                :src="api_url + category.image.url"
                alt
                height="100"
              />
            </div>
            <div class="pt-4 pr-2 pb-2 pl-4">
              <p id="articleTitle">{{ categoryName(category) }}</p>
            </div>
          </div>
        </nuxt-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import func from "../plugins/functions";
export default {
  data: function () {
    return {
      api_url: process.env.strapiBaseUri,
    };
  },
  props: {
    categories: Array,
  },
  methods: {
    categoryName(category) {
      return func.categoryName(category, this.$store.state.lang);
    },
  },
};
</script>

<style>
</style>