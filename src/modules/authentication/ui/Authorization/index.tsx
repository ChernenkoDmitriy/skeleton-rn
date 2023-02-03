import React, { FC, useMemo } from 'react';
import { Text } from 'react-native';
import { getStyle } from './styles';
import { useUiContext } from '../../../../UIProvider';
import { useAuthorization } from '../../presenters/useAuthorization';
import { observer } from 'mobx-react';
import { ScreenContainer } from '../../../../UIKit/screenContainer';
import { MainButton } from '../../../../UIKit/mainButton';

export const AuthorizationView: FC = observer(() => {
    const { onGoToRegistration, onGoToRestorePassword } = useAuthorization();
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <ScreenContainer scrollEnabled  >
            <Text>AuthorizationView</Text>
            <MainButton title='Registration' onPress={onGoToRegistration} />
            <MainButton title='Restore Password' onPress={onGoToRestorePassword} />
        </ScreenContainer>
    )
})
