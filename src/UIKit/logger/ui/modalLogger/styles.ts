import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colorTheme';
 
export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F5F5EC',
        },
        header: {
            height: 55,
            width: '100%',
            paddingRight: 20,
            backgroundColor: '#F5F5EC',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.1,
            elevation: 5,
            zIndex: 2,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-end',
        },
        button: {
            height: 50,
            paddingHorizontal: 30,
            justifyContent: 'center',
            alignItems: 'center',
        },
        buttonText: {
            fontSize: 18,
            fontWeight: '500',
            color: colors.accentColorDark,
        }
    });
    return styles;
}
