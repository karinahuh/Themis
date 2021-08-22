//import logo from './logo.svg';
import React from 'react';

function cadastro_advogada() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="themis.png"/>
        <p>
          CADASTRO<br></br>
          Advogada<br></br>

          <form>
            <label>
              Primeiro Nome: 
              <input type="text" name="primeiroNome" />
            </label>
            <br></br>
            <label>
              Último Nome: 
              <input type="text" name="ultimoNome" />
            </label>
            <br></br>
            <label>
              Data de Nascimento: 
              <input type="date" name="dataNascimento" />
            </label>
            <br></br>
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

export default cadastro_advogada;