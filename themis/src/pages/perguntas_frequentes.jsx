//import logo from './logo.svg';
import React from 'react';

function perguntas_frequentes() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="themis.png"/>
        <p>
          Perguntas Frequentes<br></br>
        </p>
        <div class="boxed">
            <b>Advogado Digital</b><br></br>
            A expansão da cultura digital fez surgir um novo ramo do Direito, que trata as atividades que acontecem na internet.
        </div>
        <br></br>
        <div class="boxed">
            <b>Advogado Trabalhista</b><br></br>
            O advogado trabalhista é aquele que se envolve em questões que afetam as relações entre funcionários e patrões.
        </div>
        <br></br>
        <div class="boxed">
            <b>Advogado Penal</b><br></br>
            O advogado penal em casos que envolvem crimes que colocam a sociedade em risco ou infringem a lei. 
        </div>
        <br></br>
        <div class="boxed">
            <b>Advogado Civil</b><br></br>
            O advogado civil é aquele que lidará com questões cotidianas.
        </div>
      </header>
      </div>
  );
}

export default perguntas_frequentes;