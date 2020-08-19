<template>
  <div>
    <div>
      <b-navbar toggleable="sm" type="light" variant="light">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-navbar-nav>
          <div>
            <b-dropdown size="sm" variant="link" toggle-class="text-decoration-none">
              <template v-slot:button-content>&#x2630;</template>
              <b-dropdown-item href="/">
                <b-icon-house-door />
              </b-dropdown-item>
              <b-dropdown-item
                v-for="(menu,index) in menuPages"
                :key="index"
                :to="{ name: 'menu-id', params: { id: menu.id } }"
              >{{ titleByLanguage(menu) }}</b-dropdown-item>
            </b-dropdown>
          </div>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form class="searchArea">
            <b-form-input size="sm" class="mr-sm-2 searchInput" placeholder="Search"></b-form-input>
            <b-icon-search id="searchIcon" />
          </b-nav-form>

          <client-only>
            <b-row class="ml-2 mr-2">
              <b-nav-item
                v-for="mainCategory in mainCategories"
                :key="mainCategory.id"
                :to="{ name: 'maincategory-id', params: { id: mainCategory.id } }"
              >{{ titleByLanguage(mainCategory) }}</b-nav-item>
            </b-row>
          </client-only>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item @click="changeLang('us')">
              <img src="https://www.countryflags.io/us/flat/32.png" />
            </b-dropdown-item>
            <b-dropdown-item @click="changeLang('tr')">
              <img src="https://www.countryflags.io/tr/flat/32.png" />
            </b-dropdown-item>
            <b-dropdown-item @click="changeLang('cn')">
              <img src="https://www.countryflags.io/cn/flat/32.png" />
            </b-dropdown-item>
            <b-dropdown-item @click="changeLang('es')">
              <img src="https://www.countryflags.io/es/flat/32.png" />
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
    </div>

    <Nuxt />
  </div>
</template>

<script>
import mainCategoriesQuery from "../apollo/queries/main-category/main-categories";
import menuPagesQuery from "../apollo/queries/menu/menu-pages";
import localStorage from "localStorage";
import func from "../plugins/functions";
export default {
  data() {
    return {
      mainCategories: [],
      menuPages: [],
    };
  },
  apollo: {
    mainCategories: {
      prefetch: true,
      query: mainCategoriesQuery,
    },
    menuPages: {
      prefetch: true,
      query: menuPagesQuery,
    },
  },
  methods: {
    changeLang(lang) {
      localStorage.setItem("fintechProgrammingLanguage", lang);
      console.log("change lang :" + lang);
      this.$store.commit("setLanguage", lang);
    },
    titleByLanguage(value) {
      return func.mainCategoryName(value, this.$store.state.lang);
    },
  },
};
</script>

<style scoped>
#searchIcon {
  background-color: RGBA(9, 9, 9, 0.1);
  width: 30px;
  height: 30px;
  padding: 7px;
  border-radius: 15px;
}
#searchIcon:hover {
  background-color: RGBA(9, 9, 9, 0.2);
  width: 36px;
  height: 36px;
  padding: 6px;
  border-radius: 18px;
}
</style>
