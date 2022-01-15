<template>
  <Header />

  <div class="events-container max-w-sm lg:max-w-7xl md:max-w-2xl mx-auto">
    <div class="events-heading flex flex-col gap-4 py-8">
      <h1 class="text-4xl font-extrabold text-center text-gray-700">
        All events
      </h1>
      <p class="text-center text-2xl text-gray-400">A list of all events</p>
    </div>
    <div class="bg-white shadow-2xl overflow-hidden sm:rounded-md my-4">
      <ul role="list" class="divide-y divide-gray-200">
        <li v-for="(event, index) in eventsList" :key="index" :value="event">
          <a href="#" class="block hover:bg-gray-50">
            <div class="flex flex-col gap-4 px-4 py-8 sm:px-6">
              <div class="flex items-center justify-between">
                <p
                  class="event-name text-sm md:text-lg font-medium text-indigo-600 truncate"
                >
                  {{ event.name }}
                </p>
                <div class="event-tags ml-2 flex-shrink-0 flex">
                  <p
                    class="event-status mr-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800"
                  >
                    {{ event.status }}
                  </p>
                  <p
                    class="event-year px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                  >
                    {{ event.local_date.slice(0, 4) }}
                  </p>
                </div>
              </div>
              <p class="text-gray-400 line-clamp-3 mr-16 md:mr-32">
                {{ event.description.replace(/<\/?[^>]+>/gi, "") }}
              </p>
              <div class="sm:flex sm:justify-between">
                <div class="sm:flex">
                  <p class="flex items-center text-sm text-gray-500">
                    <UsersIcon
                      class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    {{ event.department }}
                  </p>
                  <p
                    class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6"
                  >
                    <LocationMarkerIcon
                      class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    {{ event.venue.address_1 }}
                  </p>
                </div>
                <div
                  class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0"
                >
                  <CalendarIcon
                    class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <p>
                    {{ new Date(event.local_date).toDateString() }}
                    <!-- <time :datetime="event.closeDate">{{
                      event.closeDateFull
                    }}</time> -->
                  </p>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Header from "./Header.vue";
import {
  CalendarIcon,
  LocationMarkerIcon,
  UsersIcon,
} from "@heroicons/vue/solid";
import eventsListJson from "../../eventsList.json";

const positions = [
  {
    id: 1,
    title: "Back End Developer",
    type: "Full-time",
    location: "Remote",
    department: "Engineering",
    closeDate: "2020-01-07",
    closeDateFull: "January 7, 2020",
  },
  {
    id: 2,
    title: "Front End Developer",
    type: "Full-time",
    location: "Remote",
    department: "Engineering",
    closeDate: "2020-01-07",
    closeDateFull: "January 7, 2020",
  },
  {
    id: 3,
    title: "User Interface Designer",
    type: "Full-time",
    location: "Remote",
    department: "Design",
    closeDate: "2020-01-14",
    closeDateFull: "January 14, 2020",
  },
];
export default {
  components: {
    CalendarIcon,
    LocationMarkerIcon,
    UsersIcon,
    Header,
  },

  data: () => {
    return {
      positions,
      eventsListJson,
    };
  },

  computed: {
    eventsList() {
      console.log("COMPUUUUUUUUTED");
      if (this.eventsListJson.length === 0) {
        return [];
      }
      return this.eventsListJson;
    },
  },
  beforeMount() {
    console.log("beforemout", this.eventsListJson);
  },
  mounted() {
    console.log("mounted", this.eventsListJson);
  },
};
</script>
<style scoped>
.allEvents-container {
  width: 1600px;
}
</style>
