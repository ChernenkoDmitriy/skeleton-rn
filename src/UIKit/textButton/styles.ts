import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/colorTheme';

export const getStyle = (colors: IColors) => {
    return StyleSheet.create({
        container: {
            minWidth: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
        textButton: {
            fontSize: 18,
            lineHeight: 22,
            color: colors.accentColorDark,
        },
    });
};
