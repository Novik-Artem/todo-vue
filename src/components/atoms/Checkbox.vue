<template>
  <div>
    <input :class="$style.checkbox" type="checkbox" />
    <span :class="$style.fake"></span>
  </div>
</template>

<style style lang="scss" module>
@import "@/assets/styles/style.scss";
.checkbox {
  display: none;
}
.fake {
  margin: 0 1.44rem 0 0;
  display: block;
  min-width: 1.5rem;
  height: 1.5rem;
  border: 0.09rem solid $C400;
  border-radius: 0.3rem;
  position: relative;
  top: 0.78rem;
  left: 0;
  cursor: pointer;
  &:before {
    content: "";
    position: absolute;
    top: 0.35rem;
    left: 0.25rem;
    opacity: 0;
    border: 0.125rem solid $white;
    border-top-color: $white;
    border-top-style: solid;
    border-top-width: 0.125rem;
    border-right-color: $white;
    border-right-style: solid;
    border-right-width: 0.125rem;
    border-top: none;
    border-right: none;
    transform: rotate(-45deg);
    width: 1rem;
    height: 0.5rem;
    transition: 0.2s;
  }
}
.checkbox:checked + .fake:before {
  opacity: 1;
}
.checkbox:checked + .fake {
  background-color: $C400;
}
</style>
