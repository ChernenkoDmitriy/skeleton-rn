import { StyleSheet } from 'react-native';
import { IColors } from '../../../../src/UIProvider/colorTheme';
import { FONTS } from '../../../../src/utils/Fonts';
import { scaleHorizontal, scaleVertical } from '../../../../src/utils/Utils';


export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            flexGrow: 1
        },
        topContentContainer: {
            alignItems: 'flex-start',
            paddingHorizontal: 14,
            paddingTop: scaleVertical(12),
            height: 200,
            backgroundColor: colors.scannerMarkerBackground
        },
        title: {
            ...FONTS.E_UKRAINE_LIGHT,
            color: colors.buttonText,
            width: scaleHorizontal(287),
            textAlign: 'center',
            marginTop: scaleVertical(40),
            fontWeight: '400'
        },
        titleBoldText: {
            ...FONTS.E_UKRAINE_LIGHT,
            color: colors.buttonText,
            marginBottom: scaleVertical(27),
            fontWeight: '700'
        },
        squareMarkerWrapper: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        },
        squareMarker: {
            position: 'relative',
            width: 295,
            height: 295,
        },
        rectangleWrapper: {
            position: 'absolute',
            zIndex: 2
        },
        rectangleWrapperMod1: {
            top: -1,
            left: -1
        },
        rectangleWrapperMod2: {
            top: -1,
            right: -1
        },
        rectangleWrapperMod3: {
            bottom: -1,
            left: -1
        },
        rectangleWrapperMod4: {
            bottom: -1,
            right: -1
        },
        squareMarkerHorizontalSide: {
            backgroundColor: colors.scannerMarkerBackground,
            width: '100%',
            height: '100%',
        },
        bottomContentContainer: {
            flexGrow: 1,
            flexShrink: 1,
            flexBasis: 'auto',
            alignItems: 'center',
            backgroundColor: colors.scannerMarkerBackground
        },
        buttonsWrapper: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
        },
    });
    return styles;
}
