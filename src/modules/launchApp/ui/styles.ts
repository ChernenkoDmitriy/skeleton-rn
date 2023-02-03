import { StyleSheet } from 'react-native';
import { IColors } from '../../../UIProvider/theme/IColors';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
            justifyContent: 'center',
            alignItems: 'center',
        },
        logo: {
            width: 200,
            height: 200,
        },
        text: {
            fontSize: 22,
            lineHeight: 26,
            fontWeight: '500',
            color: colors.title,
            alignSelf: 'center',
        },
    });
    return styles;
}
