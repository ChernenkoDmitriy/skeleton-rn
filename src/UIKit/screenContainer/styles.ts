import { StyleSheet } from 'react-native';
import { TInsets } from './types/TInsets';

export const getStyle = (rootContainerBackground: string, containerBackground: string) => {
    const styles = StyleSheet.create({
        rootContainer: {
            flex: 1,
            backgroundColor: rootContainerBackground,
        },
        container: {
            flex: 1,
            backgroundColor: containerBackground,
        },
        contentContainerStyle: {
            flexGrow: 1,
        },
    });
    return styles;
}