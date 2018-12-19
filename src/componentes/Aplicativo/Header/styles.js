import { StyleSheet } from 'react-native';
import cor from '../../../cores/cor';

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 10,
        paddingTop: 20,
        height: 90,
        justifyContent: 'center',
        backgroundColor: cor.primary,
        borderBottomWidth:1,
        borderColor: 'rgba( 0, 0, 0, 0.1)',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titulo: {
        color: cor.white,
        fontWeight: 'bold',
        fontSize: 18,
    },
    logo: {
        width: 40,
        height: 40,
    },
    logoeTexto: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    sanduiche: {
        width: 30,
        height: 30,
    },
    bolinhas:{
        width: 7,
        height: 30,
        marginHorizontal: 10,
    }
});

export default styles;