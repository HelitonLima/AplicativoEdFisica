import { StyleSheet, Dimensions } from 'react-native';
import cor from '../../../cores/cor';

var width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container:{
        height: 120,
        backgroundColor: 'rgba( 0, 0, 0, 0.1)',
        width: width - 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    imagem: {
        width: 65,
        height: 65,
        borderRadius: 33,
    },
    info: {
        
    },
    tempo: {
        fontSize: 14,
        color: cor.lighter,
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 18,
        color: cor.white,
    },
    imagemContaienr:{
        padding: 15,
    },
    botao:{
        height: 40,
        width: 40,
        justifyContent: 'center',
        backgroundColor: cor.transparent,
    },
    imagemBotao:{
        height: 40,
        width: 25,
    }
});

export default styles;