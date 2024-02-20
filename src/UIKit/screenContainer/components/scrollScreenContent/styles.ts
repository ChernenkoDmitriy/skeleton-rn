import { StyleSheet } from 'react-native';

export const getStyle = (containerBackground: string | undefined) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: containerBackground,
        },
        contentContainerStyle: {
            flexGrow: 1,
            paddingTop: 0,
            paddingBottom: 0
        },
    });
    return styles;
}
