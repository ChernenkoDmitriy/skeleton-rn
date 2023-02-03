import React, { FC, useCallback, useMemo } from 'react';
import { FlatList, View, Text, Image } from 'react-native';
import { getStyle } from './styles';
import ReactNativeModal from 'react-native-modal';
import { observer } from 'mobx-react';
import { useUiContext } from '../../UIProvider';
import { useGalleryPhotos } from './presenters/useGalleryPhotos';
import { PhotoIdentifier } from '@react-native-camera-roll/camera-roll';
import { Utils } from '../../utils/Utils';
import FastImage from 'react-native-fast-image';

const SIZE = Utils.size.width / 3;

interface IProps {
    visible: boolean;
    onClose?: () => void;
};

export const CustomGallery: FC<IProps> = observer(({ visible, onClose }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { photos, onEndReached } = useGalleryPhotos();

    const renderItem = useCallback(({ item }: { item: PhotoIdentifier }) => {
        return <FastImage source={{ uri: item.node.image.uri }} style={{ width: SIZE, height: SIZE }} />
    }, []);

    const keyExtractor = useCallback((item: PhotoIdentifier) => item.node.image.uri, []);

    return (
        <ReactNativeModal isVisible={visible} onBackdropPress={onClose} style={styles.container}>
            <View style={styles.modalContainer} >
                <FlatList
                    numColumns={3}
                    style={{ flex: 1 }}
                    data={photos}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    onEndReached={onEndReached}
                />
            </View>
        </ReactNativeModal>
    )
});