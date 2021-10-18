<template>
  <div :class="$style.header">to do list</div>
</template>

<style lang="scss" module>
@import "@/assets/styles/style.scss";
.header {
  @include openSans;
  color: $C800;
  text-align: center;
  padding: 0.69rem 0;
  background-color: $C300;
}
</style>
