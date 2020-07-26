<template>
  <div>

    <nav class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-left">

          <ul class="uk-navbar-nav">
              <li><a href="#modal-full" uk-toggle><span uk-icon="icon: table"></span></a></li>
              <li>
                <a href="/">Home
                </a>
              </li>
          </ul>

        </div>

        <div class="uk-navbar-right">
          <ul class="uk-navbar-nav">
              <li :key="category.id" v-for="category in categories">
                <nuxt-link :to="{ name: 'categories-id', params: { id: category.id }}" tag="a">{{ category.name }}
                </nuxt-link>
              </li>
          </ul>
        </div>
    </nav>

    <div id="modal-full" class="uk-modal-full" uk-modal>
        <div class="uk-modal-dialog">
            <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
            <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
                <div class="uk-background-cover" style="background-image: url('https://www.flow-tech.ai/blogs/content/images/2020/03/5b426f3f169a3358e69d27c4_future-of-fintech.jpg');" uk-height-viewport></div>
                <div class="uk-padding-large">
                    <h1 style="font-family: Staatliches;">FınTech Programmıng</h1>
                    <div class="uk-width-1-2@s">
                        <ul class="uk-nav-primary uk-nav-parent-icon" uk-nav>
                          <li :key="category.id" v-for="category in categories">
                            <nuxt-link class="uk-modal-close" :to="{ name: 'categories-id', params: { id: category.id }}" tag="a">{{ category.name }}
                            </nuxt-link>
                          </li>
                        </ul>
                    </div>
                    <p class="uk-text-light">Cem Kimdir ?</p>
                </div>
            </div>
        </div>
    </div>

    <nuxt />
  </div>
</template>

<script>
import categoriesQuery from '~/apollo/queries/category/categories'

export default {
  data() {
    return {
      categories: [],
    }
  },
  apollo: {
    categories: {
      prefetch: true,
      query: categoriesQuery
    }
  }
}

</script>
