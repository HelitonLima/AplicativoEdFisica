import { StyleSheet } from 'react-native';
import cor from '../../cores/cor';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: cor.transparent,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 120,
        height: 120,
    }
});

export default styles;