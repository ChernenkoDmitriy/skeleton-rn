import { StyleSheet } from 'react-native';
import { IColors } from '../../UIProvider/theme/IColors';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            width: 40,
            height: 40,
            borderRadius: 50,
            backgroundColor: colors.shadow,
        },
        avatar: {
            width: 40,
            height: 40,
            borderRadius: 50,
        },
        logoText: {
            fontSize: 16,
            fontFamily: 'Roboto-Medium',
            color: colors.title,
        },
    });
    return styles;
}
