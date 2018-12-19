import React, { Component } from 'react';
import styles from './styles';

import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground
} from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        title: 'Home',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground source={require('../../imagens/bgRed.png')} style={{ flex:1 }}>
                <View style={styles.container}>
                    <View style={styles.infoContainer}>
                        <View style={{flex: 1}}>
                            <Image
                                style={styles.logo}
                                source={require('../../imagens/logo.png')}
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.buttonLogin}
                            onPress={() => navigate('Login')}
                        >
                            <Text style={styles.tituloLogin}> ENTRAR </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.botaoCadastro}
                            onPress={() => navigate('Cadastro')}
                        >
                            <Text style={styles.tituloCadastro}> CADASTRAR-SE </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}