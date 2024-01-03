import React, { FC, ReactNode, useMemo } from 'react';
import { Text, View, TouchableOpacity, ViewStyle } from 'react-native';
import { useUiContext } from '../../../../src/UIProvider';
import { getStyle } from './styles';

interface IProps {
    value: string;
    disabled?: boolean;
    icon?: ReactNode;
    buttonContainerStyles?: ViewStyle;
    buttonStyles?: ViewStyle;
    buttonTextStyles?: ViewStyle;
    onPress: (number: string) => void;
    onLongPress?: () => void;
};

export const NumericButton: FC<IProps> = ({ value = '', disabled, icon, buttonContainerStyles, buttonStyles, buttonTextStyles, onLongPress, onPress, }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const handleOnPress = (): void => {
        onPress(value);
    };

    return (
        <View style={[styles.container, buttonContainerStyles]}>
            <TouchableOpacity
                onPress={handleOnPress}
                onLongPress={onLongPress}
                style={[styles.button, buttonStyles, value === 'delete' || value === '.' ? { backgroundColor: 'transparent' } : null]}
                disabled={disabled}
            >
                {icon ? icon : <Text style={[styles.text, buttonTextStyles]}>{value.toUpperCase()}</Text>}
            </TouchableOpacity>
        </View>
    )
};
