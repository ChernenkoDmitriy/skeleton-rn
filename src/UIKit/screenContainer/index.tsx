import React, { FC, memo, useMemo } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, View, ViewStyle } from 'react-native';
import { Edge, SafeAreaView, initialWindowMetrics } from 'react-native-safe-area-context';
import { getStyle } from './styles';
import { Loader } from './loader';
import { TInsets } from './types/TInsets';
import { ScreenLoader } from './screenLoader';

interface IProps {
    headerComponent?: React.ReactNode;
    edges?: Edge[];
    insets?: TInsets[];
    children: React.ReactNode;
    scrollEnabled?: boolean;
    keyboardShouldPersistTaps?: boolean;
    isKeyboardAvoiding?: boolean;
    isScreenLoading?: boolean;
    isLoading?: boolean;
    rootContainerBackground?: string;
    containerBackground?: string;
    rootContainerStyle?: ViewStyle;
    containerStyle?: ViewStyle;
    contentContainerStyle?: ViewStyle;

}

export const ScreenContainer: FC<IProps> = memo(({
    headerComponent,
    edges,
    insets,
    children,
    scrollEnabled = false,
    keyboardShouldPersistTaps = true,
    isKeyboardAvoiding = true,
    isScreenLoading = false,
    isLoading = false,
    rootContainerBackground = '#FFF',
    containerBackground = '#FFF',
    rootContainerStyle,
    containerStyle,
    contentContainerStyle
}) => {
    const styles = useMemo(() => getStyle(rootContainerBackground, containerBackground), [rootContainerBackground, containerBackground]);

    const avoidingBehavior: 'padding' | undefined = Platform.select({ ios: 'padding', android: undefined }) || undefined;

    const containerPaddings: ViewStyle = useMemo(() => {
        const containerStyles: ViewStyle | undefined = scrollEnabled ? styles.contentContainerStyle : styles.container;
        const customContainerStyles: ViewStyle | undefined = scrollEnabled ? contentContainerStyle : containerStyle;
        const paddingTop = containerStyles?.paddingTop || customContainerStyles?.paddingTop;
        const paddingBottom = containerStyles?.paddingBottom || customContainerStyles?.paddingBottom;
        const paddingTopWithInsets = Number(paddingTop || 0) + (initialWindowMetrics?.insets.top || 0);
        const paddingBottomWithInsets = Number(paddingBottom || 0) + (initialWindowMetrics?.insets.bottom || 0);
        const top = insets?.includes('top') ? paddingTopWithInsets : paddingTop;
        const bottom = insets?.includes('bottom') ? paddingBottomWithInsets : paddingBottom;
        return { paddingTop: top, paddingBottom: bottom };
    }, [insets, contentContainerStyle, containerStyle]);

    return (
        <KeyboardAvoidingView enabled={isKeyboardAvoiding} style={{ flex: 1 }} behavior={avoidingBehavior}>
            <SafeAreaView style={[styles.rootContainer, rootContainerStyle]} edges={edges} >
                {!!headerComponent && headerComponent}
                {scrollEnabled
                    ? <View style={{ flex: 1 }}>
                        {isLoading
                            ? <Loader />
                            : null
                        }
                        <ScrollView
                            scrollEnabled={scrollEnabled}
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
                    : <View style={[styles.container, containerStyle, containerPaddings]} onStartShouldSetResponder={keyboardShouldPersistTaps ? Keyboard.dismiss : undefined as any}>
                        <View style={{ position: 'absolute', backgroundColor: 'red', opacity: 1, width: 20, height: 20, zIndex: 10 }}>
                        </View>
                        {
                            isScreenLoading
                                ? <ScreenLoader />
                                : children
                        }
                    </View>
                }
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
})