import React from 'react';
import './App.css';
import Catalogo from './components/catalogo';
import Navbar from './components/navbar';
import Pesquisa from './components/pesquisa';

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Pesquisa></Pesquisa>
      <Catalogo></Catalogo>
    </React.Fragment>
  );
}

export default App;
