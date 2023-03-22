import { StyleSheet } from 'react-native';
import { IColors } from '../../../src/UIProvider/colorTheme';
import { FONTS } from '../../../src/utils/Fonts';
import { scaleFontSize, scaleHorizontal, scaleVertical, Utils } from '../../../src/utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        root: {},
        title: {
            textAlign: 'center',
            fontSize: 30
        },
        codeFieldRoot: {
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: scaleVertical(18),
        },
        cellWrapper: {
            borderRadius: 6,
            marginHorizontal: 4,
            overflow: 'hidden'
        },
        cell: {
            width: scaleHorizontal(45),
            height: scaleVertical(55),
            // marginHorizontal: scaleHorizontal(4),
            paddingTop: Utils.isIOS ? scaleVertical(14) : 0,
            textAlign: 'center',
            textAlignVertical: 'center',
            ...FONTS.E_UKRAINE_BOLD,
            color: colors.titleText,
            fontSize: scaleFontSize(22),
            backgroundColor: colors.inputBackground,
            borderRadius: 6,
        },
        indicator: {
            color: colors.inputIndicator,
            ...FONTS.E_UKRAINE_LIGHT
        }
    });
    return styles;
};