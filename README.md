# Cart 🛒

> PROD [Live] : https://react-redux-cart-prod.netlify.app/

#### Cart consists of a straightforward user interface where there is a

- List of some of the items added to the cart, **Navbar** with the title _ReduxGear_ , **cart amount** i.e. total number of items added by default, and a **`CLEAR CART`** button to clear all items in the cart which on click shows `YOUR BAG is currently empty`.
- Each cartItem has the `image` , `title` , `price` , `amount`, along with a few buttons i.e. **`remove`** to remove the item from the cart, 🔼 to increase , 🔽 to decrease the amount of that particular item and when the item amount gets less than 1, it is automatically removed from the cart.
- For every change in cartItem, the **total price** and **cart amount** gets adjusted.
- Data is handled by **`cartItems.js`**, and styles are handled by **`index.css`**
- To run the project locally, clone the repo, `npm install` to install the dependencies, and `npm start` to start up the development server on default port 3000.

#### Languages

HTML, CSS, JavaScript, ECMAScript, React ~ ContextAPI - Hooks ~ useEffect, Redux ~ connect, mapStateToProps, mapDispatchToProps

#### Packages

[React Icons](https://www.npmjs.com/package/react-icons)

#### Deployment / Hosting

Netlify

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

---

_Note: I have developed this project as part of React and Projects Course taught by John Smilga._
