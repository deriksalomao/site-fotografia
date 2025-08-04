import React from 'react';
import logo from './logo.svg';
import './App.css';
import Produto from './components/Produto';
import Formulario from './components/Formulario';

function App() {
  return (
    <div className ="App">
      <Produto />
      <Formulario />
    </div>
  );
}

export default App; 
