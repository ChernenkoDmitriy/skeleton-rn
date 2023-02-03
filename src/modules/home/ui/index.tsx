import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { Text } from 'react-native';
import { useUiContext } from '../../../UIProvider';
import { getStyle } from './styles';
import { ScreenContainer } from '../../../UIKit/screenContainer';

export const HomeView: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <ScreenContainer  >
            <Text >Main</Text>
        </ScreenContainer>
    )
})
