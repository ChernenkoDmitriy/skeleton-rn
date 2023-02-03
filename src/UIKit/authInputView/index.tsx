import React, { FC, memo, useMemo } from 'react';
import { useUiContext } from '../../UIProvider';
import { getStyle } from './styles';
import { InputOutline } from '../../libs/react-native-input-outline/src';
import { TextStyle, TouchableOpacity } from 'react-native';

interface IProps {
    value: string;
    error?: string | undefined;
    secureTextEntry?: boolean;
    placeholder?: string;
    icon?: React.ReactNode;
    keyboardType?: "default" | 'numeric' | 'email-address';
    onChangeText: (value: string) => void;
    onPressIcon?: () => void;
    style?: TextStyle;
}

export const AuthInputView: FC<IProps> = memo(({
    value, placeholder, icon, keyboardType, onChangeText, onPressIcon, secureTextEntry, error, style
}) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <InputOutline
            autoCapitalize='none'
            error={error}
            errorColor={colors.error}
            activeColor={colors.primary}
            inactiveColor={colors.inactiveText}
            secureTextEntry={secureTextEntry}
            caretHidden={false}
            keyboardType={keyboardType}
            backgroundColor={style?.backgroundColor as string || colors.background}
            fontColor={colors.text}
            autoCorrect={false}
            value={value}
            onChangeText={onChangeText}
            style={[styles.container, { borderBottomColor: error ? colors.error : colors.border }, style]}
            fontSize={16}
            placeholder={placeholder}
            paddingHorizontal={5}
            selectionColor={colors.primary}
            trailingIcon={() => <IconButton icon={icon} onPress={onPressIcon} />}
        />
    );
});

const IconButton: FC<{ icon: React.ReactNode, onPress?: () => void }> = ({ icon, onPress }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        icon ?
            <TouchableOpacity style={styles.button} onPress={onPress} disabled={!onPress}>
                {icon}
            </TouchableOpacity>
            : null
    )
}