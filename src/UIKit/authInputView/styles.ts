import { StyleSheet } from 'react-native';
import { IColors } from '../../UIProvider/theme/IColors';

export const getStyle = (colors: IColors) => {
    return StyleSheet.create({
        container: {
            width: '100%',
            height: 42,
            backgroundColor: colors.background,
            borderBottomWidth: 1,
            marginTop: 30,
            padding: 0,
        },
        button: {
            width: 32,
            height: 32,
            justifyContent: 'center',
            alignItems: 'center',
        }
    });
}
