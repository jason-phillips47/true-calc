<!-- src/components/ProbabilityForm.vue -->
<template>
  <div>
    <h1>Probability Calculator</h1>
    <form @submit.prevent="handleSubmit">
      <div v-for="(event, index) in events" :key="index">
        <label>
          Event {{ index + 1 }} Probability:
          <input
            type="number"
            step="0.01"
            v-model="event.probability"
            required
          />
        </label>
      </div>
      <button type="button" @click="addEvent">Add Event</button>
      <button type="submit">Calculate</button>
    </form>
    <div v-if="result !== null">
      <h2>Combined Probability: {{ result }}</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      events: [{ probability: "" }],
      result: null,
    };
  },
  methods: {
    addEvent() {
      this.events.push({ probability: "" });
    },
    async handleSubmit() {
      try {
        const response = await axios.post("/calculate", {
          events: this.events,
        });
        this.result = response.data.probability;
      } catch (error) {
        console.error("There was an error calculating the probability!", error);
      }
    },
  },
};
</script>
