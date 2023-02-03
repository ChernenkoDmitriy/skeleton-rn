import { useNavigation } from '@react-navigation/native';
import React, { FC, useCallback, useMemo } from 'react';
import { View, Text, Keyboard, TouchableOpacity } from 'react-native';
import { ArrowIosLeft } from '../../../assets/icons/arrows/ArrowIosLeft';
import { useUiContext } from '../../UIProvider';
import { getStyle } from './styles';

interface Props {
    color?: string;
    title?: string;
    onPressTittle?: () => void;
    onPressBack?: () => void;
    isBackAvailable?: boolean;
    children?: React.ReactNode | React.ReactNode[];
}

export const HeaderWithBackButton: FC<Props> = ({ color, children, onPressTittle, onPressBack, title, isBackAvailable = true }) => {
    const { colors } = useUiContext();
    const navigation = useNavigation<any>();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onGoBack = useCallback(() => {
        Keyboard.dismiss();
        if (onPressBack) {
            onPressBack();
        } else {
            navigation.canGoBack() && navigation.goBack();
        }
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.contentWrapper}>
                {isBackAvailable && <TouchableOpacity style={styles.buttonBack} onPress={onGoBack} >
                    <ArrowIosLeft color={color || colors.icon} />
                </TouchableOpacity>}
                <View style={styles.titleContainer}>
                    {!!title && <TouchableOpacity style={styles.titleContainerButton} disabled={!onPressTittle} onPress={onPressTittle}>
                        <Text style={[styles.title, { color: color || styles.title.color }]} numberOfLines={1}>{title}</Text>
                    </TouchableOpacity>}
                </View>
                {children}
            </View>
        </View>
    )
}
