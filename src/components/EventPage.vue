<template>
  <div class="py-4 md:py-16">
    <div class="lg:mx-auto lg:max-w-7xl lg:px-4 lg:gap-">
      <div class="relative">
        <div
          aria-hidden="true"
          class="hidden sm:block lg:inset-y-0 lg:right-0 lg:w-screen"
        >
          <div
            class="inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72"
          />
          <svg
            class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
            width="404"
            height="392"
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="392"
              fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
            />
          </svg>
        </div>
      </div>

      <div class="mx-auto md:mx-0 relative max-w-md sm:max-w-3xl sm:px-6 px-8">
        <!-- Content area -->
        <div class="">
          <h2
            class="text-4xl lg:text-5xl text-gray-900 font-extrabold tracking-tight"
          >
            {{ eventDetails.name }}
          </h2>
          <div class="mt-6 text-gray-500 space-y-6">
            <p class="text-lg">
              {{ eventDetails.description.replace(/<\/?[^>]+>/gi, "") }}
            </p>
          </div>
        </div>

        <!-- Stats section -->
        <div class="mt-10">
          <dl class="grid grid-cols-2 gap-x-4 gap-y-8">
            <div class="border-t-2 border-gray-100 pt-6">
              <dt class="text-base font-medium text-gray-500">Date</dt>
              <dd class="text-3xl font-extrabold tracking-tight text-gray-900">
                {{ new Date(eventDetails.local_date).toDateString() }}
              </dd>
            </div>
            <div class="border-t-2 border-gray-100 pt-6">
              <dt class="text-base font-medium text-gray-500">Location</dt>
              <dd class="text-3xl font-extrabold tracking-tight text-gray-900">
                {{ eventDetails.venue.city }}
              </dd>
            </div>
            <div class="border-t-2 border-gray-100 pt-6">
              <dt class="text-base font-medium text-gray-500">Attendees</dt>
              <dd class="text-3xl font-extrabold tracking-tight text-gray-900">
                {{ eventDetails.yes_rsvp_count }}
              </dd>
            </div>
            <div class="border-t-2 border-gray-100 pt-6">
              <dt class="text-base font-medium text-gray-500">Time</dt>
              <dd class="text-3xl font-extrabold tracking-tight text-gray-900">
                {{ eventDetails.local_time }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
    <div class="images lg:mx-auto lg:max-w-7xl ms:mt-4 mt-16 px-4">
      <ul
        role="list"
        class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        <li v-for="file in eventDetails.images" :key="file" class="relative">
          <div
            class="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"
          >
            <img
              :src="file"
              alt=""
              class="object-cover pointer-events-none group-hover:opacity-75"
            />
            <button type="button" class="absolute inset-0 focus:outline-none">
              <span class="sr-only">View details for {{ file.title }}</span>
            </button>
          </div>
          <p
            class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"
          >
            {{ file.title }}
          </p>
          <p
            class="block text-sm font-medium text-gray-500 pointer-events-none"
          >
            {{ file.size }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import eventsListJson from "../../myEventArray.json";
const stats = [1, 2, 3, 4];
const files = [
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: "../../src/assets/2016/july-30/highres_452614887.jpeg",
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
];

export default {
  data: () => {
    return {
      eventsListJson,
      stats,
      files,
    };
  },

  computed: {
    eventID() {
      return this.$route.params.id;
    },
    eventIndex() {
      return this.$route.params.id;
    },
    eventsList() {
      if (this.eventsListJson.length === 0) {
        return [];
      }
      return this.eventsListJson;
    },

    eventDetails() {
      const filtered = this.eventsList.filter((item) => {
        return item.id === this.eventID;
      });
      return filtered[0];
    },
    eventDetailss() {
      if (this.eventsList.length === 0) {
        return [];
      }

      return this.eventsList[0];
    },
  },

  mounted() {
    this.eventsList;
    this.eventDetails;
    console.log(this.eventsList);
    console.log("this.eventDetail - ", this.eventDetails);
    console.log("this.eventID - ", this.eventID);
    console.log("this.testGetIdDetails - ", this.testGetIdDetails);
  },
  updated() {
    this.eventsList;
    this.eventDetails;
    this.updated = false;
  },
};
</script>
