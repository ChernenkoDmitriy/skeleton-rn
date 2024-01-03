import { StyleSheet } from 'react-native';
import { IColors } from '../../UIProvider/theme/IColors';

export const getStyle = (colors: IColors) => {
    return StyleSheet.create({
        container: {
            height: 50,
            width: 50,
            borderRadius: 50,
            backgroundColor: colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
        },
        logo: {
            height: 50,
            width: 50,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
        logoText: {
            fontSize: 16,
            fontFamily: 'Roboto-Medium',
            color: colors.text,
        },
    });
}
