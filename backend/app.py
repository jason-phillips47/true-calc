from flask import Flask, request, jsonify, send_from_directory
import numpy as np
import os

app = Flask(__name__, static_folder='../probability-calculator/dist', static_url_path='/')

@app.route('/calculate', methods=['POST'])
def calculate_probability():
    data = request.json
    events = data['events']

    combined_probability = 1
    for event in events:
        outcome_probability = float(event['probability'])
        combined_probability *= outcome_probability

    return jsonify({'probability': combined_probability})

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
