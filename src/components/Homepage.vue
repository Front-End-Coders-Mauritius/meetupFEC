<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="homepage-container relative bg-gray-50">
    <Header />
    <div class="homepage-wrapper mx-auto max-w-7xl">
      <main class="lg:relative">
        <div
          class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left"
        >
          <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1
              class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
            >
              <span class="block xl:inline">Front-End Coders</span>
              {{ " " }}
              <span class="block text-indigo-600 xl:inline">Mauritius</span>
            </h1>
            <p
              class="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl"
            >
              Front-End coders Mauritius is a free meetup that's dedicated to
              all aspect of Front-End development. it occurs in general one a
              month at announced date and place. Feel free to join!
            </p>
            <div
              class="mt-10 sm:flex justify-start w-72 mx-auto md:w-auto lg:mx-o"
            >
              <div class="rounded-md shadow">
                <router-link
                  to="/events"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  View Events
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div
          class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full"
        >
          <img
            class="absolute inset-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
            alt=""
          />
        </div>
      </main>

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
                  Doloribus dolores nostrum quia qui natus officia quod et
                  dolorem. Sit repellendus qui ut at blanditiis et quo et
                  molestiae.
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
          <div class="rounded-md shadow">
            <router-link
              to="/events"
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              View all events
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/vue/outline";
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  CashIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/solid";
import eventsList from "../../eventsList.json";

const features = [
  {
    name: "Analytics",
    href: "#",
    description:
      "Get a better understanding of where your traffic is coming from.",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    href: "#",
    description: "Speak directly to your customers in a more meaningful way.",
    icon: CursorClickIcon,
  },
  {
    name: "Security",
    href: "#",
    description: "Your customers' data will be safe and secure.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    href: "#",
    description: "Connect with third-party tools that you're already using.",
    icon: ViewGridIcon,
  },
  {
    name: "Automations",
    href: "#",
    description:
      "Build strategic funnels that will drive your customers to convert",
    icon: RefreshIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
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
    Header,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    ClockIcon,
    MenuIcon,
    XIcon,
  },
  data: () => {
    return {
      features,
      callsToAction,
      resources,
      recentPosts,
      events,
      eventsList: eventsList,
    };
  },
};
</script>
