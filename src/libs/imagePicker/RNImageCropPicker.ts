import ImagePicker, { ImageOrVideo, Options } from 'react-native-image-crop-picker';
import { PERMISSIONS, check, RESULTS, openSettings, } from 'react-native-permissions';

class RNImageCropPicker {

    private getCameraPermission = async () => {
        const permissionsStatus = await check(PERMISSIONS.IOS.CAMERA);
        switch (permissionsStatus) {
            case RESULTS.BLOCKED:
                await openSettings();
                break;
        };
    };

    private getGalleryPermission = async () => {
        const permissionsStatus = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
        switch (permissionsStatus) {
            case RESULTS.BLOCKED:
                await openSettings();
                break;
        };
    };

    onOpenPicker = async (options: Options = {}) => {
        try {
            await this.getGalleryPermission();
            const result: any = await ImagePicker.openPicker({
                includeBase64: true,
                compressImageQuality: 0.4,
                forceJpg: true,
                cropping: true,
                width: 800,
                height: 800,
                ...options
            });
            return { ...result } as ImageOrVideo;
        } catch (error) {
            console.warn('RNImageCropPicker -> onOpenPicker: ', error);
            return null;
        }
    };

    onOpenCamera = async (options: Options = {}) => {
        try {
            await this.getCameraPermission();
            const result: any = await ImagePicker.openCamera({
                width: 600,
                height: 800,
                cropping: true,
                includeBase64: true,
                compressImageQuality: 0.4,
                forceJpg: true,
                ...options
            });
            return { ...result } as ImageOrVideo;
        } catch (error) {
            console.warn('RNImageCropPicker -> onOpenCamera: ', error);
            return null;
        }
    };

}

export const imagePicker = new RNImageCropPicker();
