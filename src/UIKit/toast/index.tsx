import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { Text, View } from 'react-native';
import { useUiContext } from '../../../src/UIProvider';
import { getStyle } from './styles';

export const ToastView: FC<ToastConfigParams<any>> = observer(({ type, text1, text2 }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors, type), [colors, type]);

    return (
        <View style={styles.container} >
            <Text style={styles.text}>{text1}</Text>
            <Text style={styles.text}>{text2}</Text>
        </View>
    );
}) 
