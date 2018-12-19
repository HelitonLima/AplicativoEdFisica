import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Exercicio = ({ exercicio: { imagem, titulo, tempo } }) => (
    <View style={styles.container}>
        <View style={styles.imagemcontainer}>
            <Image source={{ uri: imagem }} style={styles.imagem}/>
        </View>
        <View style={styles.info}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.tempo}>{tempo}</Text>
        </View>
        <View style={styles.botao}>
            <TouchableOpacity>
                <Image source={require('../../../imagens/ir.png')} style={styles.imagemBotao}/>
            </TouchableOpacity>
        </View>
    </View>
);

export default Exercicio;