<template>
  <form :class="$style.menu">
    <label :class="$style.label" v-for="item in items" :key="item.text">
      <RadioBtn />
      <span :class="$style.item">{{ item.text }}</span>
    </label>
  </form>
</template>

<script>
import RadioBtn from "@/components/atoms/RadioBtn.vue";
export default {
  data() {
    return {
      items: [{ text: "All" }, { text: "Active" }, { text: "Completed" }],
    };
  },
  components: {
    RadioBtn,
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
