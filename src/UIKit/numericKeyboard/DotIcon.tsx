import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

interface IProps {
    width?: number;
    height?: number;
    color?: string;
}

export const DotIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg

        width={width || 24}
        height={height || 24}
        viewBox="0 0 24 24"
        fill="none"
    >
        <Path d="M12 9.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill={color || '#FFF'} />
    </Svg>
)
