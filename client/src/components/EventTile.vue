<template>
  <div class="event-tile" :style="cssProps(event)" :key="event.id">
    <h3>{{ event.name }}</h3>
    <p>{{ moment().to(event.date) }}</p>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "EventTile",
  props: ["event"],
  methods: {
    moment: function (date) {
      return moment(date);
    },
    cssProps(event) {
      return {
        backgroundImage: `url(${event.image})`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.event-tile {
  display: block;
  padding: 20px 0;
  margin: 20px 10%;
  background-position: bottom center;
  h3,
  p {
    color: rgb(255, 255, 255);
  }
  &:hover {
    transition: 600ms;
    cursor: pointer;
    font-size: 140%;
  }
}
</style>