import React, { FC, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { CheckIcon } from '../../../assets/icons/CheckIcon';
import { PlusIcon } from '../../../assets/icons/PlusIcon';
import { useUiContext } from '../../UIProvider';
import { getStyle } from './styles';

interface IProps {
    onPress: () => void;
    disabled?: boolean;
    sign?: 'add' | 'done';
}

export const AbsoluteButton: FC<IProps> = ({ disabled, onPress, sign = 'add' }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, { opacity: disabled ? 0.7 : 1 }]} disabled={disabled}>
            {sign === 'add' ? <PlusIcon color={colors.card} /> : null}
            {sign === 'done' ? <CheckIcon color={colors.card} /> : null}
        </TouchableOpacity>
    )
}
