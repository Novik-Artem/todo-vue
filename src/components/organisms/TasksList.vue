<template>
  <div v-if="getFilteredTasks.length != 0">
    <Task
      v-for="(task, index) in getFilteredTasks"
      :key="task.id"
      :taskText="task.text"
      :taskChecked="task.isChecked"
      :id="task.id"
      :index="index"
    />
  </div>
  <div v-else :class="$style.noTasks">No tasks, add the first</div>
</template>

<script>
import Task from "@/components/molecules/Task.vue";
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["getFilteredTasks"]),
  components: {
    Task,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/style.scss";
.noTasks {
  @include Inter;
  color: $C800;
  text-align: center;
  background: $C200;
  border: 0.09rem dashed $C300;
  box-sizing: border-box;
  padding: 0.69rem 0;
  border-radius: 0.6rem;
  margin: 0 0 1rem 0;
}
</style>
