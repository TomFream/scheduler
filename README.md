# Interview Scheduler

React application that allows users to book and cancel interviews, combining a concise API with a WebSocket server to build a realtime experience.

## Final Product

![""]()
![""]()

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
## Technical Specifications
- React
- Webpack, Babel
- Axios
- Storybook, Webpack Dev Server, Jest, Testing Library

The Scheduler client application created using Create React App. Express is the basis for the Scheduler API server application.
Both servers run concurrently; requests are proxied from the Webpack development server to the API server.

## Dependencies

- axios
- @testing-library/react-hooks
- react-test-renderer