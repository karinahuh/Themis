//import logo from './logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';

function cadastro_cliente() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="themis.png"/>
        <p>
          CADASTRO<br></br>
          Cliente<br></br>

          <form>
            <label>
              E-mail: 
              <input type="text" name="email" />
            </label>
            <br></br>
            <label>
              Senha: 
              <input type="password" name="senha" />
            </label>
            <br></br>
            <label>
              Confirmar Senha: 
              <input type="password" name="confirmarSenha" />
            </label>
            <br></br>
            <Link to ="/cliente_inicial">
              <input type="submit" value="Cadastrar" />
            </Link>
          </form>
        </p>
      </header>
      </div>
  );
}

export default cadastro_cliente;