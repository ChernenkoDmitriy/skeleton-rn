import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { Linking } from "react-native";
import { check, request } from "react-native-permissions";
import { PERMISSIONS } from "react-native-permissions";
import { Utils } from "../../../../src/utils/Utils";

export const useScanner = (isScannerOpen: boolean) => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const [isLight, setIsLight] = useState(false);
    const [isCameraAllow, setIsCameraAllow] = useState(true);

    useEffect(() => {
        setIsLight(false);
        if (isScannerOpen) {
            checkCameraPermission();
        };
    }, [isScannerOpen]);

    const checkCameraPermission = async () => {
        const cameraPermission = await check(Utils.isIOS ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA);
        if (cameraPermission === 'granted') {
            setIsCameraAllow(true);
        } else {
            setIsCameraAllow(false);
        };
    };

    const onPressLight = () => {
        setIsLight(!isLight);
    };

    const onGetPermission = async () => {
        const cameraPermission = await request(Utils.isIOS ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA);
        if (cameraPermission === 'granted') {
            setIsCameraAllow(true);
        } else if (cameraPermission == 'blocked') {
            Linking.openSettings();
        } else {
            setIsCameraAllow(false);
        };
    };

    return { isCameraAllow, isLight, onPressLight, onGetPermission };
};