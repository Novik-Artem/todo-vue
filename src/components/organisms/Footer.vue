<template>
  <div :class="$style.footer">
    <div :class="$style.counter">
      {{ getActiveTasks.length }}/{{ getAllTasks.length }} left
    </div>
    <TabList />
  </div>
</template>

<script>
import TabList from "@/components/molecules/TabList.vue";
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["getAllTasks", "getActiveTasks"]),
  components: {
    TabList,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/style.scss";
.footer {
  background: $C300;
  display: flex;
  justify-content: space-between;
  padding: 0.69rem 1.88rem;
  @media (max-width: 28.75rem) {
    padding: 0.69rem 0.6rem;
  }
  .counter {
    @include openSans;
    color: $rgba;
    @media (max-width: 25rem) {
      font-size: 1.13rem;
    }
    @media (max-width: 21.25rem) {
      font-size: 1rem;
    }
  }
}
</style>
