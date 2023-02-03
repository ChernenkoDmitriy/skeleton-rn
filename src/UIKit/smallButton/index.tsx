import React, { FC, memo, useMemo } from 'react';
import { Text, TouchableOpacity, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useUiContext } from '../../UIProvider';
import { getStyle } from './styles';

interface IProps {
    colorsArray?: string[];
    text: string;
    disabled?: boolean;
    containerStyle?: ViewStyle;
    onPress: () => void;
}

export const SmallButton: FC<IProps> = memo(({ text, disabled, onPress, containerStyle, colorsArray = ['#6C96FF', '#7BD2D6'] }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <TouchableOpacity onPress={onPress} disabled={disabled} style={[containerStyle, { opacity: disabled ? 0.7 : 1 }]}>
            <LinearGradient colors={colorsArray} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
                <Text style={styles.text} >{text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
});
