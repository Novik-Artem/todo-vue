<template>
  <div>
    <label :class="$style.task">
      <Checkbox :taskChecked="taskChecked" />
      <div :class="$style.text">{{ taskText }}</div>
      <DeleteTask />
    </label>
  </div>
</template>

<script>
import Checkbox from "@/components/atoms/Checkbox.vue";
import DeleteTask from "@/components/atoms/DeleteTask.vue";
export default {
  props: {
    taskText: String,
    taskChecked: Boolean,
  },
  components: {
    Checkbox,
    DeleteTask,
  },
};
</script>

<style style lang="scss" module>
@import "@/assets/styles/style.scss";
.task {
  background: $C200;
  max-width: 30rem;
  margin: 0 auto 1.56rem auto;
  border-radius: 0.6rem;
  padding: 0 1.25rem;
  display: flex;
  .text {
    @include Inter;
    padding: 0.69rem 0;
    color: $C800;
    flex: 1 1 auto;
  }
}
</style>
