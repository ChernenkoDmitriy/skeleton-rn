import { StyleSheet } from 'react-native';
import { IColors } from '../../../../UIProvider/theme/IColors';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({ 
        container: {
            flex: 1,
            justifyContent: 'space-between',
            padding: 32
        },
        appNameText: {
            fontSize: 28,
            color: colors.title,
            alignSelf: 'center',
            marginBottom: 18,
        },
        instructionText: {
            lineHeight: 26,
            fontSize: 18,
            color: colors.title,
            alignSelf: 'center',
            marginBottom: 32,
        },
        footer: {
            marginTop: 12,
        }
    });
    return styles;
}
