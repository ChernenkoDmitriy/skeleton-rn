import React, { FC } from 'react';
import Svg, { Path, G, Defs } from "react-native-svg"

interface IProps {
    width?: number;
    height?: number;
}

export const RARIcon: FC<IProps> = ({ width, height }) => (
    <Svg width={width || '24'} height={height || '24'} fill="none" viewBox="0 0 24 24"  >
        <Path
            d="M4.897 2.102c-.447 0-.87.422-.87.87v18.26c0 .422.448.87.87.87H18.81c.422 0 .87-.448.87-.87V7.754l-5.653-5.652h-9.13Z"
            fill="#E236C6"
        />
        <G filter="url(#a)">
            <Path
                d="m13.98 2.238 5.653 5.652H14.85c-.422 0-.87-.447-.87-.87V2.239Z"
                fill="#000"
                fillOpacity={0.392}
            />
        </G>
        <Path
            d="m14.027 2.102 5.653 5.652h-4.783c-.422 0-.87-.447-.87-.87V2.102Z"
            fill="#FE45E0"
        />
        <Path
            d="M7.086 11.002c.453 0 .826.056 1.12.168.294.107.513.273.658.497.145.22.217.497.217.833a1.3 1.3 0 0 1-.476 1.036 2.02 2.02 0 0 1-.455.287L9.62 16H8.444l-1.19-1.918h-.567V16H5.63v-4.998h1.456Zm-.077.868h-.322v1.351h.343c.233 0 .422-.026.567-.077a.59.59 0 0 0 .315-.231.726.726 0 0 0 .098-.385.588.588 0 0 0-.112-.378.58.58 0 0 0-.329-.21 1.862 1.862 0 0 0-.56-.07ZM13.11 16l-.364-1.19h-1.82L10.562 16h-1.14l1.763-5.019h1.295L14.251 16h-1.14Zm-.98-3.241-.09-.301a36.853 36.853 0 0 1-.113-.371 8.085 8.085 0 0 1-.09-.329c-.024.093-.057.21-.099.35a21.68 21.68 0 0 1-.112.392 3.584 3.584 0 0 1-.077.259l-.357 1.162h1.302l-.364-1.162Zm4.01-1.757c.453 0 .826.056 1.12.168.294.107.513.273.658.497.145.22.217.497.217.833a1.3 1.3 0 0 1-.476 1.036 2.02 2.02 0 0 1-.455.287L18.674 16h-1.176l-1.19-1.918h-.567V16h-1.057v-4.998h1.456Zm-.077.868h-.322v1.351h.343c.233 0 .422-.026.567-.077a.59.59 0 0 0 .315-.231.727.727 0 0 0 .098-.385.588.588 0 0 0-.112-.378.58.58 0 0 0-.329-.21 1.862 1.862 0 0 0-.56-.07Z"
            fill="#FEFEFF"
        />
        <Defs></Defs>
    </Svg>
);
