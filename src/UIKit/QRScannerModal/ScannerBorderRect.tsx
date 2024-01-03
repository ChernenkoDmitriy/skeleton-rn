import React, { FC } from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { scaleVertical } from '../../src/utils/Utils';
interface IProps {
    width?: number;
    height?: number;
    color?: string;
    position?: 'TOP_LEFT' | 'TOP_RIGHT' | 'BOTTOM_RIGHT' | 'BOTTOM_LEFT';
}

const TRANSFORM_DEGREE = {
    TOP_LEFT: '0deg',
    TOP_RIGHT: '90deg',
    BOTTOM_RIGHT: '180deg',
    BOTTOM_LEFT: '270deg'
}

export const ScannerBorderRect: FC<IProps> = ({ width, height, color, position = 'TOP_LEFT' }) => (
    <View style={{ transform: [{ rotate: TRANSFORM_DEGREE[position] }] }}>
        <Svg width={scaleVertical(14)} height={scaleVertical(14)} viewBox="0 0 14 14" fill="none">
            <Path d="M1 13V2C1 1.44772 1.44772 1 2 1H13" stroke={color || "white"} stroke-width="2" stroke-linecap="round" />
        </Svg>
    </View>
);
