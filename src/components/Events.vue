<template>
  <a
    href=""
    v-for="event in eventsList.slice(0, 3)"
    :key="event"
    class="events-wrapper flex flex-col gap-2 justify-between bg-white px-4 py-6 text-xl font-medium w-full rounded-lg shadow-xl"
  >
    <div class="text-md text-gray-400 font-normal">
      SAT 09, OCTOBER 2020, 9:30 Am
    </div>
    <div class="text-2xl font-bold text-gray-700">
      {{ event.name }}
    </div>
    <div class="flex gap-1 text-md text-gray-300">
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
      ><span class="font-normal">Bocasay</span>
    </div>
  </a>
  <router-link
    to="/events"
    class="flex justify-center items-center text-red-700 bg-white px-4 py-6 text-2xl font-bold w-full rounded-lg shadow-xl"
    >View all events</router-link
  >
</template>
<script>
export default {
  data: () => {
    return {
      eventsList: [
        {
          name: "Front-end Coders October Meetup 2020",
          date: "October 2020",
        },

        {
          name: "Front-end Coders July Online Meetup 2020",
          date: "July 2020",
        },
        {
          name: "Front-End Coders June 2020 Online Meetup",
          date: "June 2020",
        },
        {
          name: "Front-End Coders May 2020 Online Meetup",
          date: "May 2020",
        },
        {
          name: "Front-end Coders x Gophermu April Online Meetup 2020",
          date: "April 2020",
        },
        {
          name: "Front-End Coders 21 Mar 2020 Monthly #2",
          date: "21 Mar 2020",
        },
        {
          name: "Front-End Coders 15 Feb 2020 Monthly #1",
          date: "15 Feb 2020",
        },
        {
          name: "Front-End Coders Monthly - Jan 2020",
          date: "Jan 2020",
        },
      ],
    };
  },
};
</script>
