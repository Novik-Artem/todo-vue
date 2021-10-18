<template>
  <div>
    <label :class="$style.task">
      <Checkbox />
      <div :class="$style.text">Task1</div>
      <DeleteTask />
    </label>
    <label :class="$style.task">
      <Checkbox />
      <div :class="$style.text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ex
      </div>
      <DeleteTask />
    </label>
    <label :class="$style.task">
      <Checkbox />
      <div :class="$style.text">Task1</div>
      <DeleteTask />
    </label>
  </div>
</template>

<script>
import Checkbox from "../atoms/Checkbox.vue";
import DeleteTask from "../atoms/DeleteTask.vue";
export default {
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
    max-width: 25rem;
  }
}
</style>
