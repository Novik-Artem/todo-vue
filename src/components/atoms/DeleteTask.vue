<template>
  <div>
    <div :class="$style.cross" @click="delTask"></div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    id: String,
  },
  methods: {
    ...mapMutations(["deleteTask"]),
    delTask() {
      this.deleteTask(this.id);
    },
  },
};
</script>

<style style lang="scss" module>
@import "@/assets/styles/style.scss";
.cross {
  margin: 0 0 0 1.44rem;
  min-width: 1.5rem;
  height: 1.5rem;
  border: 0.125rem solid $C500;
  border-radius: 0.3rem;
  opacity: 0.5;
  position: relative;
  top: 0.8rem;
  cursor: pointer;
  &:hover {
    opacity: 1;
    border: 0.16rem solid $C500;
    &:before {
      top: 0.6rem;
      left: 0.22rem;
    }
    &:after {
      top: 0.6rem;
      left: 0.22rem;
    }
  }
  &:before {
    content: "";
    position: absolute;
    width: 0.8rem;
    height: 0.0625rem;
    top: 0.66rem;
    left: 0.25rem;
    transform: rotate(-45deg);
    background-color: $C500;
  }
  &:after {
    content: "";
    position: absolute;
    width: 0.8rem;
    height: 0.0625rem;
    top: 0.66rem;
    left: 0.25rem;
    transform: rotate(45deg);
    background-color: $C500;
  }
}
</style>
