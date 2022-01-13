<template>
  <Header />
  <div class="main-container bg-cover bg-center">
    <div class="main-cover bg-center bg-cover" style="height: 700px">
      <div
        class="flex flex-col justify-center items-end gap-4 w-full h-full bg-gradient-to-l from-white p-8 shadow-xl"
      >
        <div class="text-right">
          <h1 class="text-4xl md:text-6xl font-extrabold">Front-end Coders</h1>
          <h1 class="text-4xl md:text-6xl font-extrabold">Mauritius</h1>
        </div>
        <p class="text-md md:text-xl w-96 font-bold text-right leading-5">
          Front-End coders Mauritius is a free meetup that's dedicated to all
          aspect of Front-End development. it occurs in general one a month at
          announced date and place. Feel free to join!
        </p>
      </div>
    </div>
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
.main-cover {
  background-image: url("../assets/cover.jpeg");
}
</style>
