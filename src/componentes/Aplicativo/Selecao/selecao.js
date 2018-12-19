import styles from './styles';
import React, { Component } from 'react';
import { ScrollView, View,  ImageBackground} from 'react-native';
import Header from '../Header/header';
import Exercicio from '../Exercicios/exercicios';

export default class Selecao extends Component {
    static navigationOptions = {
        title: 'Selecao',
    };

    state = {
        exercicios: [
            {
                id: 1,
                imagem: 'https://i.vimeocdn.com/portrait/13620049_120x120.jpg',
                titulo: 'Abdomem',
                tempo: '10 minutos',
            },
            {
                id: 2,
                imagem: 'https://i.vimeocdn.com/portrait/13620049_120x120.jpg',
                titulo: 'Peitoral',
                tempo: '15 minutos',
            },
            {
                id: 3,
                imagem: 'https://i.vimeocdn.com/portrait/13620049_120x120.jpg',
                titulo: 'Perna',
                tempo: '18 minutos',
            },
            {
                id: 4,
                imagem: 'https://i.vimeocdn.com/portrait/13620049_120x120.jpg',
                titulo: 'Trapezio',
                tempo: '12 minutos',
            },
        ],
    };
    render() {
        return (
            <ImageBackground source={require('../../../imagens/bgRed.png')} style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Header />
                        <ScrollView style={styles.exercicios}>
                            { this.state.exercicios.map(exercicio => <Exercicio key={exercicio.id} exercicio={exercicio} />) }
                        </ScrollView>
                </View>
            </ImageBackground>
        )
    }
}