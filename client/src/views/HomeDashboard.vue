<template>
  <div>
    <h2>Upcoming events</h2>
    <div v-for="event in events" :key="event._id">
      <event-tile :event="event" />
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import moment from "moment";

import { EventTile } from "../components";

export default {
  methods: {
    moment: function (date) {
      return moment(date);
    },
  },
  components: {
    EventTile,
  },

  setup() {
    const store = useStore();

    const events = computed({
      get: () => store.getters.topEvents,
    });

    onMounted(() => {
      store.dispatch("getEvents");
    });

    return {
      events,
    };
  },
};
</script>

<style lang="scss" scoped>
h2 {
  text-transform: uppercase;
  color: rgb(195, 195, 195);
  font-size: 1.5vw;
  text-align: left;
  font-weight: 600;
  margin: 60px 10%;
}
</style>