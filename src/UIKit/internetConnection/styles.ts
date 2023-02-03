import { StyleSheet } from 'react-native';
import { IColors } from '../../UIProvider/theme/IColors';
import { initialWindowMetrics } from 'react-native-safe-area-context';

export const getStyle = (colors: IColors) => {
    return StyleSheet.create({
        container: {
            top: initialWindowMetrics?.insets.top,
            alignSelf: 'center',
            paddingHorizontal: 24,
            paddingVertical: 12,
            width: '80%',
            backgroundColor: 'rgba(0,0,0,0.85)',
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 16,
            flexDirection: 'row',
        },
        textWrapper: {
            marginHorizontal:12,
        },
        text: {
            fontFamily: 'Roboto-Regular',
            color: colors.buttonText,
        }
    });
}
