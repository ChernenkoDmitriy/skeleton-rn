import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colorTheme';
import { Utils } from '../../../../../src/utils/Utils';

export const getStyle = (colors: IColors) => {
    const styles = StyleSheet.create({
        container: {
            width: Utils.size.width,
            alignItems: 'flex-end',
            paddingBottom: 16,
            paddingRight: 16
        }
    });
    return styles;
};