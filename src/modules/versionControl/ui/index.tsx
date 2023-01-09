import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { useUiContext } from '../../../UIProvider';
import { getStyle } from './styles';
import { ScreenContainer } from '../../../UIKit/screenContainer';
import { MainButton } from '../../../UIKit/mainButton';

export const VersionControlView: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <ScreenContainer containerStyle={styles.container} >
            <MainButton title={t('update')} onPress={() => { }} />
        </ScreenContainer>
    )
})
