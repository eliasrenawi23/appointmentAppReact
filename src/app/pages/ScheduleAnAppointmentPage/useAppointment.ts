import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { RootState } from '../../../store/store';
import { TimeSlotsType } from '../../../types/dateTypes';

export const useAppointments = () => {
    const appointments = useSelector((state: RootState) => state.occupiedTimes.Appointments);
    const fullDays = useSelector((state: RootState) => state.occupiedTimes.fullyOccupiedDates);

    const isTimeOccupied = useCallback(
        (date: Dayjs, time: TimeSlotsType): boolean => {
            const timeAsDayjs = dayjs(time, 'HH:mm');
            if (date.isSame(dayjs(), 'day') && timeAsDayjs.isBefore(dayjs(), 'minute')) {
                return true;
            }
            const day = appointments.get(date.format('DD/MM/YYYY'));
            return day ? day.has(time) : false;
        },
        [appointments],
    );

    const isDateOccupied = useCallback((date: Dayjs): boolean => fullDays.has(date.format('DD/MM/YYYY')), [fullDays]);

    return { isTimeOccupied, isDateOccupied };
};
