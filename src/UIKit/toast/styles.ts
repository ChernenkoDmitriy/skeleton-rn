import { StyleSheet } from 'react-native';
import { IColors } from '../../UIProvider/theme/IColors';

export const getStyle = (colors: IColors, type: string) => {
    const styles = StyleSheet.create({
        container: {
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderRadius: 16,
            width: '80%',
            backgroundColor: type === 'error' ? colors.error + 'E6' : colors.success + 'E6',
        },
        title: {
            fontFamily: 'Roboto-Regular',
            textAlign: 'center',
            color: colors.buttonText,
            fontSize: 16,
            fontWeight: '500',
        },
        text: {
            fontFamily: 'Roboto-Light',
            textAlign: 'center',
            color: colors.buttonText,
            fontSize: 14,
            fontWeight: '500',
        },
    });
    return styles;
}
