<template>
  <div :class="$style.menu">
    <Tab
      v-for="tab in getTabs"
      :key="tab.id"
      :tabText="tab.text"
      :isChosen="tab.isChosen"
      :tabId="tab.id"
    />
  </div>
</template>

<script>
import Tab from "@/components/atoms/Tab.vue";
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["getTabs"]),
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
