import React, { FC, useMemo } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useUiContext } from '../../../../src/UIProvider';
import { ArrowIcon } from '../ArrowIcon';
import { FlashLightIcon } from '../FlashLightIcon';
import { ScannerBorderRect } from '../ScannerBorderRect';
import { getStyle } from './styles';

interface IProps {
    isLight: boolean;
    onClose: () => void;
    onPressLight: () => void;
}

export const CustomScanMarker: FC<IProps> = ({ isLight, onClose, onPressLight }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <View style={styles.topContentContainer}>
                <TouchableOpacity onPress={onClose}>
                    <ArrowIcon position='LEFT' />
                </TouchableOpacity>
            </View>
            <View style={styles.squareMarkerWrapper}>
                <View style={styles.squareMarkerHorizontalSide} />
                <View style={styles.squareMarker}>
                    <View style={[styles.rectangleWrapper, styles.rectangleWrapperMod1]}>
                        <ScannerBorderRect color={colors.titleText} position='TOP_LEFT' />
                    </View>
                    <View style={[styles.rectangleWrapper, styles.rectangleWrapperMod2]}>
                        <ScannerBorderRect color={colors.titleText} position='TOP_RIGHT' />
                    </View>
                    <View style={[styles.rectangleWrapper, styles.rectangleWrapperMod3]}>
                        <ScannerBorderRect color={colors.titleText} position='BOTTOM_LEFT' />
                    </View>
                    <View style={[styles.rectangleWrapper, styles.rectangleWrapperMod4]}>
                        <ScannerBorderRect color={colors.titleText} position='BOTTOM_RIGHT' />
                    </View>
                </View>
                <View style={styles.squareMarkerHorizontalSide} />
            </View>
            <View style={styles.bottomContentContainer}>
                <View style={styles.buttonsWrapper}>
                    <TouchableOpacity onPress={onPressLight}>
                        <FlashLightIcon
                            color={isLight ? colors.buttonText : ''}
                            backgroundColor={isLight ? colors.titleText : ''}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
};
