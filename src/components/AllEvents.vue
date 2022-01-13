<template>
  <Header />
  <div class="allEvents-container py-4 mx-auto">
    <div
      class="allEvents-header my-4 w-full h-16 flex justify-center items-center bg-gradient-to-r from-red-600"
    >
      <h1 class="text-3xl font-extrabold font-FiraSans px-4 py-2 text-red-900">
        All Events 2020
      </h1>
    </div>
    <div class="allEvents-list flex flex-wrap justify-center gap-8 py-4">
      <router-link
        to=""
        v-for="event in eventlists"
        :key="event"
        class="h-64 w-72 flex flex-col justify-between items-center px-4 py-8 rounded-lg shadow-xl"
      >
        <div
          class="text-md text-red-500 font-bold bg-gradient-to-r from-red-200 p-2"
        >
          SAT 09, OCTOBER 2020, 9:30 Am
        </div>
        <div class="text-2xl text-center font-bold text-red-900">
          Front-end Coders October Meetup 2020
        </div>
        <div class="flex gap-2 text-md text-red-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            /></svg
          ><span>Bocasay</span>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
import Header from "./Header.vue";
export default {
  components: {
    Header,
  },

  data: () => {
    return {
      eventlists: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    };
  },
};
</script>
<style scoped>
.allEvents-container {
  width: 1600px;
}
</style>
