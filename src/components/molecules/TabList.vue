<template>
  <div :class="$style.menu">
    <Tab
      v-for="tab in tabs"
      :key="tab.id"
      :tabText="tab.text"
      :isChosen="tab.isChosen"
    />
  </div>
</template>

<script>
import Tab from "@/components/atoms/Tab.vue";
export default {
  data() {
    return {
      tabs: [
        {
          id: 1,
          text: "All",
          isChosen: true,
        },
        {
          id: 2,
          text: "Active",
          isChosen: false,
        },
        {
          id: 3,
          text: "Completed",
          isChosen: false,
        },
      ],
    };
  },
  components: {
    Tab,
  },
};
</script>

<style lang="scss" module>
.menu {
  display: flex;
}
</style>
