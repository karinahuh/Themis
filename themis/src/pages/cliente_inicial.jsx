//import logo from './logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';
function cliente_inicial() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="themis.png"/>
        <p>
          EXPLORAR<br></br>
          <Link to="/advogadas">
            <button>Advogadas<br></br>Encontre uma advogada</button><br></br>
          </Link>
          <Link to="/perguntas"><button>Perguntas<br></br>Faça uma pergunta</button><br></br></Link>
          <Link to="/perguntas_frequentes">
            <button>FAQ<br></br>Perguntas Frequentes</button>
          </Link>
        </p>
      </header>
      </div>
  );
}

export default cliente_inicial;