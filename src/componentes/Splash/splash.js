import React, { Component } from 'react';
import styles from './styles';

import {
    View,
    ImageBackground,
    Image
} from 'react-native';

export default class Splash extends Component {
    render() {
        return (
            <ImageBackground source={require('../../imagens/bgRed.png')} style={{flex:1}}>
                <View style={styles.container}>
                    <Image
                        style={styles.logo}
                        source={require('../../imagens/logoTextoWhite.png')}
                    />
                </View>
            </ImageBackground>
        );
    }
};