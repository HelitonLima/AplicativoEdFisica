import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const Header = () => (
    <View style={styles.header}>
        <TouchableOpacity>
            <Image style={styles.sanduiche} source={require('../../../imagens/sanduiche.png')} />
        </TouchableOpacity>
        <View style={styles.logoeTexto}>
            <Image
                style={styles.logo}
                source={require('../../../imagens/logo.png')}
            />
            <Text style={styles.titulo}>Exercícios</Text>
        </View>
        <TouchableOpacity>
            <Image style={styles.bolinhas} source={require('../../../imagens/bolinhas.png')} />
        </TouchableOpacity>
    </View>
);

export default Header;