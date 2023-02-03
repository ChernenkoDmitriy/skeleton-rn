import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';
import ReactNativeModal from 'react-native-modal';
import { useUiContext } from '../../UIProvider';
import { getStyle } from './styles';

interface IProps {
    date?: string;
    visible: boolean;
    onDayPress: (date: DateData) => void;
    onBackdropPress: () => void;
    minDate?: string;
}

export const CalendarView: FC<IProps> = ({ visible, onDayPress, onBackdropPress, minDate, date = '' }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <ReactNativeModal isVisible={visible} style={styles.modal} onBackdropPress={onBackdropPress}>
            <View style={styles.calendar}>
                <Calendar
                    markedDates={{ [date]: { selected: true, selectedColor: colors.primary }, }}
                    minDate={minDate}
                    onDayPress={onDayPress}
                    hideExtraDays={true}
                    firstDay={1}
                    theme={{ backgroundColor: colors.card, calendarBackground: colors.card, }}
                />
            </View>
        </ReactNativeModal>
    )
}
