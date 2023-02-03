import { StyleSheet } from 'react-native';
import { IColors } from '../../UIProvider/theme/IColors';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            padding: 0,
            margin: 0,
            justifyContent: 'flex-end',
        },
        contentContainerStyle: {
            paddingBottom: 50,
        },
        modalContainer: {
            backgroundColor: colors.background,
            height: '80%',
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            width: '100%',
            paddingTop: 10,
        },
        title: {

        }
    });
    return styles;
};