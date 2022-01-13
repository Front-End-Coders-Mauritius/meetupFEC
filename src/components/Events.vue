<template>
  <a
    href=""
    v-for="event in eventsList"
    :key="event"
    class="events-wrapper flex flex-col gap-2 justify-center bg-white px-4 py-6 text-xl font-medium w-full rounded-lg shadow-xl"
  >
    {{ event.name }}
  </a>
</template>
<script>
export default {
  data: () => {
    return {
      eventsList: [
        {
          name: "Front-end Coders October Meetup 2020",
          date: "October 2020",
        },

        {
          name: "Front-end Coders July Online Meetup 2020",
          date: "July 2020",
        },
        {
          name: "Front-End Coders June 2020 Online Meetup",
          date: "June 2020",
        },
        {
          name: "Front-End Coders May 2020 Online Meetup",
          date: "May 2020",
        },
        {
          name: "Front-end Coders x Gophermu April Online Meetup 2020",
          date: "April 2020",
        },
        {
          name: "Front-End Coders 21 Mar 2020 Monthly #2",
          date: "21 Mar 2020",
        },
        {
          name: "Front-End Coders 15 Feb 2020 Monthly #1",
          date: "15 Feb 2020",
        },
        {
          name: "Front-End Coders Monthly - Jan 2020",
          date: "Jan 2020",
        },
      ],
    };
  },
};
</script>
