<!-- src/App.vue -->
<template>
  <div id="app">
    <ProbabilityForm />
  </div>
</template>

<script>
import ProbabilityForm from "./components/ProbabilityForm.vue";

export default {
  name: "App",
  components: {
    ProbabilityForm,
  },
};
</script>
