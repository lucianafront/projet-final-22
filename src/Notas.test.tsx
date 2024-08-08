import React from "react";
import { render, screen } from "@testing-library/react";
import Notas from "./components/Notas";
import NotasProvider from "./context/notas.context";

describe("Notas component", () => {
  test("renders Notas component", () => {

    render(<Notas />,{ wrapper: NotasProvider})
 
    const notasElement1 = screen.getByTestId("nota-id-1");
    expect(notasElement1).toBeInTheDocument();


    const notasElement2 = screen.getByTestId("nota-id-2");
    expect(notasElement2).toBeInTheDocument();


    const notasElement3 = screen.getByTestId("nota-id-3");
    expect(notasElement3).toBeInTheDocument();
  });

  

  test("matches snapshot", () => {
      const { asFragment } =  render(<Notas />,{ wrapper: NotasProvider})
  

    expect(asFragment()).toMatchSnapshot();
  });
});
