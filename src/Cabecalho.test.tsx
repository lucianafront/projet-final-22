import React from "react";
import { render } from "@testing-library/react";
import Cabecalho from "./components/Cabecalho";

describe("Cabecalho component", () => {
  
  test("renders Cabecalho component", () => {
    const { getByAltText, getByText } = render(<Cabecalho />);
    const logoElement = getByAltText("logo");
    const headingElement = getByText("Keep");
    expect(logoElement).toBeInTheDocument();
    expect(headingElement).toBeInTheDocument();
  });
  
  test("matches snapshot", () => {
    const { asFragment } = render(<Cabecalho />);
    expect(asFragment()).toMatchSnapshot();
  });
});