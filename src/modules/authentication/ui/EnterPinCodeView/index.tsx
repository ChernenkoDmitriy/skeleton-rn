import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { useUiContext } from '../../../../src/UIProvider';
import { ScreenContainer } from '../../../UIKit/screenContainer';
import { BiometricButton } from '../components/biometricButton';
import { NumericKeyboard } from '../../../UIKit/numericKeyboard';
import { getStyle } from './styles';
import { PinCodeBlock } from '../components/pinCodeBlock';
import { useEnterPinCode } from '../../presenters/useEnterPinCode';

export const EnterPinCodeView: FC = observer(({ }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { pinCode, cellCount, isStrongPin, isLoading, pinError, setPinError, setPinCode,
        onChangePinCodeType, authenticationByBiometric } = useEnterPinCode();

    return (
        <ScreenContainer containerStyle={styles.container} >
            <PinCodeBlock pinCodeCellCount={cellCount} pinCodeValue={pinCode} isStrongPin={isStrongPin} isLoading={isLoading} setPinCode={setPinCode} onChangePinCodeType={onChangePinCodeType} />
            <BiometricButton onPress={authenticationByBiometric} />
            <NumericKeyboard value={pinCode} setValue={setPinCode} maxLength={cellCount} />
        </ScreenContainer>
    );
});
