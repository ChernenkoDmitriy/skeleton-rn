import React, { FC, memo, useCallback, useMemo } from 'react';
import { TouchableOpacity, ViewStyle, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { ICropedImage } from '../../libs/imagePicker/IImagePicker/ICropedImage';
import { imagePicker } from '../../libs/imagePicker/RNImageCropPicker';
import { useUiContext } from '../../UIProvider';
import { getStyle } from './styles';
import { CameraIcon } from '../../assets/icons/CameraIcon';

interface IProps {
    size?: number;
    name?: string;
    logo: string | null | undefined;
    onSaveLogo?: (value: ICropedImage) => void;
    cropping?: boolean;
    containerStyle?: ViewStyle;
}

export const LogoPicker: FC<IProps> = memo(({ name, logo, cropping, onSaveLogo, size = 48, containerStyle = {} }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onPickImage = useCallback(() => {
        imagePicker.onOpenPicker({ cropping }).then(image => image && onSaveLogo?.(image as any));
    }, []);

    return (
        <TouchableOpacity
            onPress={onPickImage}
            disabled={!onSaveLogo}
            style={[styles.container, containerStyle, size ? { width: size, height: size } : undefined]} >
            {logo
                ? <FastImage
                    source={{ uri: logo, priority: FastImage.priority.high, }}
                    resizeMode={'cover'}
                    style={[styles.logo, size ? { width: size, height: size } : undefined]} />
                :
                name
                    ? <Text style={[styles.logoText, { fontSize: size / 2 }]}>{name?.[0]}{name?.[1]}</Text>
                    : <CameraIcon width={size} height={size} color={colors.card} />}
        </TouchableOpacity>
    )

});
