<template>
  <nav class="relative shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="flex justify-between items-center py-7 md:justify-start md:space-x-10"
      >
        <div class="logo-image flex justify-start lg:w-0 lg:flex-1">
          <router-link to="/" class="flex gap-2">
            <span class="sr-only">Workflow</span>
            <span class="text-xl md:text-4xl font-extrabold text-red-700"
              >Front-End Coders Mauritius</span
            >
          </router-link>
        </div>

        <div class="md:flex items-center justify-end md:flex-1 lg:w-0">
          <router-link
            to="/events"
            class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-red-600"
          >
            All events
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
