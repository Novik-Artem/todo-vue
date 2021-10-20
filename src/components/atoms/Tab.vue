<template>
  <label :class="$style.label">
    <input :class="$style.radio" type="radio" :checked="isChosen" />
    <span :class="$style.fake"></span>
    <span :class="$style.item">{{ tabText }}</span>
  </label>
</template>

<script>
export default {
  props: {
    tabText: String,
    isChosen: Boolean,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/style.scss";
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
  .fake:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border: 0.0625rem solid $rgba;
    border-radius: 0.3rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    padding: 0.69rem;
  }
  .radio {
    display: none;
  }
  .radio:checked + .fake:before {
    opacity: 1;
  }
}
</style>
