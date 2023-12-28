import React, { FC, memo, useMemo } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollScreenContent } from './components/scrollScreenContent';
import { ScreenContent } from './components/screenContent';
import { IScreenContainer } from './types/IScreenContainer';

//TODO: Add empty component for errors or empty data

export const ScreenContainer: FC<IScreenContainer> = memo(({
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
    const styles = useMemo(() => getStyle(rootContainerBackground), [rootContainerBackground]);

    const avoidingBehavior: 'padding' | undefined = Platform.select({ ios: 'padding', android: undefined }) || undefined;

    return (
        <KeyboardAvoidingView enabled={isKeyboardAvoiding} style={{ flex: 1 }} behavior={avoidingBehavior}>
            <SafeAreaView style={[styles.rootContainer, rootContainerStyle]} edges={edges} >
                {!!headerComponent && headerComponent}
                {scrollEnabled
                    ? <ScrollScreenContent
                        children={children}
                        insets={insets}
                        isScreenLoading={isScreenLoading}
                        isLoading={isLoading}
                        containerBackground={containerBackground}
                        containerStyle={containerStyle}
                        contentContainerStyle={contentContainerStyle}
                    />
                    : <ScreenContent
                        children={children}
                        insets={insets}
                        isScreenLoading={isScreenLoading}
                        isLoading={isLoading}
                        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
                        containerBackground={containerBackground}
                        containerStyle={containerStyle}
                        contentContainerStyle={contentContainerStyle}
                    />
                }
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
})

const getStyle = (rootContainerBackground: string) => {
    const styles = StyleSheet.create({
        rootContainer: {
            flex: 1,
            backgroundColor: rootContainerBackground,
        }
    });
    return styles;
}