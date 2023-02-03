import React, { FC, useMemo, memo } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { useUiContext } from '../../UIProvider';
import { getStyle } from './styles';

interface IProps {
    title?: string;
    text?: string;
    isVisible: boolean;
    onCancel?: () => void;
    onConfirm?: () => void;
}

export const ModalPopup: FC<IProps> = memo(({ title, text, isVisible, onCancel, onConfirm }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onConfirmHandle = () => {
        onCancel && onCancel();
        onConfirm && onConfirm();
    }

    return (
        <ReactNativeModal isVisible={isVisible} onBackdropPress={onCancel}>
            <View style={styles.modalContainer} >
                {!!title && <Text style={styles.title}>{title}</Text>}
                {!!text && <Text style={styles.text}>{text}</Text>}
                <View style={styles.buttonWrapper}>
                    {!!onCancel && <TouchableOpacity onPress={onCancel} style={styles.button}>
                        <Text style={styles.buttonText} numberOfLines={1}>{t('cancel')}</Text>
                    </TouchableOpacity>}
                    {!!onConfirm && <TouchableOpacity onPress={onConfirmHandle} style={styles.button}>
                        <Text style={styles.buttonText} numberOfLines={1}>{t('ok')}</Text>
                    </TouchableOpacity>}
                </View>
            </View>
        </ReactNativeModal>
    );
});
