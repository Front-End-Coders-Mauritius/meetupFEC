<template>
  <Header />
  <div class="main-container grid grid-cols-2 bg-red-300 bg-cover bg-center">
    <div></div>
    <div></div>
  </div>
</template>
<script>
import Header from "./Header.vue";
export default {
  components: {
    Header,
  },
};
</script>
<style scoped>
.main-container {
  background-image: url("../assets/cover.jpeg");
  background-size: fit;
  height: 700px;
}
</style>
