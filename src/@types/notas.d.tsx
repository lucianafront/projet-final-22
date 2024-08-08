export interface INotas {
    id: number;
    titulo: string;
    conteudo: string;
    data: Date;
    prioridade: string;
  }
  export type NotasContextType = {
    notas: INotas[];
    nota: INotas;
    notasFiltradas: INotas[], 
    setNotasFiltradas: (notas: INotas[]) => void;
    criandoNota: (nota: INotas) => void;
    salvarNota: (nota: INotas) => void;
    editandoNota: (id: number) => void;
    atualizarNota: (id: number, notaAtualizada:INotas) => void;
    deletarNota: (id: number) => void;
  };