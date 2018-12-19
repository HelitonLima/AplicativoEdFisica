import React from 'react';
import { View } from 'react-native';

import Splash from './src/componentes/Splash/splash'; 
import Navegacao from './src/ferramentas/navegacao';
import servico from './src/ferramentas/servico';

export default class App extends React.Component {
  state = {
    loaded: false
  }
  constructor(){
      super();
      servico.load(v => this.setState({loaded : true}))
  }
  render() {
    return (
      <View style={{flex: 1}}>
        {this.state.loaded ? <Navegacao /> : <Splash />}
      </View>
    );
  }
}
