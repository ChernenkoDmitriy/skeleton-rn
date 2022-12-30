import ImagePicker from 'react-native-image-crop-picker';
import { PERMISSIONS, check, RESULTS, openSettings, } from 'react-native-permissions';
import { ICropedImage } from './IImagePicker/ICropedImage';
import { IPickImage } from './IImagePicker/IPickImage';
import { IPickImageOptions } from './IImagePicker/IPickImageOptions';

class RNImageCropPicker implements IPickImage {
    
    private getPermission = async () => {
        PERMISSIONS.ANDROID;
        const permissionsStatus = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
        switch (permissionsStatus) {
            case RESULTS.BLOCKED:
                await openSettings();
                break;
        }
    };

    onOpenPicker = async (options: IPickImageOptions = {}) => {
        try {
            await this.getPermission();
            const result: any = await ImagePicker.openPicker({
                includeBase64: true,
                compressImageQuality: 0.4,
                forceJpg: true,
                width: 300,
                height: 400,
                ...options
             });
            return { ...result } as ICropedImage;
        } catch (error) {
            console.warn('RNImageCropPicker -> onOpenPicker: ', error);
            return null;
        }
    };

}

export const imagePicker = new RNImageCropPicker();
