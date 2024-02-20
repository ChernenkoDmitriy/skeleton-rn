import React, { FC, useMemo } from 'react';
import { ScrollView, View, ViewStyle } from 'react-native';
import { getStyle } from './styles';
import { Loader } from '../loader';
import { ScreenLoader } from '../screenLoader';
import { TInsets } from '../../types/TInsets';
import { initialWindowMetrics } from 'react-native-safe-area-context';
import { IContainerPaddings } from '../../types/IContainerPaddings';

interface IProps {
    children: React.ReactNode;
    insets?: TInsets[];
    isScreenLoading?: boolean;
    isLoading?: boolean;
    containerBackground?: string;
    containerStyle?: ViewStyle;
    contentContainerStyle?: ViewStyle;
}

export const ScrollScreenContent: FC<IProps> = ({ children, insets, isScreenLoading, isLoading, containerBackground, containerStyle, contentContainerStyle }) => {
    const styles = useMemo(() => getStyle(containerBackground), [containerBackground]);

    const containerPaddings: IContainerPaddings = useMemo(() => {
        const paddingTop = styles.contentContainerStyle?.paddingTop || contentContainerStyle?.paddingTop;
        const paddingBottom = styles.contentContainerStyle?.paddingBottom || contentContainerStyle?.paddingBottom;
        const paddingTopWithInsets = Number(paddingTop || 0) + (initialWindowMetrics?.insets.top || 0);
        const paddingBottomWithInsets = Number(paddingBottom || 0) + (initialWindowMetrics?.insets.bottom || 0);
        const top = insets?.includes('top') ? paddingTopWithInsets : paddingTop;
        const bottom = insets?.includes('bottom') ? paddingBottomWithInsets : paddingBottom;
        return { paddingTop: top, paddingBottom: bottom };
    }, [insets, contentContainerStyle]);

    return (
        <View style={{ flex: 1 }}>
            {isLoading
                ? <Loader />
                : null
            }
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[styles.contentContainerStyle, contentContainerStyle, containerPaddings]}
                style={[styles.container, containerStyle]}
                keyboardDismissMode='interactive'
                keyboardShouldPersistTaps={'handled'}
            >
                {
                    isScreenLoading
                        ? <ScreenLoader />
                        : children
                }
            </ScrollView>
        </View>
    );
};