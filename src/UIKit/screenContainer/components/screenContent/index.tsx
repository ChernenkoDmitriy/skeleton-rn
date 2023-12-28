import React, { FC, useMemo } from 'react';
import { Keyboard, View, ViewStyle } from 'react-native';
import { getStyle } from './styles';
import { Loader } from '../loader';
import { ScreenLoader } from '../screenLoader';
import { TInsets } from '../../types/TInsets';
import { initialWindowMetrics } from 'react-native-safe-area-context';
import { IContainerPaddings } from '../../types/IContainerPaddings';
import { IScreenContent } from '../../types/IScreenContent';

interface IProps {
    children: React.ReactNode;
    insets?: TInsets[];
    isScreenLoading?: boolean;
    isLoading?: boolean;
    keyboardShouldPersistTaps?: boolean;
    containerBackground?: string;
    containerStyle?: ViewStyle;
    contentContainerStyle?: ViewStyle;
}

export const ScreenContent: FC<IScreenContent> = ({ children, insets, isScreenLoading, isLoading, keyboardShouldPersistTaps, containerBackground, containerStyle }) => {
    const styles = useMemo(() => getStyle(containerBackground), [containerBackground]);

    const containerPaddings: IContainerPaddings = useMemo(() => {
        const paddingTop = styles.container?.paddingTop || containerStyle?.paddingTop;
        const paddingBottom = styles.container?.paddingBottom || containerStyle?.paddingBottom;
        const paddingTopWithInsets = Number(paddingTop || 0) + (initialWindowMetrics?.insets.top || 0);
        const paddingBottomWithInsets = Number(paddingBottom || 0) + (initialWindowMetrics?.insets.bottom || 0);
        const top = insets?.includes('top') ? paddingTopWithInsets : paddingTop;
        const bottom = insets?.includes('bottom') ? paddingBottomWithInsets : paddingBottom;
        return { paddingTop: top, paddingBottom: bottom };
    }, [insets, containerStyle]);

    return (
        <View style={{ flex: 1 }} >
            {isLoading
                ? <Loader />
                : null
            }
            <View style={[styles.container, containerStyle, containerPaddings]} onStartShouldSetResponder={keyboardShouldPersistTaps ? Keyboard.dismiss : undefined as any}>
                {
                    isScreenLoading
                        ? <ScreenLoader />
                        : children
                }
            </View>
        </View>
    );
};