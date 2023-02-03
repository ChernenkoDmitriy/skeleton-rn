import { StyleSheet } from 'react-native';
import { IColors } from '../../UIProvider/theme/IColors';
import { scaleHorizontal } from '../../utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        modal: {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            margin: 0,
            width: '100%'
        },
        container: {
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            backgroundColor: colors.backdrop,
        },
        calendar: {
            minWidth: scaleHorizontal(300),
            minHeight: scaleHorizontal(350),
            alignItems: 'center',
            backgroundColor: colors.card,
            borderRadius: 8,
        },
    });
    return styles;
}
