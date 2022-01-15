<template>
  <router-view />
  <div class="bg-white py-16 sm:py-24">
    <div
      class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start"
    >
      <div class="relative sm:py-16 lg:py-0">
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
        <div
          class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20"
        >
          <!-- Testimonial card-->
          <div
            class="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden"
          >
            <img
              class="absolute inset-0 h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100"
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
        <!-- Content area -->
        <div class="pt-12 sm:pt-16 lg:pt-20">
          <h2
            class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl"
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
  </div>
</template>
<script>
import eventsListJson from "../../eventsList.json";
const stats = [1, 2, 3, 4];

export default {
  data: () => {
    return {
      eventsListJson,
      stats,
    };
  },

  computed: {
    eventIndex() {
      return this.$route.params.eventIndex;
    },
    eventsList() {
      if (this.eventsListJson.length === 0) {
        return [];
      }
      return this.eventsListJson;
    },
    eventDetails() {
      if (this.eventsList.length === 0) {
        return [];
      }
      return this.eventsList[this.eventIndex];
    },
  },

  mounted() {
    this.eventsList;
    this.eventDetails;
    console.log(this.eventDetails);
  },
  updated() {
    this.eventsList;
    this.eventDetails;
  },
};
</script>
