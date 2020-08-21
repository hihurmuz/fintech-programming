<template>
  <div class="footerContainer">
    <div class="footerContent">
      <div class="infoArea">
        <div class="rowOne">
          <span>info@fintechprogramming.com</span>
          <br />
          <img
            class="imgTwitter mt-3"
            src="https://www.transparentpng.com/thumb/twitter/light-twitter-logo-png-transparent-19.png"
            alt="Best Logo Instagram PNG @transparentpng.com"
          />
          <img
            class="imgLinkedin mt-3 ml-2"
            src="https://www.transparentpng.com/thumb/linkedin/linkedin-shiny-icon-png-0.png"
            alt="Best Logo Instagram PNG @transparentpng.com"
          />
        </div>
        <div class="rowTwo">
          <h3>Footer Links</h3>
          <div v-for="footerPage in footerPages" :key="footerPage.id">
            <nuxt-link
              class="footerLink"
              :to="{ name: 'footer-id', params: { id: footerPage.id } }"
            >{{ titleByLanguage(footerPage) }}</nuxt-link>
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import footerPagesQuery from "../apollo/queries/footer/footer-pages";
import func from "../plugins/functions";

export default {
  data() {
    return {
      footerPages: [],
    };
  },
  apollo: {
    footerPages: {
      prefetch: true,
      query: footerPagesQuery,
    },
  },
  methods: {
    titleByLanguage(value) {
      return func.mainCategoryName(value, this.$store.state.lang);
    },
  },
};
</script>

<style>
.footerContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: absolute;
  background-color: #c7d7c4;
  height: auto;
}
.footerContent {
  width: 80%;
}
.infoArea {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80%;
}
.rowOne {
  width: 30%;
  padding: 20px;
}
.brandHeader {
  font-size: 22px;
  font-weight: 700;
}
.imgTwitter {
  width: 30px;
  height: auto;
}
.imgLinkedin {
  width: 32px;
  height: auto;
}
.rowTwo {
  width: 40%;
  padding: 20px;
}
.footerLink {
  color: #666;
}
.footerLink:hover {
  color: #999;
}
</style>


