<template>
  <div>
    <input :class="$style.radio" type="radio" name="name" value="all" />
    <span :class="$style.fake"></span>
  </div>
</template>

<style lang="scss" module>
@import "@/assets/styles/style.scss";
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
</style>
