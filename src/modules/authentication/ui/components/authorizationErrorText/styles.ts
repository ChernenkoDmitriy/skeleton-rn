import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../UIProvider/theme';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            alignItems: 'center',
            paddingHorizontal: 30,
            marginBottom: 15,
        },
        text: {
            fontSize: 12,
            color: colors.error,
            textAlign: 'center',
        },
    });
    return styles;
}
