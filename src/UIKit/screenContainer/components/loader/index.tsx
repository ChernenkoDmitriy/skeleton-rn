import React, { FC, useMemo } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { getStyle } from './styles';

interface IProps {

}

export const Loader: FC<IProps> = () => {
    const styles = useMemo(() => getStyle(), []);

    return (
        <View style={styles.container}>
            <ActivityIndicator size={'large'} />
        </View>
    );
};