<template>
  <div>
    <label :class="$style.task" v-for="task in tasks" :key="task.text">
      <Checkbox />
      <div :class="$style.text">{{ task.text }}</div>
      <DeleteTask />
    </label>
  </div>
</template>

<script>
import Checkbox from "@/components/atoms/Checkbox.vue";
import DeleteTask from "@/components/atoms/DeleteTask.vue";
export default {
  data() {
    return {
      tasks: [
        { text: "Task1" },
        { text: "loremdd shgfdgdgfsdjzgdfjz ddddddddddd" },
        { text: "Task3" },
      ],
    };
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
    max-width: 25rem;
  }
}
</style>
