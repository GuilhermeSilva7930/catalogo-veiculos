import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Pesquisa from './components/pesquisa';

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Pesquisa></Pesquisa>
    </React.Fragment>
  );
}

export default App;
