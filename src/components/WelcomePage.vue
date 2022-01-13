<template>
  <Header />
  <div class="main-container bg-cover bg-center">
    <div class="main-cover bg-center bg-cover" style="height: 700px">
      <div
        class="main-wrapper flex flex-col w-full h-full bg-gradient-to-t from-white p-8"
      >
        <div
          class="main-details flex flex-col justify-center items-end gap-4 w-full h-full"
        >
          <div class="text-right">
            <h1 class="text-4xl md:text-5xl font-extrabold">
              Front-end Coders
            </h1>
            <h1 class="text-4xl md:text-5xl font-extrabold">
              <span class="">Mauritius </span>
            </h1>
          </div>
          <p class="text-md md:text-xl font-bold w-96 text-right leading-5">
            Front-End coders Mauritius is a free meetup that's dedicated to all
            aspect of Front-End development. it occurs in general one a month at
            announced date and place. Feel free to join!
          </p>
        </div>
      </div>
    </div>
  </div>
  <div
    class="events-container flex flex-col gap-4 justify-center items-center p-8"
  >
    <h1 class="text-4xl font-extrabold">Latest Events</h1>

    <Events />
  </div>
</template>
<script>
import Header from "./Header.vue";
import Events from "./Events.vue";
export default {
  components: {
    Header,
    Events,
  },
};
</script>
<style scoped>
.main-cover {
  background-image: url("../assets/websiteCover.jpeg");
}
</style>
