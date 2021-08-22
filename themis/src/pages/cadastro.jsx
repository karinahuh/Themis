//import logo from './logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';
function cadastro() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="themis.png"/>
        <p>
          O que você precisa?<br></br>
          <Link to="/cadastro_cliente">
            <button>Sou Cliente</button><br></br>
          </Link>
          <Link to="/cadastro_advogada">
            <button>Sou Advogada</button><br></br>
          </Link>
          
        </p>
      </header>
      </div>
  );
}

export default cadastro;