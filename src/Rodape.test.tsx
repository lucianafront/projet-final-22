import React from "react";
import { render } from "@testing-library/react";
import Rodape from "./components/Rodape";

describe("Rodape component", () => {
  test("renders Rodape component", () => {
    const { getByText } = render(<Rodape />);
    const footerElement = getByText("Ⓒ Desenvolvido por Luciana S. Felix");
    expect(footerElement).toBeInTheDocument();
  });
  
  test("matches snapshot", () => {
    const { asFragment } = render(<Rodape />);
    expect(asFragment()).toMatchSnapshot();
  });
});