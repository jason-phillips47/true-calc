<!-- src/App.vue -->
<template>
  <div id="app">
    <ParlayCalculator />
  </div>
</template>

<script>
import ParlayCalculator from "./components/ParlayCalculator.vue";

export default {
  name: "App",
  components: {
    ParlayCalculator,
  },
};
</script>
