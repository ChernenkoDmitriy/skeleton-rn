import React, { FC, useMemo } from 'react';
import { Text } from 'react-native';
import { getStyle } from './styles';
import { useUiContext } from '../../../../UIProvider';
import { useRegistration } from '../../presenters/useRegistration';
import { observer } from 'mobx-react';
import { ScreenContainer } from '../../../../UIKit/screenContainer';
import { MainButton } from '../../../../UIKit/mainButton';

export const RegistrationView: FC = observer(() => {
    const { onGoToAuthorization } = useRegistration();
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <ScreenContainer scrollEnabled containerStyle={{ backgroundColor: colors.background }} >
            <Text>RegistrationView</Text>
            <MainButton title='Authorization' onPress={onGoToAuthorization} />
        </ScreenContainer>
    );
});
