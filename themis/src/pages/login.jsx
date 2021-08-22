//import logo from './logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';

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
                  <Link to="/Advogada_Inicial"><button type="submit">Entrar</button></Link>
                </div>
            </form>
            <button>Esqueceu sua senha?</button><br></br>
        </p>
        <p>
            Ainda não tem uma conta?<br></br>
            <Link to="/cadastro">
              <button>Criar Conta</button>
            </Link>
        </p>
      </header>
    </div>
  );
}

export default login;