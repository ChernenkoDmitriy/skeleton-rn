import { StyleSheet } from 'react-native';
import { IColors } from '../../UIProvider/theme/IColors';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 30,
        },
        title: {
            textAlign: 'center',
            color: colors.title,
            fontSize: 18,
            lineHeight: 24,
            fontFamily: 'Roboto-Light'
        },
    });
    return styles;
};