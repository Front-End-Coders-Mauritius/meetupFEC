<template>
  <Header />
  <div class="main-container bg-cover bg-center h-screen">
    <div class="main-cover bg-center bg-cover h-screen">
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
  <div class="event-container p-10 md:p-20 bg-gradient-to-t from-red-400">
    <div class="events-wrapper md:w-1/2 flex flex-col gap-4 justify-center p-8">
      <h1 class="text-5xl font-extrabold">
        <span
          class="text-transparent bg-clip-text bg-gradient-to-br from-red-100 to-red-600"
          >Latest Events</span
        >
      </h1>

      <Events />
    </div>
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
