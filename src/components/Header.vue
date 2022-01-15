<template>
  <nav class="relative shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="flex justify-between items-center py-6 md:justify-start md:space-x-10"
      >
        <div class="logo-image flex justify-start lg:w-0 lg:flex-1">
          <router-link to="/">
            <span class="sr-only">Workflow</span>
            <img
              class="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            />
          </router-link>
        </div>

        <div class="md:flex items-center justify-end md:flex-1 lg:w-0">
          <router-link
            to="/events"
            class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
          >
            All events
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
