import { Cabecalho, Conteudo } from './components';

import './App.css';

const App = () =>  {
  return (
    <>
    <Cabecalho nomeUsuario="Joana" />
    <Conteudo>
      <h1>Título</h1>
      <p>Texto texto texto</p>
      </Conteudo>
    </>
  )
};

export { App } ;
