import React, { Dispatch, FC, SetStateAction, useMemo } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { getStyle } from './styles';
import { useUiContext } from '../../../../../src/UIProvider';
import { PinCodeInput } from '../../../../UIKit/pinCodeInput';
import { TextButton } from '../../../../UIKit/textButton';
import { t } from 'i18n-js';

interface IProps {
    pinCodeCellCount: number;
    pinCodeValue: string;
    isStrongPin?: boolean;
    isLoading?: boolean;
    disableChangePinType?: boolean
    setPinCode: Dispatch<SetStateAction<string>>;
    onChangePinCodeType: () => void;
};

export const PinCodeBlock: FC<IProps> = ({ disableChangePinType = false, pinCodeCellCount, pinCodeValue, isStrongPin, isLoading, setPinCode, onChangePinCodeType }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <PinCodeInput cellCount={pinCodeCellCount} value={pinCodeValue} setValue={setPinCode} />
            <View style={styles.buttonWrapper}>
                {isLoading
                    ? <ActivityIndicator color={colors.titleText} />
                    : !disableChangePinType
                        ? <TextButton title={isStrongPin ? t('defaultPin') : t('strongPin')} onPress={onChangePinCodeType} />
                        : null
                }
            </View>
        </View>
    )
};