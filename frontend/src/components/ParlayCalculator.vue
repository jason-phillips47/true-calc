<template>
    <div class="calculator">
        <h1>DFS Focused EV Calculator</h1>
        <div class="presets">
            <button @click="togglePreset('prizepicks')">Prizepicks Presets</button>
            <div v-if="showPrizepicks" class="preset-group">
                <button @click="applyPreset(preset)" v-for="preset in prizepicksPresets" :key="preset.name">{{ preset.name }}</button>
            </div>
            <button @click="togglePreset('underdog')">Underdog Presets</button>
            <div v-if="showUnderdog" class="preset-group">
                <button @click="applyPreset(preset)" v-for="preset in underdogPresets" :key="preset.name">{{ preset.name }}</button>
            </div>

        </div>
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
                                step="0.00001"
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
                            If exactly
                            <input type="number" v-model.number="payout.hits" min="0" :max="legs.length" required />
                            out of {{ legs.length }} legs hit,
                            <br>
                            <input type="radio" v-model="payout.type" :value="'payout'" /> Payout:
                            <input type="text" v-if="payout.type === 'payout'" v-model="payout.amount" />
                            <br>
                            <input type="radio" v-model="payout.type" :value="'loss'" /> Lose Units:
                            <input type="number" v-if="payout.type === 'loss'" v-model.number="payout.loss" step="0.1" />
                        </label>
                        <button type="button" @click="removePayout(payoutIndex)">Remove Payout</button>
                    </div>
                    <button type="button" @click="addPayout">Add Payout</button><p :style="{fontSize: '8px'}">Payouts use American Odds</p>
                </div>
            </div>
            <div class="options">
                    <div class="set-all-hit-rate">
                <label>
                    Set all legs hit rate (%):
                    <input type="number" v-model.number="allLegsHitRate" min="0" max="100" step="0.00001" />
                    <button type="button" @click="setAllLegsHitRate">Set</button>
                </label>
                
            </div>
                    <div class="unit-size">
            <label>
                Unit Size ($):
                <input type="number" v-model.number="unitSize" min="0" step="0.01" />
            </label>
</div>
</div>
<p :style="{fontSize: '8px'}">First calculation may take a while.</p>
            <button type="submit" class="calculate-button">Calculate EV</button>
        </form>
        <div v-if="result !== null" class="result">
    <h2 :style="{ color: result > 0 ? 'green' : result < 0 ? 'red' : 'black' }">
        Expected Value (EV): {{ result.toFixed(6) }} units
    </h2>
    <h2 v-if="unitSize !== null && unitSize > 0" :style="{ color: result > 0 ? 'green' : result < 0 ? 'red' : 'black' }">
        Expected Value (EV): ${{ (result * unitSize).toFixed(2) }}
    </h2>
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
                { hits: 1, total: 1, amount: "+100", type: 'payout'}
            ],
            result: null,
            unitSize: null,
            allLegsHitRate: null,
            showPrizepicks: false,
            showUnderdog: false,
            prizepicksPresets: [
                {
                    name: "Prizepicks 2 power",
                    legs: Array(2).fill({ hitRate: 50 }),
                    payouts: [
                        { hits: 2, type: 'payout', amount: "+200", loss: 0 }                    
                    ]
                },
                {
                    name: "Prizepicks 3 flex",
                    legs: Array(3).fill({ hitRate: 50 }),
                    payouts: [
                        { hits: 3, type: 'payout', amount: "+125", loss: 0 },
                        { hits: 2, type: 'payout', amount: "-400", loss: 0 }
                    ]
                },
                {
                    name: "Prizepicks 3 power",
                    legs: Array(3).fill({ hitRate: 50 }),
                    payouts: [
                        { hits: 3, type: 'payout', amount: "+400", loss: 0 }                    
                    ]
                },
                {
                    name: "Prizepicks 4 flex",
                    legs: Array(4).fill({ hitRate: 50 }),
                    payouts: [
                        { hits: 4, type: 'payout', amount: "+400", loss: 0 },
                        { hits: 3, type: 'payout', amount: "-200", loss: 0 }
                    ]
                },
                {
                    name: "Prizepicks 4 power",
                    legs: Array(4).fill({ hitRate: 50 }),
                    payouts: [
                        { hits: 4, type: 'payout', amount: "+900", loss: 0 }
                    ]
                },
                {
                    name: "Prizepicks 5 flex",
                    legs: Array(5).fill({ hitRate: 50 }),
                    payouts: [
                        { hits: 5, type: 'payout', amount: "+900", loss: 0 },
                        { hits: 4, type: 'payout', amount: "+100", loss: 0 },
                        { hits: 3, type: 'loss', amount: "0", loss: 0.6 }
                    ]
                },
                {
                    name: "Prizepicks 6 flex",
                    legs: Array(6).fill({ hitRate: 50 }),
                    payouts: [
                        { hits: 6, type: 'payout', amount: "+2400", loss: 0 },
                        { hits: 5, type: 'payout', amount: "+100", loss: 0 },
                        { hits: 4, type: 'loss', amount: "0", loss: 0.6 }
                    ]
                }
            ],
            underdogPresets: [
                {
                    name: "Underdog 2 power",
                    legs: Array(2).fill({ hitRate: 50 }),
                    payouts: [
                        { hits: 2, type: 'payout', amount: "+200", loss: 0 }                    
                    ]
                },
                {
                    name: "Underdog 3 flex",
                    legs: Array(3).fill({ hitRate: 50 }),
                    payouts: [
                        { hits: 3, type: 'payout', amount: "+200", loss: 0 },
                        { hits: 2, type: 'payout', amount: "0", loss: 0 }                    
                    ]
                },
                {
                    name: "Underdog 3 power",
                    legs: Array(3).fill({ hitRate: 50 }),
                    payouts: [
                        { hits: 3, type: 'payout', amount: "+500", loss: 0 }                    
                    ]
                },
                {
                    name: "Underdog 4 flex",
                    legs: Array(4).fill({ hitRate: 50 }),
                    payouts: [
                        { hits: 4, type: 'payout', amount: "+500", loss: 0 },
                        { hits: 3, type: 'payout', amount: "-200", loss: 0 }                    
                    ]
                },
                {
                    name: "Underdog 4 power",
                    legs: Array(4).fill({ hitRate: 50 }),
                    payouts: [
                        { hits: 4, type: 'payout', amount: "+900", loss: 0 }                    
                    ]
                },
                {
                    name: "Underdog 5 flex",
                    legs: Array(5).fill({ hitRate: 50 }),
                    payouts: [
                        { hits: 5, type: 'payout', amount: "+900", loss: 0 },
                        { hits: 4, type: 'payout', amount: "+150", loss: 0 }                   
                    ]
                },
                {
                    name: "Underdog 5 power",
                    legs: Array(5).fill({ hitRate: 50 }),
                    payouts: [
                        { hits: 5, type: 'payout', amount: "+1900", loss: 0 }             
                    ]
                },
                {
                    name: "Underdog 6 flex",
                    legs: Array(6).fill({ hitRate: 50 }),
                    payouts: [
                        { hits: 6, type: 'payout', amount: "+2400", loss: 0 },
                        { hits: 5, type: 'payout', amount: "+160", loss: 0 },
                        { hits: 4, type: 'loss', amount: "0", loss: 0.75 }                    
                    ]
                },
                {
                    name: "Underdog 7 flex",
                    legs: Array(7).fill({ hitRate: 50 }),
                    payouts: [
                        { hits: 7, type: 'payout', amount: "+3900", loss: 0 },
                        { hits: 6, type: 'payout', amount: "+175", loss: 0 },
                        { hits: 5, type: 'loss', amount: "0", loss: 0.5 }                   
                    ]
                },
                {
                    name: "Underdog 8 flex",
                    legs: Array(8).fill({ hitRate: 50 }),
                    payouts: [
                        { hits: 8, type: 'payout', amount: "+7900", loss: 0 },
                        { hits: 7, type: 'payout', amount: "+200", loss: 0 },
                        { hits: 6, type: 'payout', amount: "0", loss: 0 }                    
                    ]
                }
            ]
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
        applyPreset(preset) {
            this.legs = JSON.parse(JSON.stringify(preset.legs));
            this.payouts = JSON.parse(JSON.stringify(preset.payouts));
        },
        togglePreset(group) {
            if (group === 'prizepicks') {
                this.showPrizepicks = !this.showPrizepicks;
                if (this.showPrizepicks) this.showUnderdog = false;
            } else if (group === 'underdog') {
                this.showUnderdog = !this.showUnderdog;
                if (this.showUnderdog) this.showPrizepicks = false;
            }
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
        setAllLegsHitRate() {
        if (this.allLegsHitRate !== null) {
            this.legs.forEach(leg => {
                leg.hitRate = this.allLegsHitRate;
            });
        }
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
                this.result = undefined;
            }
        }
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
    font-family: 'Roboto', sans-serif;
    background: #cadae8;
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

.presets {
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}



.presets button {
    display: block;
    width: 300px;
    font-size: large;
    margin: 10px auto;
    background: #007BFF;
    color: #fff;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
}

.preset-group {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
}

.preset-group button {
    display: block;
    width: 200px;
    margin: 10px auto;
    background: #007BFF;
    font-size: small;
    color: #fff;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
}

.presets button:hover {
    background: #0056b3;
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
    width: auto;
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
    background: #007BFF;
}

button:hover {
    background: #0056b3;
}

button[type="button"]:hover {
    background: #0056b3;
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
    color: #000000;
}

.unit-size, .set-all-hit-rate {
    margin-top: 20px;
}

.unit-size label {
    display: block;
    margin-bottom: 10px;
}

.unit-size input, .set-all-hit-rate input {
    width: auto;
    padding: 5px;
}

.unit-size button, .set-all-hit-rate button {
    margin-left: 10px;
}

.options {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}

.set-all-hit-rate, .unit-size {
    width: auto;
    
}

</style>
