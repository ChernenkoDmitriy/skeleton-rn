import { StyleSheet } from 'react-native';
import { IColors } from '../../UIProvider/theme/IColors';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: 12,
            minWidth: 50,
        },
        text: {
            fontFamily: 'Roboto-Light',
            fontSize: 12,
            color: colors.title,
        }
    });
    return styles;
}
