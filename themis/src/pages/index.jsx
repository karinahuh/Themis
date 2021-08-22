//import logo from './logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';

function index() {
  return (
    <div className="App">
      <header className="App-header">
        {/*
        <img src="themis.png"/>
        <p>
          Assistência Jurídica para Mulheres.<br></br>
          ENCONTRE ADVOGADAS • TIRE DÚVIDAS<br></br>

          <button>Começar</button><br></br>
          <button>Sobre Nós</button>
        </p>
        */}
        <LandingPage
          image22="themis.png"
          spanText={
            <>
              Assistência Jurídica para 
              <br />
            </>
          }
          spanText2={ <> Mulheres. </>}
          text1 = "Encontre Advogadas - Tire Dúvidas"
          text=""
          comear="Começar"
          sobreNs ="Sobre Nós"
        />

      </header>
      </div>
         
  );
}

export default index;

function LandingPage(props) {
  const { image22, spanText, spanText2, text1, text, comear, sobreNs } = props;

  return (
    <div className="container-center-horizontal">
      <div className="landing-pagescreen">
        <div className="flex-row">
          <img className="image-22" src={image22} />
          <MenuHamburger />
        </div>
        <h1 className="o-n-e-a-p-p-l-evalign-text-middleroboto-thin-black-38px">
          <span>
            <span className="roboto-thin-black-38px">{spanText}</span>
            <span className="span1roboto-thin-black-38px">{spanText2}</span>
          </span>
        </h1>
        <div className="overlap-group">
          <p className="text-1valign-text-middleroboto-medium-black-14px">{text1}</p>
          <div className="textvalign-text-middleroboto-medium-black-14px">{text}</div>
        </div>
        <div className="flex-row-1">
          <div className="group-3">
            <div className="overlap-group2">
              <div className="rectangle-3">
                <Link to="/login"><div className="comearvalign-text-middle">{comear}</div></Link>
                
              </div>
              
            </div>
          </div>
          <div className="overlap-group1">
            <div className="group-4">
              <div className="overlap-group2">
                <div className="rectangle-3-1"><div className="sobre-nsvalign-text-middle">{sobreNs}</div>
              </div>
                
              </div>
            </div>
            <img
              className="line-1"
              src="line-1.svg"
            />
          </div>
        </div>
        <div className="rectangle-40"></div>
      </div>
    </div>
  );
}


function MenuHamburger() {
  return (
    <div className="menu-hamburger">
      <img
        className="menu-hamburger-1"
        src="menu-hamburger.svg"
      />
    </div>
  );
}