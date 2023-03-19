import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/UIProvider/colorTheme';

export const getStyle = (colors: IColors) => {
    return StyleSheet.create({
        container: {
            width: '33%',
            height: (55),
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: (3),
            paddingHorizontal: (3)
        },
        button: {
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 6,
            backgroundColor: '#646464'
        },
        text: {
            fontSize: (26),
            color: colors.titleText,
        }
    });
}
