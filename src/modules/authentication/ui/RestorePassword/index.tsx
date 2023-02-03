import React, { FC, useMemo } from 'react';
import { Text } from 'react-native';
import { getStyle } from './styles';
import { useUiContext } from '../../../../UIProvider';
import { observer } from 'mobx-react';
import { ScreenContainer } from '../../../../UIKit/screenContainer';
import { useRestorePassword } from '../../presenters/useRestorePassword';
import { MainButton } from '../../../../UIKit/mainButton';

export const RestorePasswordView: FC = observer(() => {
    const { email, emailError, onRestorePassword, onGoToAuthorization, setEmail } = useRestorePassword();
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <ScreenContainer scrollEnabled containerStyle={{ backgroundColor: colors.background }} >
            <Text>RestorePasswordView</Text>
            <MainButton title='Authorization' onPress={onGoToAuthorization} />
        </ScreenContainer>
    )
})
