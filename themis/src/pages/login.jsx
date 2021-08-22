//import logo from './logo.svg';
import React from 'react';

function login() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="themis.png"/>
        <p>
          THEMIS<br></br>
          <form>
            <label>
                Username: 
                <input type="text" />
            </label>
            <br></br>
            <label>
                Password: 
                <input type="password" />
            </label>
                <div>
                    <button type="submit">Entrar</button>
                </div>
            </form>
            <button>Esqueceu sua senha?</button><br></br>
        </p>
        <p>
            Ainda não tem uma conta?<br></br>
            <button>Criar Conta</button><br></br>
        </p>
      </header>
    </div>
  );
}

export default login;