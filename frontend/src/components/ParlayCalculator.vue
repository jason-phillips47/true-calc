<template>
    <div class="calculator">
        <h1>Parlay EV Calculator</h1>
        <form @submit.prevent="handleSubmit">
            <div class="columns">
                <div class="column">
                    <h3>Legs</h3>
                    <div v-for="(leg, legIndex) in legs" :key="legIndex" class="leg">
                        <label>
                            Leg {{ legIndex + 1 }} Hit Rate (%):
                            <input
                                type="number"
                                v-model.number="leg.hitRate"
                                min="0"
                                max="100"
                                required
                            />
                        </label>
                        <button type="button" @click="removeLeg(legIndex)">Remove Leg</button>
                    </div>
                    <button type="button" @click="addLeg">Add Leg</button>
                </div>
                <div class="column">
                    <h3>Payouts</h3>
                    <div v-for="(payout, payoutIndex) in payouts" :key="payoutIndex" class="payout">
                        <label>
                            If
                            <input type="number" v-model.number="payout.hits" min="0" :max="legs.length" required />
                            out of {{ legs.length }} legs hit,
                            <br>
                            <input type="radio" v-model="payout.type" :value="'payout'" /> Payout 
                            <input type="text" v-if="payout.type === 'payout'" v-model="payout.amount" />
                            <br>
                            <input type="radio" v-model="payout.type" :value="'loss'" /> Lose 
                            <input type="number" v-if="payout.type === 'loss'" v-model.number="payout.loss" min="0" /> Units
                        </label>
                        <button type="button" @click="removePayout(payoutIndex)">Remove Payout</button>
                    </div>
                    <button type="button" @click="addPayout">Add Payout</button>
                </div>
            </div>
            <button type="submit" class="calculate-button">Calculate EV</button>
        </form>
        <div v-if="result !== null" class="result">
            <h2>Expected Value (EV): {{ result }}</h2>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            legs: [
                { hitRate: 50 }
            ],
            payouts: [
                { hits: 1, type: 'payout', amount: "+100", loss: 0 }
            ],
            result: null
        };
    },
    methods: {
        addLeg() {
            this.legs.push({ hitRate: 50 });
        },
        removeLeg(index) {
            this.legs.splice(index, 1);
        },
        addPayout() {
            this.payouts.push({ hits: 1, type: 'payout', amount: "+100", loss: 0 });
        },
        removePayout(index) {
            this.payouts.splice(index, 1);
        },
        parseOdds(odds) {
            let parsedOdds = parseFloat(odds);
            if (isNaN(parsedOdds)) return 0;
            if (odds[0] === '-') {
                return -100 / parsedOdds;
            } else if (odds[0] === '+' || !isNaN(odds[0])) {
                return parsedOdds / 100;
            }
            return 0;
        },
        async handleSubmit() {
            try {
                const processedPayouts = this.payouts.map(payout => ({
                    hits: payout.hits,
                    type: payout.type,
                    amount: payout.type === 'payout' ? this.parseOdds(payout.amount) : payout.loss
                }));
                const response = await axios.post('/calculate_ev', { legs: this.legs, payouts: processedPayouts });
                this.result = response.data.ev;
            } catch (error) {
                console.error('There was an error calculating the EV!', error);
            }
        }
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
    font-family: 'Roboto', sans-serif;
}

.calculator {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}

.columns {
    display: flex;
    justify-content: space-between;
}

.column {
    width: 45%;
}

.leg, .payout {
    background: #fff;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="number"], input[type="text"] {
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

button {
    background: #007BFF;
    color: #fff;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
}

button[type="button"] {
    background: #6c757d;
}

button:hover {
    background: #0056b3;
}

button[type="button"]:hover {
    background: #5a6268;
}

.calculate-button {
    display: block;
    width: 100%;
    margin-top: 20px;
}

.result {
    text-align: center;
    margin-top: 20px;
}

.result h2 {
    font-size: 1.5em;
    color: #28a745;
}
</style>
