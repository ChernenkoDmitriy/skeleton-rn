import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/UIProvider/colorTheme';
import { FONTS } from '../../../../src/utils/Fonts';
import { scaleFontSize, scaleHorizontal, scaleVertical } from '../../../../src/utils/Utils';


export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            flexGrow: 1,
            paddingHorizontal: scaleHorizontal(16),
        },
        topContentContainer: {
            alignItems: 'flex-start',
            paddingTop: scaleVertical(12),
            backgroundColor: colors.scannerMarkerBackground
        },
        wrapper: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: scaleVertical(60)
        },
        title: {
            ...FONTS.E_UKRAINE_LIGHT,
            fontSize: scaleFontSize(20),
            paddingHorizontal: scaleHorizontal(8),
            marginBottom: scaleVertical(80),
            color: colors.titleText,
            textAlign: 'center',
            fontWeight: '400'
        },
        button: {
            width: '100%'
        }
    });
    return styles;
}
