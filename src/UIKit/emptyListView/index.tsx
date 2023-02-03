import React, { FC, memo, useMemo } from 'react';
import { Text, View } from 'react-native';
import { getStyle } from './styles';
import { useUiContext } from '../../UIProvider';

interface IProps {
    text: string;
}

export const EmptyListView: FC<IProps> = memo(({ text }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <Text style={styles.title} >{text}</Text>
        </View>
    )
})
