# Collaboration Game

A multiplayer maze game built with React and Empirica for studying collaborative behavior. Players navigate through mazes, collect items, and work together to achieve common goals.

## Overview

This project is a multiplayer maze game where players can:
- Navigate through procedurally generated mazes
- Collect and manage items with limited bag capacity
- Collaborate with other players to achieve common goals
- Participate in both single-player and two-player modes
- Complete surveys and questionnaires throughout the game

## Technical Stack

- **Frontend**: React with ReactDnD for drag-and-drop mechanics
- **Backend**: Empirica for server management and data storage
- **Language**: JavaScript/TypeScript
- **Build Tools**: Vite, ESLint

## Project Structure

```
collaboration-game/
├── client/                 # Frontend React application
│   ├── src/               # Source code
│   ├── public/            # Static assets
│   └── package.json       # Frontend dependencies
├── server/                # Backend Empirica server
│   └── src/              # Server source code
├── settings/             # Game configuration
│   ├── Setups.jsx        # Maze and game setups
│   ├── Utils.jsx         # Game utility functions
│   ├── Settings.jsx      # Game constants
│   ├── IntroQuestions.jsx # Initial game questions
│   ├── MidgameQuestions.jsx # In-game surveys
│   └── ExitQuestions.jsx # End-game surveys
└── public/               # Static assets
```

## Game Mechanics

### Maze System
- Mazes are procedurally generated with varying complexity
- Players navigate using a grid-based movement system
- Items are distributed throughout the maze
- Players have limited bag capacity for item collection

### Game Modes
1. **Single Player Mode**
   - Solo maze navigation
   - Individual goal completion
   - Multiple attempts per setup

2. **Two Player Mode**
   - Collaborative maze navigation
   - Shared and individual goals
   - Coordinated item collection

### Game Flow
1. Introduction round with tutorial
2. Multiple maze attempts with different setups
3. Mid-game surveys between attempts
4. Final exit survey

## Setup
1. Download Empirica.ly (Linux only, check out https://docs.empirica.ly/getting-started/setup for more): `curl -fsS https://install.empirica.dev | sh`
2. Clone this repo: `git clone git@github.com:edwardneo/collaboration-game.git`
3. Install JS packages for the client and server: `cd collaboration-game/client; npm i; cd ../server; npm i; cd ..`
4. Run the server: `empirica`
- If you want to clear the data and run the server (useful for testing): `rm .empirica/local/tajriba.json; empirica`

## Development

### Primary Scripts

In the project directory, you can run:

#### `empirica`
Runs the app locally.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser, and [http://localhost:3000/admin](http://localhost:3000/admin) to navigate through the admin page.

#### `rm .empirica/local/tajriba.json; empirica`
Clears the data and runs the app locally. This command is preferred for debugging.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser, and [http://localhost:3000/admin](http://localhost:3000/admin) to navigate through the admin page.

In `client/`, you can run:

#### `npm run eslint`
Lints all `.js`, `.jsx`, and `.ts` files in `client/`.

#### `npm run eslint-fix`
Lints and tries to fix all `.js`, `.jsx`, and `.ts` files in `client/`.

## Configuration Files

### `settings/Setups.jsx`
- `OnePlayerSetups` and `OnePlayerIntroSetup` store the setups for the one player deployment. The former is an array of setups, while the latter is just one setup. A one player setup is expressed as an object in the following form:
  - `name`: A string that is the name of the setup.
  - `goal`: An array of the number of each kind of item the player must pick up to complete the round.
  - `board`: A 2D array of an array of items, where each item is represented by the index corresponding to the task in `goal`.
  - `playerPositions`: An array of positions, where each position is represented by an array of length 2 of the row and column of the position. For the one player setup, there should only be one position.
  - `capacity`: A integer representing the bag capacity.
- `TwoPlayerSetups` and `TwoPlayerIntroSetup` store the setups for the two player deployment. The former is an array of setups, while the latter is just one setup. This data structure is still in development to integrate into the new one player system.
- `Attempts` is the number of attempts run for each setup.

### `settings/IntroQuestions.jsx` and `settings/ExitQuestions.jsx`
The intro questions are presented as a comprehension check after the starter setup and have answers, while the exit questions are presented as an exit survey after the game is complete. In both files, questions are represented in the following form:
- `question`: A string that is the question to be presented.
- `tag`: A (short) string that represents the question (to be stored in the data).
- `type`: Options are between `'mc'` (Multiple choice), `'ms'` (Multiselect), `'likert'` (Likert scale), and `'fr'` (Free response).
- `choices` (Optional): Only required if `'mc'` or `'ms'`. An array of choices represented as strings.
- `answer` (Optional, for intro): Currently only working for `'mc'` or `'likert'`. The answer to the question represented as the index of `choices`.
- `explanation` (Optional, for intro): A string that is the explanation provided on a correct answer.
- `direction` (Optional): Only required if `'mc'` or `'ms'`. Options are between `'row'` or `'column'`. The direction to display choices in.

In the intro questions, questions are stored in an array. In the exit questions, questions are grouped into categories. The exit questions are an array of categories, where the categories are objects in the following form:
- `title`: Title of the category
- `blurb` (Optional): Blurb to display before the questions.
- `questions`: The array of questions in the category

### `settings/Settings.jsx`
- `ITEM_NAMES`: The item names to display in the dashboard.
- `COLORS`: The item colors being displayed.

