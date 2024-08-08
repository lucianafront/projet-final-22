import { useState, useEffect, createContext } from "react";
import { INotas, NotasContextType } from "../@types/notas.d";

export const NotasContext = createContext<NotasContextType | null>(null);

const NotasProvider = ({children}: {children: React.ReactNode}) => {
  const [notas, setNotas] = useState<INotas[]>([
    {
      id: 1,
      titulo: "Nota 1",
      conteudo: "Conteudo 1",
      data: new Date('2024-06-03T18:13:26Z'),
      prioridade: "baixa",
    },
    {
      id: 2,
      titulo: "Nota 2",
      conteudo: "Conteudo 2",
      data: new Date('2024-06-01T18:13:26Z'),
      prioridade: "media",
    },
    {
      id: 3,
      titulo: "Nota 3",
      conteudo: "Conteudo 3",
      data: new Date('2024-06-02T18:13:26Z'),
      prioridade: "alta",
    },
  ]);
  
  const [nota, setNota] = useState<INotas>({
    id: notas.length + 1,
    titulo: "",
    conteudo: "",
    data: new Date(),
    prioridade: "baixa",
  });


  const[notasFiltradas, setNotasFiltradas] = useState<INotas[]>([]);



  useEffect(() => {
    const notasOrdenadasPorData = notas.sort((a: INotas, b: INotas) => {
      return new Date(b.data).getTime() - new Date(a.data).getTime();
    });
    setNotas(notasOrdenadasPorData);
    setNotasFiltradas(notasOrdenadasPorData);

  }, [notas]);


  const salvarNota = (todo: INotas) => {
    console.log(todo);
    
    const novaNota: INotas = {
      id: notas.length + 1,
      titulo: todo.titulo,
      conteudo: todo.conteudo,
      data: new Date(),
      prioridade: todo.prioridade,
    };
    setNotas([...notas, novaNota]);
    setNota({
      id: notas.length + 1,
      titulo: "",
      conteudo: "",
      data: new Date(),
      prioridade: "baixa",
    });
  };

  const editandoNota = (id: number) => {
    notas.filter((nota: INotas) => {
      if (nota.id === id) {
        setNota(nota);
      }
    });
  };

  const criandoNota = (nota: INotas) => {
    setNota(nota);
  };

  const atualizarNota = (id: number, notaAtualizada: INotas) => {
    const n = notas.find((nota: INotas) => nota.id === id);
    const notasDsatualizadas = notas.filter((nota: INotas) => nota.id !== id);
    setNotas(notasDsatualizadas);

    if (n) {
      n.titulo = notaAtualizada.titulo;
      n.conteudo = notaAtualizada.conteudo;
      n.prioridade = notaAtualizada.prioridade;

      setNotas([...notasDsatualizadas, n]);
    }

    setNota({
      id: notas.length + 1,
      titulo: "",
      conteudo: "",
      data: new Date(),
      prioridade: "baixa",
    });
  };

  const deletarNota = (id: number) => {
    setNotas(notas.filter((nota: INotas) => nota.id !== id));
  };

  return (
    <NotasContext.Provider
      value={{
        nota,
        notas,
        criandoNota,
        salvarNota,
        editandoNota,
        atualizarNota,
        deletarNota,
        notasFiltradas, 
        setNotasFiltradas
      }}
    >
      {children}
    </NotasContext.Provider>
  );
};

export default NotasProvider;
