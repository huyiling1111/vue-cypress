<template>
  <div v-if="event">
    <h2>Event Details</h2>
    <p>
      <b class="key">Event name</b>: <span class="value">{{ event.name }}</span>
    </p>
    <p>
      <b class="key">Event venue</b>:
      <span class="value">{{ event.venue }}</span>
    </p>
    <p>
      <b class="key">Event date</b>:
      <span class="value">{{ moment(event.date).format("MMMM Do YYYY") }}</span>
    </p>
    <p>
      <b class="key">Event time</b>: <span class="value">{{ event.time }}</span>
    </p>
    <p>
      <b class="key">Remaining tickets</b>:
      <span class="value">{{ event.ticketQuantity }}</span>
    </p>
    <p>
      <b class="key">Cancelled</b>:
      <span class="value">{{ event.isCancelled ? "Yes" : "No" }}</span>
    </p>
    <p><b class="key">Additional notes</b>:</p>
    <p class="value">{{ event.additionalNotes }}</p>
    <AppButton
      className="primary"
      label="Cancel Event"
      id="cancel-event-btn"
      :onClick="() => cancelEvent(event)"
    />
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import moment from "moment";
import router from "../router";

import { AppButton } from "../components";

export default {
  components: {
    AppButton,
  },
  methods: {
    moment: function (date) {
      return moment(date);
    },
  },
  setup() {
    const route = useRoute();
    const store = useStore();

    const event = computed({
      get: () => store.getters.event(route.params.id),
    });

    onMounted(() => {
      try {
        store.dispatch("getEvent", route.params.id);
      } catch {
        router.push("/");
      }
    });

    const cancelEvent = async (target) => {
      target.isCancelled = true;
      store.dispatch("updateEvent", target);
      router.push("/list-events");
    };

    return {
      event,
      cancelEvent,
    };
  },
};
</script>

<style lang="scss" scoped>
div {
  margin: 60px 10%;
  h2 {
    text-transform: uppercase;
    color: rgb(195, 195, 195);
    font-size: 1.5vw;
    text-align: left;
    font-weight: 600;
    margin-bottom: 60px;
  }
  p {
    text-align: left;
  }
}
</style>