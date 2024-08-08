import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import NotasProvider from "./context/notas.context";
import AdicionarNota from "./components/AdicionarNota";
import Notas from "./components/Notas";

import "./App.css";

function App() {
  return (
    <NotasProvider>
      <div className="App">
        <Cabecalho />
        <main>
          <AdicionarNota />
          <Notas />
        </main>
        <Rodape />
      </div>
    </NotasProvider>
  );
}

export default App;
