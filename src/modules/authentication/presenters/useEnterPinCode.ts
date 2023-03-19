import { useAppState } from "@react-native-community/hooks";
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { biometrics } from "../../../libs/biometrics/Biometrics";
import { SHA256 } from "../../../libs/sha256";
import { storage } from "../../../libs/storage";
import { symmetricCipher } from "../../../libs/symmetricCipher/SymmetricCipher";
import { useUiContext } from "../../../src/UIProvider";
import { appStateModel } from "../../entities/appState/AppStateModel";
import { registerDeviceFCMUseCase } from "../useCases/registerDeviceFCMUseCase";

export const useEnterPinCode = () => {
    const [isBiometryShowed, setIsBiometryShowed] = useState(false)
    const [isStrongPin, setIsStrongPin] = useState(false);
    const [pinCode, setPinCode] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [pinError, setPinError] = useState('');
    const cellCount = isStrongPin ? 6 : 4;
    const { t } = useUiContext();
    const navigation = useNavigation<StackNavigationProp<any>>();
    const appState = useAppState();

    useEffect(() => {
        if (pinCode.length === cellCount) {
            authenticationByPin(pinCode);
        };
    }, [pinCode]);

    useEffect(() => {
        storage.get('DATA').then(res => {
            if (res?.biometry.length && appState === 'active' && !isBiometryShowed) {
                authenticationByBiometric();
                setIsBiometryShowed(true);
            };
        });
    }, [appState]);

    const authenticationByBiometric = async () => {
        const { biometry } = await storage.get('DATA');
        if (biometry.length) {
            const { signature, success } = await biometrics.getBiometricSignature('SCAN', 'AUTH_PIN');
            if (success && signature) {
                const biometryKey: Array<number> = symmetricCipher.getSymmetricKey(signature);
                const pin = symmetricCipher.decrypt(biometry, biometryKey);
                await authenticationByPin(pin);
            };
        } else {
            navigation.navigate('AddBiometricView');
        };
    };

    const authenticationByPin = async (pin: string) => {
        setIsLoading(true);
        const { encryptedData, pinKey } = await storage.get('DATA');
        const enteredPin = SHA256(SHA256(pin));
        if (pinKey === enteredPin) {
            const key: Array<number> = symmetricCipher.getSymmetricKey(pin)
            const token: string = symmetricCipher.decrypt(encryptedData, key);
            if (token) {
                appStateModel.data = token;
                navigation.reset({ index: 0, routes: [{ name: 'TabNavigator' }] });
            };
        } else {
            setPinError(t('incorrectPin'));
        };
        setIsLoading(false);
    };

    const onChangePinCodeType = () => {
        setIsStrongPin(prev => !prev);
        setPinCode('');
    };

    return { pinCode, cellCount, isStrongPin, isLoading, pinError, setPinError, setPinCode, onChangePinCodeType, authenticationByBiometric };
}