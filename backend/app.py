from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import numpy as np
import itertools

app = Flask(__name__, static_folder='../frontend/dist', static_url_path='/')
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/calculate_ev', methods=['POST'])
def calculate_ev():
    data = request.json
    legs = data['legs']
    payouts = data['payouts']

    leg_probs = [leg['hitRate'] / 100 for leg in legs]
    num_legs = len(legs)

    ev = 0

    # Generate all possible hit/miss combinations for the legs
    for combination in itertools.product([0, 1], repeat=num_legs):
        hits = sum(combination)
        prob = np.prod([leg_probs[i] if combination[i] == 1 else 1 - leg_probs[i] for i in range(num_legs)])

        payout = -1  # Default loss of 1 unit
        for payout_condition in payouts:
            if hits == payout_condition['hits']:
                if payout_condition['type'] == 'payout':
                    payout = payout_condition['amount']
                else:
                    payout = -payout_condition['amount']
                break

        ev += prob * payout

    return jsonify({'ev': ev})

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
