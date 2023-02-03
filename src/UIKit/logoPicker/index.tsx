import React, { FC, useMemo } from 'react';
import { TouchableOpacity, View, ViewStyle } from 'react-native';
import FastImage from 'react-native-fast-image';
import { CameraIcon } from '../../../assets/icons/CameraIcon';
import { ICropedImage } from '../../libs/imagePicker/IImagePicker/ICropedImage';
import { imagePicker } from '../../libs/imagePicker/RNImageCropPicker';
import { useUiContext } from '../../UIProvider';
import { getStyle } from './styles';

interface IProps {
    logo: string | undefined;
    onSaveLogo: (value: ICropedImage) => void;
    cropping?: boolean;
    containerStyle?: ViewStyle;
}

export const LogoPicker: FC<IProps> = ({ logo, cropping, onSaveLogo, containerStyle = {} }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onPickImage = () => {
        imagePicker.onOpenPicker({ cropping }).then(image => image && onSaveLogo(image));
    }

    return (
        <TouchableOpacity onPress={onPickImage} >
            <View style={{ ...styles.container, ...containerStyle }}>
                {logo ? <FastImage source={{ uri: logo }} style={styles.logo} resizeMode='cover' /> : <CameraIcon color={colors.card} />}
            </View>
        </TouchableOpacity>
    )

};
