<template>
  <div class="relative">
    <div class="py-4 md:py-16">
      <div class="lg:mx-auto lg:max-w-7xl lg:px-4">
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

        <div
          class="mx-auto md:mx-0 relative max-w-md sm:max-w-3xl sm:px-6 px-8 py-3 md:py-0"
        >
          <!-- Content area -->
          <div class="">
            <h2
              class="text-4xl lg:text-5xl text-gray-900 font-extrabold tracking-tight"
            >
              {{ eventDetails.name }}
            </h2>
            <div class="mt-6 text-gray-500 space-y-6">
              <p class="text-lg break-words">
                {{ eventDetails.description.replace(/<\/?[^>]+>/gi, "") }}
              </p>
            </div>
          </div>

          <!-- Stats section -->
          <div class="mt-10">
            <dl class="grid grid-cols-2 gap-x-4 gap-y-8">
              <div class="border-t-2 border-gray-100 pt-6">
                <dt class="text-base font-medium text-gray-500">Date</dt>
                <dd
                  class="text-3xl font-extrabold tracking-tight text-gray-900"
                >
                  {{ new Date(eventDetails.local_date).toDateString() }}
                </dd>
              </div>
              <div class="border-t-2 border-gray-100 pt-6">
                <dt class="text-base font-medium text-gray-500">Venue</dt>
                <dd
                  class="text-3xl font-extrabold tracking-tight text-gray-900"
                >
                  {{ eventDetails.venue.name }}
                </dd>
              </div>
              <div class="border-t-2 border-gray-100 pt-6">
                <dt class="text-base font-medium text-gray-500">Attendees</dt>
                <dd
                  class="text-3xl font-extrabold tracking-tight text-gray-900"
                >
                  {{ eventDetails.yes_rsvp_count }}
                </dd>
              </div>
              <div class="border-t-2 border-gray-100 pt-6">
                <dt class="text-base font-medium text-gray-500">Time</dt>
                <dd
                  class="text-3xl font-extrabold tracking-tight text-gray-900"
                >
                  {{ eventDetails.local_time }}
                </dd>
              </div>
              <div class="border-t-2 border-gray-100 pt-6">
                <dt class="text-base font-medium text-gray-500">Location</dt>
                <dd
                  class="text-3xl font-extrabold tracking-tight text-gray-900"
                >
                  {{ eventDetails.venue.address_1 }}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div class="images lg:mx-auto lg:max-w-7xl md:mt-4 mt-16 px-4">
        <div v-if="eventDetails.images === null">{{ eventDetails.images }}</div>
        <div
          v-else
          class="pb-16 text-5xl font-extrabold text-blue-700 text-center"
        >
          Gallery
        </div>

        <div>
          <vue-picture-swipe :items="imagesList"></vue-picture-swipe>
        </div>
      </div>
    </div>

    <!-- view-dashboard button -->
    <div
      class="dashboard-button absolute top-48 -right-12 md:-right-16 text-md md:text-lg rounded-b-lg font-medium py-2 md:py-4 px-8 rotate-90 text-white bg-yellow-500 hover:bg-yellow-400"
      @click="open = true"
    >
      View events list
      <!-- slide-over -->
      <SideBarEvent :eventListToSidebar="sortedEventList" :open="open" />
    </div>
  </div>
</template>
<script>
import eventsListJson from "../../myEventArray.json";
import VuePictureSwipe from "vue3-picture-swipe";
import SideBarEvent from "./SldeBarEvent.vue";
import { ref } from "vue";

export default {
  components: {
    VuePictureSwipe,
    SideBarEvent,
  },
  data: () => {
    const open = ref(false);
    return {
      eventsListJson,
      open,
      myArray: [],
      count: 0,
      galleryArray: [],
    };
  },
  computed: {
    eventID() {
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

    sortedEventList() {
      const sortedList = this.eventsList.sort((a, b) => {
        return new Date(b.local_date) - new Date(a.local_date);
      });
      return sortedList;
    },

    eventImages() {
      return this.eventDetails.images;
    },

    imagesList() {
      console.log(this.eventImages);
      if (this.eventImages === null) {
        return [];
      }
      if (this.count < 1) {
        this.eventImages.forEach((element) => {
          this.count++;
          this.myArray.push({
            src: element,
            thumbnail: element,
            w: 1280,
            h: 720,
          });
        });
      }

      return this.myArray;
    },
  },
  methods: {
    galleryStyle() {
      // adding style inside vuePictureSwipe gallery
      let gallery = document.querySelector(".my-gallery");
      gallery.classList.add("galleryStyle");
      for (let index = 0; index < gallery.childNodes.length; index++) {
        const element = gallery.childNodes[index];
        element.className = "galleryThumbnailStyle";
        this.galleryArray.push(element);
      }
    },
  },
  mounted() {
    this.galleryStyle();

    scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  },

  updated() {
    this.galleryStyle();
    this.eventsList;
    this.eventImages;
    this.imagesList;
    this.eventDetails;
  },
};
</script>
<style>
.galleryStyle {
  @apply grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8;
}

.galleryThumbnailStyle {
  @apply block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden;
}
</style>
