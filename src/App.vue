<template>
  <Header />
  <router-view :key="$route.params?.id" />
</template>
<script>
import Header from "./components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>
