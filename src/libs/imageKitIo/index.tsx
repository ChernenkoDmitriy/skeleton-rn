import ImageKit from 'imagekit-javascript';
import { ICropedImage } from '../imagePicker/IImagePicker/ICropedImage';

export interface IImage {
    AITags: null;
    fileId: string;
    filePath: string;
    fileType: string;
    height: number;
    name: string;
    size: number;
    thumbnailUrl: string;
    url: string;
    versionInfo: { id: string; name: string; };
    width: number;
}

class ImageKitIo {
    private _imageKit!: ImageKit;

    constructor() {
        this._imageKit = new ImageKit({
            urlEndpoint: 'https://ik.imagekit.io/nmaudnepr',
            publicKey: 'public_Hh7jAeazl5i4wMNTsBeboIHtg84=',
            authenticationEndpoint: 'https://smart-helper-hest.herokuapp.com/image-upload/authentication',
        });
    }

    upload = async (file: ICropedImage): Promise<IImage | null> => {
        try {
            const blocks = file.path.split('.');
            const format = blocks[blocks.length - 1];
            const response = await this._imageKit.upload({
                file: file.data,
                fileName: `${file.filename}.${format}`,
            });
            return response as any;
        } catch (error) {
            console.warn('ImageKitIo -> upload: ', error);
            return null;
        }
    };

}

export const imageKitIo = new ImageKitIo();
