import React, {act} from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import AdicionarNota from "./components/AdicionarNota";
import NotasProvider from "./context/notas.context";
import Notas from "./components/Notas";

describe("AdicionarNota component", () => {

    test("matches snapshot", () => {
    const { container } =     render(<AdicionarNota />,{ wrapper: NotasProvider})
    expect(container).toMatchSnapshot();
});
  
  
    test("renders AdicionarNota component", () => {
      render(<AdicionarNota />,{ wrapper: NotasProvider})


    const tituloInput = screen.getByPlaceholderText("Titulo");
    expect(tituloInput).toBeInTheDocument();

    const conteudoTextarea = screen.getByPlaceholderText("Conteudo");
    expect(conteudoTextarea).toBeInTheDocument();

    const prioridadeSelect = screen.getByLabelText("Prioridade");
    expect(prioridadeSelect).toBeInTheDocument();

    const adicionarButton = screen.getByTitle("Adicionar nota");
    expect(adicionarButton).toBeInTheDocument();
  });


  test("adiciona uma nova nota", () => {
    render(<AdicionarNota />,{ wrapper: NotasProvider})

    const tituloInput = screen.getByPlaceholderText("Titulo");
    fireEvent.change(tituloInput, { target: { value: "Nota 4" } });
    expect(tituloInput).toHaveValue("Nota 4");

    const conteudoTextarea = screen.getByPlaceholderText("Conteudo");
    fireEvent.change(conteudoTextarea, { target: { value: "Conteudo 4" } });
    expect(conteudoTextarea).toHaveValue("Conteudo 4");

    const prioridadeSelect = screen.getByLabelText("Prioridade");
    fireEvent.change(prioridadeSelect, { target: { value: "alta" } });
    expect(prioridadeSelect).toHaveValue("alta");

    const adicionarButton = screen.getByTitle("Adicionar nota");
    fireEvent.click(adicionarButton);

    const novo = screen.getByPlaceholderText("Titulo");
    expect(novo).toHaveValue("");
  });



});