import { StyleSheet } from 'react-native';
import { IColors } from '../../../src/UIProvider/colorTheme';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'space-around',
            alignItems: 'stretch',
            flexWrap: 'wrap',
            flexDirection: 'row',
            paddingVertical: (14)
        },
        buttonsRow: {
            flexDirection: 'row',
            justifyContent: 'center',
            paddingHorizontal: (7)
        },
        buttonContainer: {
            width: '33%',
            height: (55),
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: (3),
            paddingHorizontal: (3),
        }
    });
    return styles;
};