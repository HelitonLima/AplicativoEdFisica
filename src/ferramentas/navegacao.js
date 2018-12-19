import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from '../componentes/Home/home';
import Login from '../componentes/Login/login';
import Cadastro from '../componentes/Cadastro/cadastro';
import Selecao from '../componentes/Aplicativo/Selecao/selecao';

const Navegacao = createStackNavigator({
    Home: { screen: Home },
    Login: { screen: Login },
    Cadastro: { screen: Cadastro },
    Selecao: { screen: Selecao },
    
},{
    headerMode: 'none',
});

export default createAppContainer(Navegacao);

