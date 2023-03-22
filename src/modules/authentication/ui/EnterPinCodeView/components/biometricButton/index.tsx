import React, { FC, useMemo, useState, useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { getStyle } from './styles';
import { useUiContext } from '../../../../../src/UIProvider';
import { FaceIdIcon } from '../../../../../assets/icons/FaceIdIcon';
import { biometrics } from '../../../../../libs/biometrics/Biometrics';
import { BiometryTypes } from 'react-native-biometrics';
import { FingerprintIcon } from '../../../../../assets/icons/FingerprintIcon';

interface IProps {
    onPress: () => void;
};

export const BiometricButton: FC<IProps> = ({ onPress }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const [buttonType, setButtonType] = useState('');

    useEffect(() => {
        biometrics.isBiometricAvailable().then(res => {
            const { available, biometryType } = res;
            if (available) {
                if (biometryType === BiometryTypes.FaceID) {
                    setButtonType('FaceID');
                } else if (biometryType === BiometryTypes.TouchID || biometryType === BiometryTypes.Biometrics) {
                    setButtonType('TouchID');
                };
            };
        });
    }, []);

    const buttonContent = useMemo(() => {
        if (buttonType === 'FaceID') {
            return (
                <TouchableOpacity onPress={onPress}>
                    <FaceIdIcon color={colors.primary} />
                </TouchableOpacity>
            )
        } else if (buttonType === 'TouchID') {
            return (
                <TouchableOpacity onPress={onPress}>
                    <FingerprintIcon color={colors.primary} />
                </TouchableOpacity>
            )
        } else {
            return null
        }
    }, [buttonType])

    return (
        <View style={styles.container}>
            {buttonContent}
        </View>
    )
};