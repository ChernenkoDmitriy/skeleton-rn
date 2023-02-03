import React, { FC, useMemo, memo } from 'react';
import { Text, ActivityIndicator, View, ViewStyle, TouchableOpacity } from 'react-native';
import { useUiContext } from '../../UIProvider';
import { getStyle } from './styles';

interface Props {
    containerStyle?: ViewStyle;
    title: string;
    onPress: () => void;
    disabled?: boolean;
    inProgress?: boolean;
}

export const MainButton: FC<Props> = memo(({ onPress = () => { }, title = '', disabled = false, inProgress = false, containerStyle = {} }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <TouchableOpacity
            disabled={disabled}
            style={[styles.container, containerStyle, disabled ? { opacity: 0.7 } : undefined]}
            onPress={onPress}
        >
            <Text style={styles.text}>{title?.toUpperCase()}</Text>
            {inProgress ? <View style={styles.absoluteSheet}><ActivityIndicator color={colors.primary} size='large' /></View> : null}
        </TouchableOpacity>
    );
})
