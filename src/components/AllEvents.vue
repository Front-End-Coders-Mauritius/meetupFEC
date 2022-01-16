<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="fixed inset-0 flex z-40 md:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <div class="relative flex-1 flex flex-col max-w-xs w-full bg-white">
            <TransitionChild
              as="template"
              enter="ease-in-out duration-300"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in-out duration-300"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div class="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  type="button"
                  class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  @click="sidebarOpen = false"
                >
                  <span class="sr-only">Close sidebar</span>
                  <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </TransitionChild>
            <div class="flex-1 h-0 pb-4 overflow-y-auto">
              <router
                to="/"
                class="flex-shrink-0 flex justify-center items-center px-4 text-3xl font-medium text-gray-800 border-b-2 border-gray-420 py-4"
              >
                All events list
              </router>
              <nav class="px-2">
                <ul role="list" class="divide-y divide-gray-200">
                  <li
                    v-for="(event, index) in eventsList"
                    :key="event"
                    :value="event"
                  >
                    <router-link
                      :to="{
                        name: 'singleEvent',
                        params: { eventIndex: index },
                      }"
                      class="block hover:bg-gray-50"
                    >
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
                        <div class="flex flex-col gap-2">
                          <div class="flex flex-ciol">
                            <p
                              class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6"
                            >
                              <LocationMarkerIcon
                                class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 truncate"
                                aria-hidden="true"
                              />
                              <span class="truncate w-48">{{
                                event.venue.address_1
                              }}</span>
                            </p>
                          </div>
                          <div class="flex items-center text-gray-500 mt-0">
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
                    </router-link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </TransitionChild>
        <div class="flex-shrink-0 w-14">
          <!-- Force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden w-96 md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div
        class="flex-1 flex w-96 flex-col min-h-0 border-r border-gray-200 bg-white"
      >
        <div class="flex-1 flex flex-col pb-4 w-96 overflow-y-auto">
          <router
            to="/"
            class="flex-shrink-0 flex justify-center items-center px-4 text-3xl font-medium text-gray-800 border-b-2 border-gray-420 py-4"
          >
            All events list
          </router>
          <nav class="flex-1 px-2 bg-white space-y-1">
            <ul role="list" class="divide-y divide-gray-200">
              <li
                v-for="(event, index) in eventsList"
                :key="event"
                :value="event"
              >
                <router-link
                  :to="{
                    name: 'singleEvent',
                    params: { eventIndex: index },
                  }"
                  class="block hover:bg-gray-50"
                >
                  <div class="flex flex-col gap-4 px-4 py-8 sm:px-6">
                    <div class="flex flex-col-reverse items-end">
                      <p
                        class="event-name text-sm md:text-lg font-medium text-indigo-600 line-clamp-2"
                      >
                        {{ event.name }} - {{ index }}
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
                    <p class="text-gray-400 line-clamp-2">
                      {{ event.description.replace(/<\/?[^>]+>/gi, "") }}
                    </p>
                    <div class="flex flex-col gap-2">
                      <div class="flex flex-col gap-4">
                        <p class="flex items-center text-sm text-gray-500 mt-0">
                          <LocationMarkerIcon
                            class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 truncate"
                            aria-hidden="true"
                          />
                          <span class="truncate">{{
                            event.venue.address_1
                          }}</span>
                        </p>
                      </div>
                      <div class="flex items-center text-sm text-gray-500 h-5">
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
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div class="md:pl-96 flex flex-col flex-1">
      <div
        class="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-white"
      >
        <button
          type="button"
          class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <MenuIcon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="" v-if="loader">Select an Event</div>
      <main class="flex-1" v-else>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script>
import Header from "./Header.vue";

import { LocationMarkerIcon } from "@heroicons/vue/solid";
import eventsListJson from "../../eventsList.json";

import { ref } from "vue";
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuIcon,
  UsersIcon,
  XIcon,
} from "@heroicons/vue/outline";

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

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: InboxIcon, current: false },
  { name: "Reports", href: "#", icon: ChartBarIcon, current: false },
];
export default {
  components: {
    CalendarIcon,
    LocationMarkerIcon,
    UsersIcon,
    Header,
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    MenuIcon,
    XIcon,
  },

  data: () => {
    const sidebarOpen = ref(false);

    return {
      positions,
      eventsListJson,
      eventDetails: "",
      navigation,
      sidebarOpen,
      loader: false,
    };
  },

  computed: {
    eventsList() {
      this.loader = true;

      if (this.eventsListJson.length === 0) {
        return [];
      }
      return this.eventsListJson;
    },
  },

  mounted() {
    this.loader = false;
  },
};
</script>
<style scoped>
.allEvents-container {
  width: 1600px;
}
</style>
