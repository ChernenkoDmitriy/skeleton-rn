import React, { FC } from "react";
import Svg, { Path, Circle, Rect } from "react-native-svg";
import { scaleVertical } from "../../src/utils/Utils";

interface IProps {
    width?: number,
    height?: number,
    color?: string,
    backgroundColor?: string,
}

export const FlashLightIcon: FC<IProps> = ({ backgroundColor, width, height, color }) => (
    <Svg
        width={scaleVertical(width || 56)}
        height={scaleVertical(height || 56)}
        fill="none"
        viewBox="0 0 56 56"
    >
        <Circle cx={28} cy={28} r={28} fill={backgroundColor || "#37383D"} />
        <Path
            d="M30.662 39.191c-.4.4-.93.62-1.491.62h-2.225a2.113 2.113 0 0 1-2.11-2.11V24.219h6.444V37.7c0 .562-.22 1.09-.618 1.49Zm-4.821-13.97v12.48c0 .61.496 1.105 1.105 1.105h2.225c.586 0 1.105-.518 1.105-1.105V25.222H25.84Z"
            fill={color || "#fff"}
        />
        <Path
            d="M31.05 25.222h-5.982l-2.828-4.308v-4.609h11.637v4.609l-2.828 4.308Zm-5.44-1.004h4.897l2.365-3.604V17.31h-9.627v3.303l2.365 3.605Z"
            fill={color || "#fff"}
        />
        <Path
            d="M33.876 19.999H22.241v-3.694h11.636V20Zm-10.631-1.005h9.627V17.31h-9.627v1.684Z"
            fill={color || "#fff"}
        />
        <Rect x={27.5} y={28} width={1} height={3} rx={0.5} fill={color || "#fff"} />
    </Svg>
);
