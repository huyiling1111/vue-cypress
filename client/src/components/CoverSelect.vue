<template>
  <div>
    <img :src="modelValue" />
    <ul>
      <li v-for="cover in covers" :key="cover.id" @click="$emit('update:modelValue', cover.value)" :class="{selected: modelValue === cover.value}">
        <input
          :name="cover.name"
          :id="`${cover.name}-${cover.id}`"
          :value="cover.value"
          @input="$emit('update:modelValue', $event.target.value)"
          :checked="modelValue === cover.value"
          type="radio"
        />
        <label :for="`${cover.name}-${cover.id}`"
          >Event Cover {{ cover.id }}</label
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["name", "modelValue"],
  data: (props) => {
    return {
      covers: [
        {
          id: 1,
          name: props.name,
          value: "./assets/event-1.jpg",
        },
        {
          id: 2,
          name: props.name,
          value: "./assets/event-2.jpg",
        },
        {
          id: 3,
          name: props.name,
          value: "./assets/event-3.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
div {
  margin: 0 10%;
  & > label {
    display: block;
    margin-bottom: 5px;
  }
  img {
    width: 100%;
    display: block;
    margin: 0 auto;
    border-radius: 10px;
  }
  ul {
    padding: 0;
    li {
        color: rgb(118, 180, 176);
        border: 1px solid rgb(118, 180, 176);
        border-radius: 25px;
        outline: none;
        font-weight: 500;
        display: block;
        text-align: center;
        height: 30px;
        width: 90%;
        margin: 5px auto;
        background: rgb(239, 247, 248);
        input {
          display: none;
        }
        input,
        label {
          position: relative;
          top: 5px;
        }
        &.selected {
          border: none;
          color: #fff;
          background: rgb(118, 180, 176);
        }
    }
  }
}
</style>