import { StyleSheet } from 'react-native';
import cor from '../../cores/cor';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonLogin: {
        paddingHorizontal: 15,
        backgroundColor: cor.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        height: 50,
        width: 290,
        marginBottom: 20,
    },
    tituloLogin: {
        color: cor.primary,
        textAlign: 'center',
    },
    botaoCadastro: {
        paddingHorizontal: 15,
        backgroundColor: cor.transparent,
        borderRadius: 25,
        height: 50,
        width: 290,
        borderWidth: 1,
        borderColor: cor.white,
        paddingVertical: 15,
        marginBottom: 20,
    },
    tituloCadastro: {
        color: cor.white,
        textAlign: 'center',
    },
    infoContainer: {
        marginTop: 75,
        height: 400,
        padding: 20,
        alignItems: 'center',
    },
    logo: {
        width: 120,
        height: 120,
    }
});

export default styles;