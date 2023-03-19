import React, { Dispatch, FC, SetStateAction, useMemo, ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';
import { getStyle } from './styles';
import { useUiContext } from '../../../src/UIProvider';
import { KeyboardDeleteIcon } from '../../../assets/icons/KeyboardDeleteIcon';
import { NumericButton } from './NumericButton';
import { DotIcon } from '../../../assets/icons/DotIcon';

interface IProps {
    value: string;
    maxLength?: number;
    customButton?: ReactNode;
    iconsColor?: string;
    containerStyles?: ViewStyle;
    buttonContainerStyles?: ViewStyle;
    buttonStyles?: ViewStyle;
    buttonTextStyles?: ViewStyle;
    setValue: Dispatch<SetStateAction<string>>;
}

export const NumericKeyboard: FC<IProps> = ({ value, maxLength = 0, containerStyles, customButton, iconsColor, buttonContainerStyles, buttonStyles, buttonTextStyles, setValue }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onPress = (keyValue: string) => {
        if (!maxLength || value.length < maxLength || keyValue === 'delete' || keyValue === 'clear') {
            if (keyValue === 'delete') {
                setValue(prev => prev.slice(0, -1));
            } else if (keyValue === '.') {
                if (value.length === 0) {
                    setValue('0.');
                } else if (!value.includes('.')) {
                    setValue(prev => prev + keyValue);
                };
            } else if (value === '0' && keyValue === '0') {
                setValue('0')
            } else {
                setValue(prev => prev + keyValue);
            };
        };
    };

    const onLongDeletePress = () => {
        setValue('');
    };

    return (
        <View style={[styles.container, containerStyles]}>
            <View style={styles.buttonsRow}>
                <NumericButton onPress={onPress} value={'1'} buttonContainerStyles={buttonContainerStyles} buttonStyles={buttonStyles} buttonTextStyles={buttonTextStyles} />
                <NumericButton onPress={onPress} value={'2'} buttonContainerStyles={buttonContainerStyles} buttonStyles={buttonStyles} buttonTextStyles={buttonTextStyles} />
                <NumericButton onPress={onPress} value={'3'} buttonContainerStyles={buttonContainerStyles} buttonStyles={buttonStyles} buttonTextStyles={buttonTextStyles} />
            </View>
            <View style={styles.buttonsRow}>
                <NumericButton onPress={onPress} value={'4'} buttonContainerStyles={buttonContainerStyles} buttonStyles={buttonStyles} buttonTextStyles={buttonTextStyles} />
                <NumericButton onPress={onPress} value={'5'} buttonContainerStyles={buttonContainerStyles} buttonStyles={buttonStyles} buttonTextStyles={buttonTextStyles} />
                <NumericButton onPress={onPress} value={'6'} buttonContainerStyles={buttonContainerStyles} buttonStyles={buttonStyles} buttonTextStyles={buttonTextStyles} />
            </View>
            <View style={styles.buttonsRow}>
                <NumericButton onPress={onPress} value={'7'} buttonContainerStyles={buttonContainerStyles} buttonStyles={buttonStyles} buttonTextStyles={buttonTextStyles} />
                <NumericButton onPress={onPress} value={'8'} buttonContainerStyles={buttonContainerStyles} buttonStyles={buttonStyles} buttonTextStyles={buttonTextStyles} />
                <NumericButton onPress={onPress} value={'9'} buttonContainerStyles={buttonContainerStyles} buttonStyles={buttonStyles} buttonTextStyles={buttonTextStyles} />
            </View>
            <View style={styles.buttonsRow}>
                {customButton
                    ? <View style={[styles.buttonContainer, buttonContainerStyles]}>
                        {customButton}
                    </View>
                    : <NumericButton onPress={onPress} value={'.'} icon={<DotIcon color={iconsColor || colors.titleText} />} buttonContainerStyles={buttonContainerStyles} buttonStyles={buttonStyles} buttonTextStyles={buttonTextStyles} />
                }
                <NumericButton onPress={onPress} value={'0'} buttonContainerStyles={buttonContainerStyles} buttonStyles={buttonStyles} buttonTextStyles={buttonTextStyles} />
                <NumericButton onLongPress={onLongDeletePress} onPress={onPress} value={'delete'} icon={<KeyboardDeleteIcon color={iconsColor || colors.titleText} />} buttonContainerStyles={buttonContainerStyles} buttonStyles={buttonStyles} buttonTextStyles={buttonTextStyles} />
            </View>
        </View>
    )
};