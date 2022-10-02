<template>
  <button :class="className" :name="name" :id="name" @click="onClick">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: ["className", "name", "label", "onClick"],
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
button {
  text-transform: uppercase;
  font-size: 1vw;
  padding: 10px 20px;
  color: #fff;
  border: none;
  border-radius: 25px;
  outline: none;
  font-weight: 700;
  &:hover {
    transition: all 0.5s ease;
    cursor: pointer;
  }
  &:active {
    box-shadow: 1px;
    transform: translateX(2px);
    transform: translateY(2px);
  }
  &.primary {
    background: rgb(118, 180, 176);
    border: 2px solid rgb(118, 180, 176);
  }
  &.primary:hover {
    border: 2px solid rgb(118, 180, 176);
    background: rgb(239, 247, 248);
    color: rgb(118, 180, 176);
  }
  &.secondary {
    background: rgb(111, 111, 111);
    border: 2px solid rgb(111, 111, 111);
  }
  &.secondary:hover {
    border: 2px solid rgb(111, 111, 111);
    background: rgb(228, 228, 228);
    color: rgb(111, 111, 111);
  }
}
</style>