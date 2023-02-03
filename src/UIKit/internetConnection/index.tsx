import { useNetInfo } from '@react-native-community/netinfo';
import React, { FC, memo, useEffect, useMemo } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { appStateModel } from '../../entities/appState/AppStateModel';
import { useUiContext } from '../../UIProvider';
import { getStyle } from './styles';

export const InternetConnection: FC = memo(({ }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { isConnected } = useNetInfo();

    useEffect(() => {
        if (typeof isConnected === 'boolean') {
            appStateModel.isConnected = isConnected;
        }
    }, [isConnected])

    return (
        (typeof isConnected === 'object' || isConnected)
            ? null
            : <View style={styles.container} pointerEvents='none'>
                <ActivityIndicator size={15} color={colors.buttonText} />
                <View style={styles.textWrapper}>
                    <Text style={styles.text}>{t('noInternetConnection')}</Text>
                </View>
            </View>

    )
});
