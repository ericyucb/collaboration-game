# `maze-game`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and is written in Javascript. It utilizes [ReactDnD](https://react-dnd.github.io/react-dnd/about) to add the drag and drop mechanic.

## Primary Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run deploy`

Builds the app for production, pushes it to the `gh-pages` branch, and deploys app to Github Pages.\
Open [https://edwardneo.github.io/maze-game/](https://edwardneo.github.io/maze-game/) to view it in the browser.

## File structure

### `/App.js`

#### `App`

*Renders the game using given setup*

### `/App.css`

*General page and button dynamics CSS*

### `/settings.js`

**Statics**
- `ITEM_NAMES: string[]` | Array of item names
- `COLORS: string[]` | Array of colors

### `/setups.js`

**Statics**
- `SETUPS: {goal, board, playerPosition, otherPlayers, capacity}[]` | Array of setups
  - `goal: number[]` | Array of collected item goals, with the number at the nth index corresponding to the goal for item n
  - `board: number[][][]` | 2D array representing the board, where each entry in the 2D board array is an array with numbers representing the items in that cell
  - `playerPositions: number[][]` | Array of arrays of length two representing the coordinates where players are located
  - `capacity: number` | Bag capacity

### `/components/Board.js`

#### `Board`

*Represents board grid*

**Props**
- `board: number[][][]` | 2D array representing the board, where each entry in the 2D board array is an array with numbers representing the items in that cell
- `playerPositions: number[][]` | Array of length-two coordinate arrays where players are located
- `movePlayer(itemType: string, row: number, col: number) -> void` | Callback function to move player
- `selectNextCollectItem(item: number) -> void` | Callback function to select next collect item

**Functions**
- `generateCells(numRows, numCols, playerPositions) -> JSX.Element[]` | Returns array of cells to render

### `/components/Cell.js`

#### `Cell`

*Represents cell on board*

**Props**
- `row: number` | Row number of cell
- `col: number` | Column number of cell
- `movePlayer(itemType: string, row: number, col: number) -> void` | Callback function to move player
- `dropTargets: number[]` | Player numbers of players move adjacent to cells for drop targets
- `visionAdj: boolean` | Boolean indicating if cell is move adjacent
- `children: ReactNode` | Children of `Cell` component

### `/components/CellDropTarget.js`

#### `CellDropTarget`

*Represents drop targets that wrap around move adjacent cells*

**Props**
- `row: number` | Row number of cell
- `col: number` | Column number of cell
- `dropTargets: number[]` | Player numbers of players move adjacent to cells for drop targets
- `movePlayer(itemType: string, row: number, col: number) -> void` | Callback function to move player
- `children: ReactNode` | Children of `CellDropTarget` component

### `/components/Controls.js`

**Types and Interfaces**
- `interface HandObject` | Interface representing a hand
  - `[key: string]: number` | Key-value pair of how many cards the hand has for each color
- `interface HandProps` | Props for `Hand`
  - `hand: HandObject` | Current hand being displayed
  - `maxHand: number` | Current max hand reached so far

#### `Controls`

*Has control buttons for collecting and dropping items and locking in action*

**Props**
- `collectItem() -> void` | Callback function to collect next collect item
- `dropItem() -> void` | Callback function to drop next drop item
- `displayCollectItem: number` | Next collect item to display
- `displayDropItem: number` | Next drop item to display

#### `ControlButton`

*Represents control button that has optional display item and disabled mode*

**Props**
- `name: string` | Button action name
- `onClick() -> void` | Callback function to call on click
- `displayIcon: number` | Item to display

### `/components/Dashboard.js`

#### `Dashboard`

*Has list of goals and current bag state*

**Props**
- `round: number` | Round number
- `goal: number[]` | Array of collected item goals, with the number at the nth index corresponding to the goal for item n
- `bag: number[]` | Array of items in bag, with the number at the nth index corresponding to the number of item n
- `capacity: number` | Bag capacity
- `numDistinctItems: number` | Number of distinct items on board
- `selectNextDropItem(item: number) -> void` | Callback function to select next drop item

**Functions**
- `createBagListItem(itemName: string, i: number) -> JSX.Element` | Renders item in dashboard list

### `/components/Game.js`

#### `Game`

*Has board, dashboard, and controls*

**Props**
- `setup: {goal, board, playerPosition, otherPlayers, capacity}` | Displayed setup

**States**
- `board: number[][][]` | 2D array representing the board, where each entry in the 2D board array is an array with numbers representing the items in that cell
- `bag: number[]` | Array of number of each item in the player's bag
- `round: number` | Current round number
- `nextCollect: number | null` | Item queued for collection
- `nextDrop: number | null` | Item queued for drop
- `playersHistory: number[][][]` | Array of each player's movements, represented by an array of length-two coordinate arrays where the player has moved
- 

**Functions**
- `getPlayerPositions(playersHistory: number[][][]) -> number[][]` | Returns array of length-two coordinate arrays where players are located
- `movePlayer(itemType: number, row: number, col: number) -> void` | Move player and update state
- `selectNextCollectItem(item: number) -> void` | Queue next collect item and update state
- `selectDropCollectItem(item: number) -> void` | Queue drop collect item and update state
- `collectItem() -> void` | Collect queued collect item and update state
- `dropItem() -> void` | Drop queued drop item and update state

### `/components/Item.js`

#### `Magazine`

*Represents magazine containing one or more items*

**Props**
- `items: number[]` | Array of items in magazine
- `corner: boolean` | Boolean if the magazine will be in the corner of the cell
- `live=false: boolean` | Boolean if items can be selected
- `selectItem(item: number) -> void` | Callback function to select item

#### `Item`

*Represents item that can be clicked*

**Props**
- `type: number` | Index of item type in `COLORS` from `/settings.js`
- `live=false: boolean` | Boolean if item can be selected
- `selectItem(item: number) -> void` | Callback function to select item

### `/components/Player.js`

#### `Player`

*Represents a player with drag target*

**Props**
- `number: number` | Player number

### `/css/Board.css`

*Board CSS*

### `/css/Cell.css`

*Cell CSS*

### `/css/CellDropTarget.css`

*Cell drop target and hover CSS*

### `/css/Controls.css`

*Controls and control button CSS*

### `/css/Dashboard.css`

*Dashboard, round, bag, capacity, and list CSS*

### `/css/Game.css`

*Game CSS*

### `/css/Item.css`

*Magazine, cornering, and item CSS*

### `/css/Player.css`

*Player and player drag target CSS*