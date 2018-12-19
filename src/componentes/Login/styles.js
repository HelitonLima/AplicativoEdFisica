import { StyleSheet } from 'react-native';
import cor from '../../cores/cor';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: cor.transparent,
    },
    header: {
        height: 70,
        width: 400,
        justifyContent: 'center',
    },
    flechaContainer:{
        width: 50,
        height: 50,
        justifyContent: 'center',
    },
    flecha: {
        width: 50,
        height: 50,
        marginTop: 30,
        marginLeft: 10,
    },
    meio: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerMenorLogin: {
        width: 290,
        marginTop: 30,
        marginBottom: 30,
    },
    input: {
        fontSize: 16,
        color: cor.primary,
        width: 240,
    },
    icone: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center'
    },
    imagemContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: cor.primary,
        height: 40,
        margin: 10,
    },
    containerLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        height: 120,
        width: 120,
    },
    botaoLogin: {
        backgroundColor: cor.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        height: 50,
        marginTop: 70,
    },
    tituloLogin: {
        color: cor.primary,
    }
})

export default styles;