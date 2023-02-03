import { useNavigation } from '@react-navigation/native';
import React, { FC, useCallback, useMemo } from 'react';
import { ViewStyle, TouchableOpacity } from 'react-native';
import { ArrowBackIcon } from '../../../assets/icons/arrows/ArrowBackIcon';
import { useUiContext } from '../../UIProvider';
import { getStyle } from './styles';

interface IProps {
    containerStyle?: ViewStyle;
    onGoBack?: () => void;
}

export const BackButton: FC<IProps> = ({ containerStyle = {}, onGoBack }) => {
    const { colors } = useUiContext();
    const navigation = useNavigation<any>();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onHandleGoBack = useCallback(() => {
        if (onGoBack) {
            onGoBack();
        } else {
            navigation.canGoBack() && navigation.goBack();
        }
    }, []);

    return (
        <TouchableOpacity style={[styles.buttonBack, containerStyle]} onPress={onHandleGoBack}  >
            <ArrowBackIcon color={colors.icon} />
        </TouchableOpacity>
    )
}
