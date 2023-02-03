import { Permission, PermissionsAndroid, Platform } from "react-native";
import { CameraRoll, PhotoIdentifier } from "@react-native-camera-roll/camera-roll";
import { useCallback, useEffect, useState } from "react";

const hasAndroidGalleryPermission = async () => {
    const permission = Platform.Version >= 33 ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
    const hasPermission = await PermissionsAndroid.check(permission as Permission);
    if (hasPermission) {
        return true;
    }
    const status = await PermissionsAndroid.request(permission as Permission);
    return status === 'granted';
}

const supportedMimeTypesByTheBackEnd = [
    'image/jpeg',
    'image/png',
    'image/heif',
    'image/heic',
    'image/heif-sequence',
    'image/heic-sequence',
];

export const useGalleryPhotos = (pageSize = 30, mimeTypeFilter = supportedMimeTypesByTheBackEnd,) => {
    const [isLoading, setIsLoading] = useState(false);
    const [offset, setOffset] = useState<string>("0");
    const [hasNextPage, setHasNextPage] = useState(true);
    const [photos, setPhotos] = useState<PhotoIdentifier[]>([]);

    useEffect(() => {
        getPhotos();
    }, []);

    const getPhotos = useCallback(async () => {
        try {
            setIsLoading(true);
            const isGranted = await hasAndroidGalleryPermission();
            if (isGranted && hasNextPage) {
                const { edges, page_info } = await CameraRoll.getPhotos({
                    first: pageSize,
                    after: offset,
                    assetType: 'Photos',
                    mimeTypes: mimeTypeFilter,
                });
                setPhotos(prev => [...prev, ...edges]);
                setHasNextPage(page_info.has_next_page);
                setOffset(page_info.end_cursor || '0');
            }
        } catch (error) {
            console.error('useGalleryPhotos->getPhotos:', error);
        } finally {
            setIsLoading(false);
        }
    }, [mimeTypeFilter, hasNextPage, offset, pageSize]);

    const onEndReached = useCallback(async () => {
        if (!isLoading) {
            await getPhotos();
        }
    }, [isLoading, getPhotos])

    return { photos, isLoading, onEndReached };
}