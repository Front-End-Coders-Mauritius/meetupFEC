<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="homepage-container">
    <div class="homepage-wrapper mx-auto max-w-7xl">
      <main class="lg:relative h-90">
        <div
          class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left"
        >
          <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1
              class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
            >
              <span class="block xl:inline text-blue-500"
                >Front-End Coders</span
              >
              {{ " " }}
              <span
                class="block text-indigo-600 xl:inline text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-500 to-green-600"
                >Mauritius</span
              >
            </h1>
            <p
              class="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl"
            >
              Front-End coders Mauritius is a free meetup that's dedicated to
              all aspect of Front-End development. it occurs in general one a
              month at announced date and place. Feel free to join!
            </p>
            <div
              class="mt-10 md:flex justify-start md:justify-center lg:justify-start gap-4 w-72 mx-auto md:w-auto lg:mx-o"
            >
              <div class="rounded-md shadow">
                <router-link
                  to="/events"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-400 md:py-4 md:text-lg md:px-10"
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
    </div>
  </div>
</template>

<script>
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/solid";

export default {
  components: {
    ChevronDownIcon,

    MenuIcon,
    XIcon,
  },
};
</script>
