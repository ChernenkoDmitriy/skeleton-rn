import { StyleSheet } from 'react-native';

export const getStyle = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }
    });
    return styles;
}
