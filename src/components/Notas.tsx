import * as React from "react";
import { NotasContext } from "../context/notas.context";
import { INotas, NotasContextType } from "../@types/notas.d";

import { FaTrashCan } from "react-icons/fa6";
import { FaRotate } from "react-icons/fa6";

const Notas = () => {
  
  const {
    editandoNota,
    deletarNota,
    notas,
    notasFiltradas,
    setNotasFiltradas,
  } = React.useContext(NotasContext) as NotasContextType;

  const filtrarNotas = (prioridade: string) => {
    console.log(prioridade);
    setNotasFiltradas(
      notas.filter((nota: INotas) => {
        if (prioridade === "") {
          return notas;
        } else {
          return nota.prioridade === prioridade;
        }
      })
    );
  };

  return (
    <div>
      <div className="circulos">
        <div className="circle todas" title="Mostrar todas as notas" onClick={() => filtrarNotas("")}></div>
        <div title="Mostar somente notas com prioridade baixa"
          className="circle baixa"
          onClick={() => filtrarNotas("baixa")}
        ></div>
        <div title="Mostar somente notas com prioridade media"
          className="circle media"
          onClick={() => filtrarNotas("media")}
        ></div>
        <div 
        title="Mostar somente notas com prioridade alta"
        className="circle alta" onClick={() => filtrarNotas("alta")}></div>
      </div>

      <ul className="note">
        {notasFiltradas.map((nota: INotas) => (
          <li key={nota.id} className={nota.prioridade} data-testid={`nota-id-${nota.id}`} >
            <h2>{nota.titulo}</h2>
            <p>{nota.conteudo}</p>

            <p style={{ paddingTop: "50px", fontSize: "0.8rem" }}>
              {nota.data.toLocaleDateString()} -- {nota.prioridade}
            </p>
            <button title="Remover nota"  onClick={() => deletarNota(nota.id)} className="delete">
              <FaTrashCan className="icones" />
            </button>
            <button title="Atualizar nota" onClick={() => editandoNota(nota.id)} className="atualiza">
              <FaRotate className="icones" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notas;
