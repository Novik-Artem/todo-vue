<template>
  <form :class="$style.menu">
    <label :class="$style.label">
      <Tab :isChosen="isChosen" />
      <span :class="$style.item">{{ tabText }}</span>
    </label>
  </form>
</template>

<script>
import Tab from "@/components/atoms/Tab.vue";
export default {
  props: {
    tabText: String,
    isChosen: Boolean,
  },
  components: {
    Tab,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/style.scss";
.menu {
  display: flex;
  .label {
    margin: 0 1.56rem 0 0;
    position: relative;
    cursor: pointer;
    &:last-child {
      margin: 0;
    }
    .item {
      @include openSans;
      color: $rgba;
      padding: 0.5rem;
      @media (max-width: 25rem) {
        font-size: 1.13rem;
        padding: 0.25rem;
      }
      @media (max-width: 21.25rem) {
        font-size: 1rem;
        padding: 0.25rem;
      }
    }
    @media (max-width: 28.75rem) {
      margin: 0 0.5rem 0 0;
    }
    @media (max-width: 25rem) {
      margin: 0;
    }
  }
}
</style>
