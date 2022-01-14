<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="banner-container relative bg-gray-50 overflow-hidden">
    <div
      class="hidden sm:block sm:absolute sm:inset-y-0 max-h-7xl sm:h-full sm:w-full"
      aria-hidden="true"
    >
      <div class="relative h-full max-w-7xl mx-auto">
        <svg
          class="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="f210dbf6-a58d-4871-961e-36d5016a0f49"
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
            height="784"
            fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
          />
        </svg>
        <svg
          class="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
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
            height="784"
            fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
          />
        </svg>
      </div>
    </div>

    <div class="relative pt-6 pb-16 sm:pb-24">
      <Popover>
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <nav
            class="relative flex items-center justify-between sm:h-10"
            aria-label="Global"
          >
            <div class="flex items-center justify-between w-full md:w-auto">
              <a href="#">
                <span class="sr-only">Workflow</span>
                <img
                  class="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt=""
                />
              </a>
            </div>

            <div class="md:flex md:space-x-10">
              <router-link to="/events"> All Events </router-link>
            </div>
          </nav>
        </div>
      </Popover>

      <main class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
        <div class="text-center">
          <h1
            class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
          >
            <span class="block xl:inline">Front-end Coders</span>
            {{ " " }}
            <span class="block text-indigo-600 xl:inline">Mauritius</span>
          </h1>
          <p
            class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            Front-End coders Mauritius is a free meetup that's dedicated to all
            aspect of Front-End development. it occurs in general one a month at
            announced date and place. Feel free to join!
          </p>
          <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div class="rounded-md shadow">
              <router-link
                to="/events"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                All events
              </router-link>
            </div>
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Gallery
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  <div class="latest-events-container bg-gray-50">
    <div
      class="latest-events-wrapper md:max-w-2xl lg:max-w-7xl mx-auto py-8 px-4 md:px-0"
    >
      <div
        class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl py-8"
      >
        <h1 class="text-center">Latest events</h1>
      </div>
      <div
        class="rounded-lg bg-gray-200 overflow-hidden shadow-xl divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px"
      >
        <div
          v-for="(event, eventIdx) in events.slice(0, 6)"
          :key="event.title"
          :class="[
            eventIdx === 0
              ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
              : '',
            eventIdx === 1 ? 'sm:rounded-tr-lg' : '',
            eventIdx === events.length - 2 ? 'sm:rounded-bl-lg' : '',
            eventIdx === events.length - 1
              ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
              : '',
            'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500',
          ]"
        >
          <div>
            <span
              :class="[
                event.iconBackground,
                event.iconForeground,
                'rounded-lg inline-flex p-3 ring-4 ring-white',
              ]"
              ><ClockIcon class="h-6 w-6 mr-2" />
              <span>{{ event.date }}, 9:30 Am</span>
            </span>
          </div>
          <div class="mt-6">
            <h3 class="text-lg font-medium">
              <a :href="event.href" class="focus:outline-none">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true" />
                {{ event.title }}
              </a>
            </h3>
            <p class="mt-2 text-sm text-gray-500">
              Doloribus dolores nostrum quia qui natus officia quod et dolorem.
              Sit repellendus qui ut at blanditiis et quo et molestiae.
            </p>
          </div>
          <span
            class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
            aria-hidden="true"
          >
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.banner-container {
  height: 600px;
}
</style>
<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  CashIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from "@heroicons/vue/outline";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const events = [
  {
    title: "Front-end Coders October Meetup 2020",
    date: "October 2020",

    href: "#",
    icon: ClockIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    title: "Front-end Coders July Online Meetup 2020",
    date: "July 2020",

    href: "#",
    icon: BadgeCheckIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    title: "Front-End Coders June 2020 Online Meetup",
    date: "June 2020",

    href: "#",
    icon: UsersIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
  {
    title: "Front-End Coders May 2020 Online Meetup",
    date: "May 2020",

    href: "#",
    icon: CashIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
  },
  {
    title: "Front-end Coders x Gophermu April Online Meetup 2020",
    date: "April 2020",

    href: "#",
    icon: ReceiptRefundIcon,
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
  },
  {
    title: "Front-End Coders 21 Mar 2020 Monthly #2",
    date: "21 Mar 2020",

    href: "#",
    icon: AcademicCapIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
  },

  {
    title: "Front-End Coders 15 Feb 2020 Monthly #1",
    date: "15 Feb 2020",

    href: "#",
    icon: AcademicCapIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
  },
  {
    title: "Front-End Coders Monthly - Jan 2020",
    date: "Jan 2020",

    href: "#",
    icon: AcademicCapIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
  },
];
export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    ClockIcon,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      navigation,
      events,
    };
  },
};
</script>
