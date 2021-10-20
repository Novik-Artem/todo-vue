<template>
  <div>
    <Task
      v-for="task in tasks"
      :key="task.id"
      :taskText="task.text"
      :taskChecked="task.isChecked"
    />
  </div>
</template>

<script>
import Task from "@/components/molecules/Task.vue";
export default {
  data() {
    return {
      tasks: [
        {
          text: "task1",
          id: 1,
          isChecked: false,
        },
        {
          text: "task2",
          id: 2,
          isChecked: true,
        },
        {
          text: "task3",
          id: 3,
          isChecked: false,
        },
      ],
    };
  },
  components: {
    Task,
  },
};
</script>
