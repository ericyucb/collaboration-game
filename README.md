# `collaboration-game`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and is written in Javascript. It utilizes [ReactDnD](https://react-dnd.github.io/react-dnd/about) to add the drag and drop mechanic and [Empirica](https://empirica.ly/) to handle server calls and data storage.

## Primary Scripts

In the project directory, you can run:

### `empirica`

Runs the app locally.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser, and [http://localhost:3000/admin](http://localhost:3000/admin) to navigate through the admin page.

### `rm .empirica/local/tajriba.json; empirica`

Clears the data and runs the app locally. This command is preferred for debugging.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser, and [http://localhost:3000/admin](http://localhost:3000/admin) to navigate through the admin page.


In `client/`, you can run:

### `npm run eslint`

Lints all `.js`, `.jsx`, and `.ts` files in `client/`.

### `npm run eslint-fix`

Lints and tries to fix all `.js`, `.jsx`, and `.ts` files in `client/`.