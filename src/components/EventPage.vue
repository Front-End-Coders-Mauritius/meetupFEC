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
    </div>
    <!-- slide-over -->
    <TransitionRoot as="template" :show="open">
      <Dialog
        as="div"
        class="fixed inset-0 overflow-hidden"
        @close="open = false"
      >
        <div class="absolute inset-0 overflow-hidden">
          <DialogOverlay class="absolute inset-0" />

          <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <div class="w-screen max-w-md">
                <div
                  class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll"
                >
                  <div class="p-6">
                    <div class="flex items-start justify-between">
                      <DialogTitle class="text-lg font-medium text-gray-900">
                        Events List
                      </DialogTitle>
                      <div class="ml-3 h-7 flex items-center">
                        <button
                          type="button"
                          class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                          @click="open = false"
                        >
                          <span class="sr-only">Close panel</span>
                          <XIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="border-b border-gray-200">
                    <div class="px-6">
                      <nav
                        class="-mb-px flex space-x-6"
                        x-descriptions="Tab component"
                      >
                        <a
                          class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm', ]"
                          >All events lists</a
                        >
                      </nav>
                    </div>
                  </div>

                  <!-- events list -->
                  <ul
                    role="list"
                    class="divide-y divide-gray-200 overflow-y-auto"
                  >
                    <li
                      v-for="(event, index) in sortedEventList"
                      :key="event"
                      :value="index"
                      active-class="red"
                    >
                      <router-link
                        :to="{
                          name: 'eventID',
                          params: { id: event.id },
                        }"
                        class="block hover:bg-gray-50"
                      >
                        <div class="flex flex-col gap-4 px-8 py-4">
                          <div class="flex flex-col-reverse gap-2">
                            <p
                              class="event-name text-sm md:text-lg font-medium text-indigo-600 line-clamp-2"
                            >
                              {{ event.name }}
                            </p>
                            <div class="event-tags flex justify-end">
                              <p
                                class="event-status mr-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800"
                              >
                                {{ event.status }}
                              </p>
                            </div>
                          </div>
                          <p class="text-gray-400 line-clamp-2">
                            {{ event.description.replace(/<\/?[^>]+>/gi, "") }}
                          </p>
                          <div class="flex flex-col gap-2">
                            <div class="flex flex-col gap-4">
                              <p
                                class="flex items-center text-sm text-gray-500 mt-0"
                              >
                                <LocationMarkerIcon
                                  class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 truncate"
                                  aria-hidden="true"
                                />
                                <span class="truncate">{{
                                  event.venue.address_1
                                }}</span>
                              </p>
                            </div>
                            <div
                              class="flex items-center text-sm text-gray-500 h-5"
                            >
                              <CalendarIcon
                                class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                              <p>
                                {{ new Date(event.local_date).toDateString() }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>
<script>
import { ref } from "vue";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  XIcon,
  LocationMarkerIcon,
  CalendarIcon,
  DotsVerticalIcon,
} from "@heroicons/vue/solid";

import eventsListJson from "../../myEventArray.json";
import VuePictureSwipe from "vue3-picture-swipe";

export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    DotsVerticalIcon,
    CalendarIcon,
    LocationMarkerIcon,
    XIcon,
    VuePictureSwipe,
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
