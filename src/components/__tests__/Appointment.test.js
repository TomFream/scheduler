/*
  We are rendering `<Application />` down below, so we need React.createElement
*/
import React from "react";

/*
  We import our helper functions from the react-testing-library
  The render function allows us to render Components
*/
import { render } from "@testing-library/react";

/*
  We import the component that we are testing
*/
import Application from "components/Application";
import Empty from "components/Appointment/Empty";

/*
  A test that renders a React Component
*/
it("renders without crashing", () => {
  render(<Application />);
});

describe("Appointment Components", () => {
  it("Renders empty without crashing", () => {
    render(<Empty />);
  })

})