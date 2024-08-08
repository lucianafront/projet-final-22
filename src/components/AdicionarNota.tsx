import * as React from "react";
import { NotasContext } from "../context/notas.context";
import { NotasContextType } from "../@types/notas.d";

import { FaPlus } from "react-icons/fa6";

const AdicionarNota = () => {
  const { nota, criandoNota, atualizarNota, salvarNota } = React.useContext(
    NotasContext
  ) as NotasContextType;

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    criandoNota({
      ...nota,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nota.id !== 0) {
      atualizarNota(nota.id, nota);
    } else {
      salvarNota(nota);
    }
  };

  return (

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            required
            name="titulo"
            placeholder="Titulo"
            value={nota.titulo}
            onChange={handleInputChange}
          />

          <textarea
            name="conteudo"
            rows={5}
            required
            placeholder="Conteudo"
            value={nota.conteudo}
            onChange={handleInputChange}
          ></textarea>
            <label>Prioridade 

   
          <select id="prioridade"
            name="prioridade"
            value={nota.prioridade}
            onChange={handleInputChange}
            >
            <option value="baixa">Baixa</option>
            <option value="media">Media</option>
            <option value="alta">Alta</option>
          </select>
            </label>
          <button title="Adicionar nota" type="submit">
            <FaPlus />
          </button>
        </form>

  );
};

export default AdicionarNota;
