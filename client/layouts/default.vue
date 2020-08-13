<template>
  <div>
    <div>
      <b-navbar toggleable="sm" type="light" variant="light">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-icon-list @click="$modal.show('example')" />

        <b-navbar-nav>
          <b-nav-item href="/">
            <b-icon icon="house" font-scale="1"></b-icon>
          </b-nav-item>
          <!-- Navbar dropdowns -->
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form class="searchArea">
            <b-form-input size="sm" class="mr-sm-2 searchInput" placeholder="Search"></b-form-input>
            <b-icon-search @click="$modal.show('example')" id="searchIcon" />
          </b-nav-form>

          <client-only>
            <b-row class="ml-2 mr-2" v-if="this.$store.state.language === 'us'">
              <b-nav-item
                :key="category.id"
                v-for="category in categories"
                :to="{ name: 'categories-id', params: { id: category.id } }"
              >{{ category.name }}</b-nav-item>
            </b-row>

            <b-row class="ml-2 mr-2" v-if="this.$store.state.language === 'tr'">
              <b-nav-item
                :key="category.id"
                v-for="category in categoryTrs"
                :to="{ name: 'categories-id', params: { id: category.id } }"
              >{{ category.name }}</b-nav-item>
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

    <modal name="example" width="100%" height="100%">
      <b-row id="modalRow">
        <b-col class="imageArea"></b-col>
        <b-col class="pl-5 pt-5">
          <b-icon id="closeIcon" @click="$modal.hide('example')" icon="x" font-scale="2"></b-icon>

          <h1 class="header">FINTECH PROGRAMMING</h1>
          <ul id="categoryList">
            <li :key="category.id" v-for="category in categories">
              <nuxt-link
                id="categoryItem"
                :to="{ name: 'categories-id', params: { id: category.id } }"
                tag="a"
              >{{ category.name }}</nuxt-link>
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
import categoryTrsQuery from "../apollo/queries/category/categories_tr";

export default {
  //    <span :key="category.id" v-for="category in categoryTrs">{{ category.name }}</span>

  data() {
    return {
      categories: [],
      categoryTrs: [],
      modalShow: false,
    };
  },
  apollo: {
    categories: {
      prefetch: true,
      query: categoriesQuery,
    },
    categoryTrs: {
      prefetch: true,
      query: categoryTrsQuery,
    },
  },
  methods: {
    changeLang(lang) {
      this.$router.push("/");
      this.$store.commit("setLanguage", lang);
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
#closeIcon {
  position: absolute;
  color: #999;
  top: 20px;
  right: 20px;
}
#closeIcon:hover {
  color: #666;
  background-color: RGBA(9, 9, 9, 0.1);
  border-radius: 50%;
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
