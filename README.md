# Parlay EV Calculator

## Overview

The Parlay EV Calculator is a web application designed to calculate the expected value (EV) for betting parlays. The application allows users to input multiple betting legs, specify hit rates for each leg, and define various payout scenarios. The EV is then calculated based on these inputs and displayed both in units and in dollars.

## Features

- Add, remove, and set hit rates for multiple betting legs.
- Define payout scenarios based on the number of hits.
- Calculate and display the expected value in units and dollars.
- Preset configurations for quick setup based on popular DFS betting apps.
- Responsive design with a user-friendly interface.

## Technologies Used

- **Frontend**: Vue.js
- **Backend**: Flask
- **Styling**: CSS with a custom style for a clean and modern look
- **Deployment**: Heroku

## Project Structure

```
true-calc/
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── runtime.txt
│   └── Procfile
├── frontend/
│   ├── public/
│   │   ├── favicon.ico
│   │   └── index.html
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── HelloWorld.vue
│   │   │   └── ParlayCalculator.vue
│   │   ├── App.vue
│   │   ├── main.js
│   ├── .env.production
│   ├── babel.config.js
│   ├── jsconfig.json
│   ├── package.json
│   ├── package-lock.json
│   ├── vue.config.js
│   ├── Procfile
│   └── static.json
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js and npm
- Python 3.9+
- Heroku CLI

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd true-calc
   ```

2. **Backend Setup:**

   - Navigate to the backend directory:

     ```bash
     cd backend
     ```

   - Create a virtual environment and activate it:

     ```bash
     python -m venv venv
     source venv/bin/activate  # On Windows: venv\Scripts\activate
     ```

   - Install the dependencies:
     ```bash
     pip install -r requirements.txt
     ```

3. **Frontend Setup:**

   - Navigate to the frontend directory:

     ```bash
     cd ../frontend
     ```

   - Install the dependencies:
     ```bash
     npm install
     ```

### Running the Application

1. **Backend:**

   ```bash
   cd backend
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   python app.py
   ```

2. **Frontend:**

   ```bash
   cd frontend
   npm run serve
   ```

   The application should now be running at `http://localhost:8080`.

### Accessing the Deployed Application

- **Frontend URL:** `https://your-frontend-app-name.herokuapp.com`

## Usage

### Setting Up Legs and Payouts

1. **Add Legs:**

   - Use the "Add Leg" button to add multiple legs.
   - Set the hit rate for each leg.

2. **Define Payouts:**

   - Specify the number of hits required and the corresponding payout or loss.

3. **Calculate EV:**
   - Input the unit size in dollars.
   - Click the "Calculate EV" button to see the expected value in units and dollars.

### Presets

- Use the "Prizepicks Presets" and "Underdog Presets" buttons to quickly set up common configurations.

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/fooBar`).
3. Commit your changes (`git commit -am 'Add some fooBar'`).
4. Push to the branch (`git push origin feature/fooBar`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Vue.js documentation
- Flask documentation
- Heroku documentation
