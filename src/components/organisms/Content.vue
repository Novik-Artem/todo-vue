<template>
  <div :class="$style.content">
    <TasksList />
    <input type="text" placeholder="add new task" :class="$style.input" />
  </div>
</template>
<script>
import TasksList from "@/components/organisms/TasksList.vue";
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
    TasksList,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/style.scss";
.content {
  display: flex;
  flex-direction: column;
  background-color: $white;
  padding: 1.88rem;
  .input {
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
