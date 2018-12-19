import styles from './styles';
import React, { Component } from 'react';
import cor from '../../cores/cor';
import {
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Text,
    ImageBackground,
    ScrollView,
    Alert,
    KeyboardAvoidingView,
} from 'react-native';

export default class Login extends Component {
    static navigationOptions = {
        title: 'Login',
    };
    constructor(props) {
        super(props);
        this.state = {
            nomeUsuario: '',
            senhaUsuario: '',
        };
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground source={require('../../imagens/bgWhite.png')} style={{ flex: 1 }}>
                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <View style={styles.flechaContainer}>
                                <TouchableOpacity
                                    onPress={() => navigate('Home')}
                                    hitSlop={{ bottom: 20, right: 20 }}
                                >
                                    <Image
                                        style={styles.flecha}
                                        source={require('../../imagens/flecha.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <ScrollView>
                            <View style={styles.meio}>
                                <View style={styles.containerMenorLogin}>

                                    <View style={styles.containerLogo}>
                                        <Image
                                            style={styles.logo}
                                            source={require('../../imagens/logo2.png')}
                                        />
                                    </View>
                                    <View style={styles.imagemContainer}>
                                        <Image
                                            style={styles.icone}
                                            source={require('../../imagens/username.png')}
                                        />
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Nome"
                                            placeholderTextColor={cor.primary}
                                            autoCorrect={false}
                                            underlineColorAndroid="rgba(0,0,0,0)"
                                            onChangeText={nomeUsuario => this.setState({ nomeUsuario })}
                                        />
                                    </View>

                                    <View style={styles.imagemContainer}>
                                        <Image
                                            style={styles.icone}
                                            source={require('../../imagens/lock.png')}
                                        />
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Senha"
                                            placeholderTextColor={cor.primary}
                                            autoCorrect={false}
                                            secureTextEntry
                                            underlineColorAndroid="rgba(0,0,0,0)"
                                            onChangeText={senhaUsuario =>
                                                this.setState({ senhaUsuario })}
                                        />
                                    </View>

                                    <TouchableOpacity
                                        style={styles.botaoLogin}
                                        onPress={this.resposta}
                                    >

                                        <Text style={styles.tituloLogin}> ENTRAR </Text>

                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        );
    }
    resposta = () => {
        const { nomeUsuario } = this.state;
        const { senhaUsuario } = this.state;
        if (nomeUsuario == '') {
            Alert.alert('Digite um nome');
        } else if (senhaUsuario == '') {
            Alert.alert('Digite uma senha');
        } else {
            fetch('https://hlv.000webhostapp.com/login.php', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    nome: nomeUsuario,
                    senha: senhaUsuario,
                }),
            })
                .then(response => response.json())
                .then(responseJson => {
                    if (responseJson === 'Dados Corretos') {
                        this.props.navigation.navigate('Selecao');

                    } else {
                        Alert.alert('Nome ou senha inválidos. Tente novamente');
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        }
    };
}