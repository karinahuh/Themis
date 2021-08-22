//import logo from './logo.svg';
import React from 'react';

function Chat() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="themis.png"/>
        <p>
          Chat com (nome) <br></br>
          Escreva sua mensagem aqui <br></br>
          <input type="text"></input><br></br>
          <button>Enviar mensagem</button><br></br>
        </p>
      </header>
      </div>
  );
}

export default Chat;