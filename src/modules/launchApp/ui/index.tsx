import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { useUiContext } from '../../../UIProvider';
import { useLaunchApp } from '../presenters/useLaunchApp';
import { getStyle } from './styles';
import Animated, { FadeIn } from "react-native-reanimated";

export const LaunchAppView: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    useLaunchApp();

    return (
        <View style={styles.container}>
            <Animated.Text style={styles.text} entering={FadeIn.duration(1200)}>Zoolux</Animated.Text>
        </View>
    )
})
