<template>
  <div :class="$style.footer">
    <div :class="$style.counter">1/3 left</div>
    <TabList />
  </div>
</template>

<script>
import TabList from "@/components/molecules/TabList.vue";
export default {
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
