import React, { FC } from 'react';
import Svg, { Path, G, Defs } from "react-native-svg"

interface IProps {
    width?: number;
    height?: number;
}

export const XLSIcon: FC<IProps> = ({ width, height }) => (
    <Svg width={width || '24'} height={height || '24'} fill="none" viewBox="0 0 24 24"  >
        <Path
            d="M4.897 2.102c-.447 0-.87.422-.87.87v18.26c0 .422.448.87.87.87H18.81c.422 0 .87-.448.87-.87V7.754l-5.653-5.652h-9.13Z"
            fill="#199D58"
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
            fill="#3BB575"
        />
        <Path
            d="M10.169 16H8.958l-1.162-1.89L6.634 16H5.5l1.659-2.576-1.554-2.422h1.169l1.078 1.799 1.057-1.799h1.141L8.482 13.48 10.169 16Zm.63 0v-4.998h1.057v4.123h2.03V16h-3.087Zm6.905-1.386c0 .294-.072.55-.217.77-.145.22-.355.39-.63.511-.27.117-.602.175-.994.175a3.715 3.715 0 0 1-.987-.133 3.127 3.127 0 0 1-.427-.168v-.987c.238.103.483.198.735.287.257.084.511.126.763.126.173 0 .31-.023.413-.07a.477.477 0 0 0 .231-.189.491.491 0 0 0 .077-.273.439.439 0 0 0-.133-.322 1.273 1.273 0 0 0-.343-.245 9.769 9.769 0 0 0-.497-.252 7.504 7.504 0 0 1-.378-.196 2.469 2.469 0 0 1-.392-.287 1.334 1.334 0 0 1-.42-1.008c0-.299.068-.553.203-.763.14-.215.336-.378.588-.49.257-.112.558-.168.903-.168.261 0 .509.03.742.091.238.06.485.147.742.259l-.343.826a5.879 5.879 0 0 0-.616-.217 2.055 2.055 0 0 0-.56-.077.814.814 0 0 0-.336.063.509.509 0 0 0-.217.175.491.491 0 0 0-.07.266c0 .117.035.217.105.301.07.08.175.156.315.231.14.075.315.163.525.266.257.121.474.247.651.378.182.13.322.285.42.462.098.177.147.397.147.658Z"
            fill="#fff"
        />
        <Defs></Defs>
    </Svg>
);
