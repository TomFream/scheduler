# Interview Scheduler

React application that allows users to book and cancel interviews, combining a concise API with a WebSocket server to build a realtime experience.

## Final Product

!["Scheduler Homepage"](https://github.com/TomFream/scheduler/blob/master/public/images/Readme/homepage.png?raw=true)
!["Book new appointment"](https://github.com/TomFream/scheduler/blob/master/public/images/Readme/book-appointment.png?raw=true)
!["Delete appointment"](https://github.com/TomFream/scheduler/blob/master/public/images/Readme/delete-appointment.png?raw=true)

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```
- Runs server on localhost:3000

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
- Runs storybook on localhost:9009 

## Technical Specifications
- React
- Webpack, Babel
- Axios
- Storybook, Webpack Dev Server, Jest, Testing Library

The Scheduler client application created using Create React App. Express is the basis for the Scheduler API server application.
Both servers run concurrently; requests are proxied from the Webpack development server to the API server.

## Dependencies
- axios: ^0.21.1,
- classnames: ^2.2.6,
- normalize.css: ^8.0.1,
- react: ^16.9.0,
- react-dom: ^16.9.0,
- react-scripts: 3.0.0

## Dev Dependencies
- @babel/core: ^7.4.3,
- @storybook/addon-actions: ^5.0.10,
- @storybook/addon-backgrounds: ^5.0.10,
- @storybook/addon-links: ^5.0.10,
- @storybook/addons: ^5.0.10,
- @storybook/react: ^5.0.10,
- @testing-library/jest-dom: ^4.0.0,
- @testing-library/react: ^8.0.7,
- @testing-library/react-hooks: ^5.1.2,
- babel-loader: ^8.0.5,
- node-sass: ^4.14.0,
- prop-types: ^15.7.2,
- react-test-renderer: ^16.14- 