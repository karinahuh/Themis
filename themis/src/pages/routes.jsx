import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import index from '.';
import Cadastro from './cadastro'
import CadastroAdvogada from './cadastro_advogada'
import CadastroCliente from './cadastro_cliente'
import Login from './login'
import AdvogadaInicial from './Advogada_Inicial'
import respostas from './respostas';
import Chat from './Chat';
import ClienteIncial from './cliente_inicial';
import TermosJuridicos from './termos_juridicos';
import Advogadas from './advogadas';
import Perguntas from './perguntas';

function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={index} />
            <Route path="/login" exact component={Login} />
            <Route path="/cadastro" exact component={Cadastro} />
            <Route path="/cadastro_advogada" exact component={CadastroAdvogada} />
            <Route path="/cadastro_cliente" exact component={CadastroCliente} />
            <Route path="/Advogada_Inicial" exact component={AdvogadaInicial} />
            <Route path="/respostas" exact component={respostas} />
            <Route path="/Chat" exact component={Chat} />
            <Route path="/cliente_inicial" exact component={ClienteIncial} />
            <Route path="/termos_juridicos" exact component={TermosJuridicos} />
            <Route path="/advogadas" exact component={Advogadas} />
            <Route path="/perguntas" exact component={Perguntas} />
        </BrowserRouter>
    );
}

export default Routes;