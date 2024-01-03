import { StyleSheet } from 'react-native';
import { IColors } from '../../../src/UIProvider/colorTheme';

export const getStyle = (colors: IColors) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background
        }
    });
}
