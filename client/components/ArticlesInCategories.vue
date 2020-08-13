<template>
  <div>
    <div class="mr-0 ml-0">
      <b-row>
        <b-col class="d-flex flex-wrap rightCard">
          <nuxt-link
            class="md-2 rightCardElement"
            v-for="article in rightArticles"
            :to="{ name: 'articles-id', params: { id: article.id } }"
            :key="article.id"
          >
            <div class="articleCard">
              <div>
                <img class="articleLeftImg" :src="api_url + article.image.url" alt height="100" />
              </div>
              <div class="pt-4 pr-2 pb-2 pl-4">
                <p id="articleCategory" v-if="article.category_tr">{{ article.category_tr.name }}</p>
                <p id="articleTitle">{{ article.title }}</p>
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
    rightArticles() {
      return this.articles.reverse();
    },
  },
};
</script>

<style>
.articleCard {
  position: relative;
  box-sizing: border-box;
  transition: box-shadow 0.1s ease-in-out;
}
.articleLeftImg {
  max-width: 100%;
  height: auto;
  box-sizing: border-box;
}
.rightCard {
  justify-content: space-around;
  align-content: flex-start;
}
.rightCardElement {
  border: 1px solid rgba(78, 76, 76, 0.3);
  margin-bottom: 15px;
  width: 30%;
}
</style>
