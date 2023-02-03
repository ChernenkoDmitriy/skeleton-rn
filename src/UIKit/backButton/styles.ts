import { StyleSheet } from 'react-native';
import { IColors } from '../../UIProvider/theme';
 
export const getStyle = (_colors: IColors) => {
    const styles = StyleSheet.create({
        buttonBack: {
            height: 50,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
    return styles;
}
