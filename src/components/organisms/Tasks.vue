<template>
  <div :class="$style.tasks">
    <Task />
    <input type="text" placeholder="add new task" :class="$style.input" />
  </div>
</template>

<script>
import Task from "../molecules/Task.vue";
export default {
  components: {
    Task,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/style.scss";
.tasks {
  background-color: $white;
  padding: 1.88rem;
  .input {
    width: 100%;
    @include Inter;
    color: $C800;
    text-align: center;
    background: $C200;
    border: 0.09rem dashed $C300;
    box-sizing: border-box;
    padding: 0.69rem 0;
    border-radius: 0.6rem;
    cursor: pointer;
  }
}
</style>
