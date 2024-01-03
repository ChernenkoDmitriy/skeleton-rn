import React, { Dispatch, FC, SetStateAction, useMemo } from 'react';
import { Text, View } from 'react-native';
import { useUiContext } from '../../../src/UIProvider';
import { CodeField, Cursor, useClearByFocusCell } from 'react-native-confirmation-code-field';
import { getStyle } from './styles';

interface IProps {
    cellCount: number;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
};

interface IRenderCell {
    index: number;
    symbol: string;
    isFocused: boolean
};

export const PinCodeInput: FC<IProps> = ({ cellCount, value, setValue }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const renderCell = ({ index, symbol, isFocused }: IRenderCell) => {
        let textChild = null;

        if (isFocused) {
            //@ts-ignore
            textChild = <Cursor cursorSymbol={<Text style={styles.indicator}>|</Text>} />;
        } else if (symbol) {
            textChild = '*';
        };

        return (
            <View style={styles.cellWrapper} key={index} onLayout={getCellOnLayoutHandler(index)}>
                <Text style={[styles.cell]}>
                    {textChild}
                </Text>
            </View>
        );
    };

    return (
        <CodeField
            {...props}
            value={value}
            cellCount={cellCount}
            rootStyle={styles.codeFieldRoot}
            contextMenuHidden={true}
            showSoftInputOnFocus={false}
            textContentType="oneTimeCode"
            renderCell={renderCell}
        />
    )
}