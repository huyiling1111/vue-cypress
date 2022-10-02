<template>
  <div>
    <h2>Event List</h2>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Date</th>
          <th>Event Name</th>
          <th>Due Date</th>
          <th>Remaining</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <router-link
          :to="`/event/${event._id}`"
          v-for="event in events"
          :key="event._id"
          :class="
            event.isCancelled || moment(event.date).isBefore()
              ? 'cancelled-event'
              : ''
          "
        >
          <td>
            <img :src="event.image" />
            <img
              class="image-cancelled"
              v-if="event.isCancelled"
              src="/assets/cancelled.png"
            />
          </td>
          <td>{{ moment(event.date).format("MM/DD/YYYY") }}</td>
          <td>{{ event.name }}</td>
          <td>{{ moment().to(event.date) }}</td>
          <td>
            <b
              >{{
                event.ticketQuantity > 0
                  ? `${event.ticketQuantity} ticket(s)`
                  : "Sold Out"
              }}
            </b>
          </td>
        </router-link>
      </tbody>
    </table>
  </div>
</template>

<script>
import moment from "moment";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

export default {
  methods: {
    moment: function (date) {
      return moment(date);
    },
  },
  setup() {
    const store = useStore();

    const events = computed({
      get: () => store.getters.events,
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

table {
  font-size: 120%;
  border-collapse: collapse;
  margin: 0 10%;
  width: 80%;
  thead {
    color: rgb(111, 111, 111);
    padding: 0;
  }
  a {
    display: table-row;
    vertical-align: middle;
    text-decoration: none;
    height: 40px;
    border-bottom: 1px solid rgb(195, 195, 195);
    color: rgb(44, 62, 80);
    &:visited {
      color: rgb(44, 62, 80);
    }
    &:hover {
      transition: 600ms;
      background-color: rgba(195, 195, 195, 0.2);
    }
    button {
      position: absolute;
    }
    &.cancelled-event {
      background-color: rgb(228, 228, 228);
      color: rgb(111, 111, 111);
      td {
        position: relative;
        img.image-cancelled {
          height: auto;
          position: absolute;
          height: 55%;
          left: 17%;
          top: -4%;
        }
      }
    }
    td {
      img {
        height: 80px;
        margin: 25px 0 20px 0;
      }
    }
  }
}
</style>