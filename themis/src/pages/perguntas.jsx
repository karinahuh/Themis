//import logo from './logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';
function perguntas() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="themis.png"/>
        <p>
          Perguntas<br></br>
        </p>
        <form>
            <label>
            <b>Escreva sua pergunta:</b><br></br> 
              <input type="text" name="pergunta" />
            </label>
            <br></br>
            <input type="submit" value="Enviar" />
          </form>
      </header>
      </div>
  );
}

export default perguntas;