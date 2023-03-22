import React, { FC } from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IProps {
    width?: number;
    height?: number;
    color?: string;
    position?: 'LEFT' | 'RIGHT' | 'UP' | 'DOWN';
}

const TRANSFORM_DEGREE = {
    RIGHT: '0deg',
    DOWN: '90deg',
    LEFT: '180deg',
    UP: '270deg',
}

export const ArrowIcon: FC<IProps> = ({ width, height, color, position = 'LEFT' }) => (
    <View style={{ transform: [{ rotate: TRANSFORM_DEGREE[position] }] }}>
        <Svg
            width={width || 30}
            height={height || 30}
            fill="none"
            viewBox='0 0 30 30'
        >
            <Path
                d="M5 15h20m0 0-7.5-7.5M25 15l-7.5 7.5"
                stroke={color || "#FFFFFF"}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    </View>
);
