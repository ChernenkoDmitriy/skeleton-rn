import { StyleSheet } from 'react-native';
import { IColors } from '../../UIProvider/theme/IColors';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: 55,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 12,
        },
        buttonBack: {
            height: 50,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
        contentWrapper: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        titleContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
        },
        titleContainerButton: {
            justifyContent: 'center',
            alignItems: 'flex-start',
        },
        title: {
            fontSize: 22,
            lineHeight: 26,
            color: colors.title,
            fontFamily: 'Roboto-Medium'
        },
    });
    return styles;
}
