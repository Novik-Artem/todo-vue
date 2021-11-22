<template>
  <form :class="$style.content" @submit.prevent="submit" id="form">
    <TasksList />
    <input
      type="text"
      placeholder="add new task"
      :class="$style.input"
      v-model="text"
    />
  </form>
</template>
<script>
import TasksList from "@/components/organisms/TasksList.vue";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    ...mapMutations(["createTask"]),
    submit() {
      this.createTask(this.text);
      this.text = "";
    },
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
  max-height: 20rem;
  overflow: auto;
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
