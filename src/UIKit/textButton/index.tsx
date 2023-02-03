import React, { FC, useMemo } from 'react';
import { Pressable, Text, } from 'react-native';
import { useUiContext } from '../../UIProvider';
import { getStyle } from './styles';

interface Props {
    onPress: () => void;
    text: string;
    textStyles?: object;
    containerStyle?: object;
}

export const TextButton: FC<Props> = ({ text, onPress, textStyles = {}, containerStyle = {} }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <Pressable
            style={({ pressed }) => [styles.container, containerStyle, { opacity: pressed ? 0.7 : 1 }]}
            onPress={onPress}
        >
            <Text style={[styles.textButton, textStyles]}>{text}</Text>
        </Pressable>
    )
}
