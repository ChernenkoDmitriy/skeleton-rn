import React, { FC, useMemo } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useUiContext } from '../../../../src/UIProvider';
import { MainButton } from '../../mainButton';
import { ArrowIcon } from '../ArrowIcon';
import { getStyle } from './styles';

interface IProps {
    onGetPermission: () => void;
    onClose: () => void;
}

export const PermissionView: FC<IProps> = ({ onGetPermission, onClose }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <View style={styles.topContentContainer}>
                <TouchableOpacity onPress={onClose}>
                    <ArrowIcon position='LEFT' />
                </TouchableOpacity>
            </View>
            <View style={styles.wrapper}>
                <Text style={styles.title}>{t('allowCameraPermission')}</Text>
                <MainButton containerStyle={styles.button} title='OK' onPress={onGetPermission} />
            </View>
        </View >
    )
};
