<template>
  <div>
    <nav class="fixed-bar">
      <topBar />
    </nav>
    <main class="LayoutDefault__main">
      <stepper class="my-3" />
      <slot />
    </main>
    <footer class="LayoutDefault__footer">
      &copy; NBO, The Awesome Company.
    </footer>
  </div>
</template>

<script>
import topBar from "../components/topBar";
import stepper from "../components/stepper";

export default {
  name: "layout",
  components: {
    topBar,
    stepper
  }
};
</script>

<style scoped>
.fixed-bar {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 3;
}
</style>
