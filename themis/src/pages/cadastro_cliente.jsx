//import logo from './logo.svg';
import React from 'react';

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
            <input type="submit" value="Cadastrar" />
          </form>
        </p>
      </header>
      </div>
  );
}

export default cadastro_cliente;