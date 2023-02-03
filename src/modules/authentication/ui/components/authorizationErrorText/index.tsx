import React, { FC, useMemo } from 'react';
import { Text, View } from 'react-native';
import { useUiContext } from '../../../../../UIProvider';
import { getStyle } from './styles';

interface IProps {
    isVisible: boolean;
}

export const AuthorizationErrorText: FC<IProps> = ({ isVisible }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            {!!isVisible && <Text style={styles.text}>{t('wrongLoginOrEmail')}</Text>}
        </View>
    );
};
