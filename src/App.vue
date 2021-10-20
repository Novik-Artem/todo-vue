<template>
  <div :class="$style.conteiner">
    <div :class="$style.content">
      <Header />
      <Content />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/components/atoms/Header.vue";
import Content from "@/components/organisms/Content.vue";
import Footer from "@/components/organisms/Footer.vue";
export default {
  components: {
    Header,
    Content,
    Footer,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/style.scss";
.conteiner {
  min-height: 100vh;
  background: linear-gradient(104.11deg, $C900 14.52%, $C400 87.26%);
  padding: 6.25rem 1.25rem;
  .content {
    max-width: 33.75rem;
    margin: 0 auto;
  }
}
</style>
