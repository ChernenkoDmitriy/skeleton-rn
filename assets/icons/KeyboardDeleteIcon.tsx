import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

interface IProps {
    width?: number;
    height?: number;
    color?: string;
}

export const KeyboardDeleteIcon: FC<IProps> = ({ width, height, color }) => (
    <Svg
        viewBox='0 0 32 32'
        width={width || 32}
        height={height || 32}
        fill="none"
    >
        <Path
            d="M15.214 13.525a.75.75 0 1 1 1.061-1.06l2.475 2.474 2.475-2.475a.75.75 0 1 1 1.06 1.061L19.811 16l2.474 2.475a.75.75 0 1 1-1.06 1.06l-2.475-2.474-2.475 2.474a.75.75 0 1 1-1.06-1.06L17.688 16l-2.475-2.475Z"
            fill={color || "#fff"}
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.121 8.379 4.5 16l7.621 7.621a3 3 0 0 0 2.122.879H24.5a3 3 0 0 0 3-3v-11a3 3 0 0 0-3-3H14.243a3 3 0 0 0-2.122.879ZM24.5 23.2H14.243a1.7 1.7 0 0 1-1.203-.498L6.34 16l6.701-6.702a1.7 1.7 0 0 1 1.203-.498H24.5a1.7 1.7 0 0 1 1.7 1.7v11a1.7 1.7 0 0 1-1.7 1.7Z"
            fill={color || "#fff"}
        />
    </Svg>
);
