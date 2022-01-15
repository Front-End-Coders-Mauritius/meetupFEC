<template>
  <Header />

  <div class="events-container max-w-sm lg:max-w-7xl md:max-w-3xl mx-auto">
    <h1 class="text-4xl font-extrabold text-center py-8 text-gray-700">
      All events
    </h1>
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
                <div class="ml-2 flex-shrink-0 flex">
                  <p
                    class="event-tag px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                  >
                    {{ event.type }}hi
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
                    {{ event.local_date }}
                    <time :datetime="event.closeDate">{{
                      event.closeDateFull
                    }}</time>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>

  <div class="template-event bg-white shadow overflow-hidden sm:rounded-md">
    <ul role="list" class="divide-y divide-gray-200">
      <li v-for="position in positions" :key="position.id">
        <a href="#" class="block hover:bg-gray-50">
          <div class="px-4 py-4 sm:px-6">
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-indigo-600 truncate">
                {{ position.title }}
              </p>
              <div class="ml-2 flex-shrink-0 flex">
                <p
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                >
                  {{ position.type }}
                </p>
              </div>
            </div>
            <div class="mt-2 sm:flex sm:justify-between">
              <div class="sm:flex">
                <p class="flex items-center text-sm text-gray-500">
                  <UsersIcon
                    class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  {{ position.department }}
                </p>
                <p
                  class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6"
                >
                  <LocationMarkerIcon
                    class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  {{ position.location }}
                </p>
              </div>
              <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                <CalendarIcon
                  class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <p>
                  Closing on
                  {{ " " }}
                  <time :datetime="position.closeDate">{{
                    position.closeDateFull
                  }}</time>
                </p>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import Header from "./Header.vue";
import {
  CalendarIcon,
  LocationMarkerIcon,
  UsersIcon,
} from "@heroicons/vue/solid";
import eventsList from "../../eventsList.json";

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
      eventsList: eventsList,
    };
  },

  // mounted() {
  //   fetch("../../../eventsList.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       this.eventsList = data;
  //     });
  // },
};
</script>
<style scoped>
.allEvents-container {
  width: 1600px;
}
</style>
