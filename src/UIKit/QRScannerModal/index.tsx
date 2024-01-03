import React, { FC, useMemo } from "react";
import { Modal, SafeAreaView } from "react-native";
import QRCodeScanner from 'react-native-qrcode-scanner';
import { BarCodeReadEvent, RNCamera } from "react-native-camera";
import { useUiContext } from "../../../src/UIProvider";
import { getStyle } from "./styles";
import { useScanner } from "./presenter/useScanner";
import { Utils } from "../../../src/utils/Utils";
import { CustomScanMarker } from "./customScanMarker";
import { PermissionView } from "./permissionView";

interface IProps {
    isScannerOpen: boolean;
    onClose: () => void;
    onScan: (scanEvent: BarCodeReadEvent) => void;
};

export const QRScannerModal: FC<IProps> = ({ isScannerOpen, onClose, onScan }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { isCameraAllow, isLight, onPressLight, onGetPermission } = useScanner(isScannerOpen);

    const content = useMemo(() => {
        if (isScannerOpen) {
            if (isCameraAllow) {
                return <QRCodeScanner
                    reactivate
                    showMarker={true}
                    customMarker={<CustomScanMarker isLight={isLight} onPressLight={onPressLight} onClose={onClose} />}
                    cameraStyle={{ height: Utils.size.height }}
                    onRead={onScan}
                    flashMode={isLight ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
                />
            } else {
                return <PermissionView onGetPermission={onGetPermission} onClose={onClose} />
            };
        } else {
            return null;
        };
    }, [isCameraAllow, isLight, isScannerOpen]);

    return (
        <Modal visible={isScannerOpen} animationType='slide'>
            <SafeAreaView style={styles.container}>
                {content}
            </SafeAreaView>
        </Modal>
    );
};