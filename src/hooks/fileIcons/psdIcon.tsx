import React, { FC } from 'react';
import Svg, { Path, G, Defs } from "react-native-svg"

interface IProps {
    width?: number;
    height?: number;
}

export const PSDIcon: FC<IProps> = ({ width, height }) => (
    <Svg width={width || '24'} height={height || '24'} fill="none" viewBox="0 0 24 24"  >
        <Path
            d="M4.897 2.102c-.447 0-.87.422-.87.87v18.26c0 .422.448.87.87.87H18.81c.422 0 .87-.448.87-.87V7.754l-5.653-5.652h-9.13Z"
            fill="#6768A7"
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
            fill="#8384D7"
        />
        <Path
            d="M7.226 11.002c.644 0 1.113.14 1.407.42.299.275.448.656.448 1.141 0 .22-.033.43-.098.63a1.39 1.39 0 0 1-.329.532c-.15.154-.348.275-.595.364-.247.089-.553.133-.917.133h-.455V16H5.63v-4.998h1.596Zm-.056.868h-.483v1.484h.35c.2 0 .373-.026.518-.077a.674.674 0 0 0 .336-.245.734.734 0 0 0 .119-.434c0-.247-.068-.43-.203-.546-.135-.121-.348-.182-.637-.182Zm5.803 2.744c0 .294-.073.55-.218.77-.144.22-.354.39-.63.511-.27.117-.601.175-.993.175a3.715 3.715 0 0 1-.987-.133 3.132 3.132 0 0 1-.427-.168v-.987c.238.103.482.198.735.287.256.084.51.126.763.126.172 0 .31-.023.413-.07a.477.477 0 0 0 .23-.189.491.491 0 0 0 .078-.273.439.439 0 0 0-.133-.322 1.27 1.27 0 0 0-.344-.245 9.727 9.727 0 0 0-.497-.252 7.504 7.504 0 0 1-.377-.196 2.473 2.473 0 0 1-.393-.287 1.334 1.334 0 0 1-.42-1.008c0-.299.068-.553.204-.763.14-.215.335-.378.588-.49.256-.112.557-.168.902-.168.262 0 .51.03.742.091.239.06.486.147.742.259l-.343.826a5.879 5.879 0 0 0-.616-.217 2.055 2.055 0 0 0-.56-.077.814.814 0 0 0-.335.063.51.51 0 0 0-.217.175.491.491 0 0 0-.07.266c0 .117.034.217.104.301.07.08.175.156.316.231.14.075.314.163.524.266.257.121.474.247.652.378.181.13.321.285.42.462.098.177.146.397.146.658Zm5.052-1.162c0 .56-.107 1.029-.322 1.407a2.037 2.037 0 0 1-.938.854c-.406.191-.896.287-1.47.287h-1.414v-4.998h1.568c.523 0 .975.093 1.358.28.387.187.686.462.896.826.215.36.322.807.322 1.344Zm-1.099.028c0-.369-.054-.672-.161-.91a1.063 1.063 0 0 0-.483-.525c-.21-.117-.469-.175-.777-.175h-.567v3.255h.455c.518 0 .903-.138 1.155-.413.252-.275.378-.686.378-1.232Z"
            fill="#FEFEFF"
        />
        <Defs></Defs>
    </Svg>
);
