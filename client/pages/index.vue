<template>
  <div class="homeContainer">
    <h1 class="header">FINTECH PROGRAMMING</h1>
    {{ this.$store.state.lang }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
    };
  },
};
</script>

<style>
.homeContainer {
  padding: 70px 30px 70px 40px;
}
</style>
