import dayjs, { Dayjs } from 'dayjs';
import { timeSlots } from '../../../types/dateTypes';

const occupiedDates = [dayjs('2022-04-18'), dayjs('2022-04-19')];

interface OccupiedTime {
    date: Dayjs;
    times: string[];
}

const occupiedTimes: OccupiedTime[] = [
    { date: dayjs('2022-04-17'), times: ['12:00', '12:30', '15:00', '15:30'] },
    { date: dayjs('2022-04-18'), times: ['13:00', '13:30', '16:00', '16:30'] },
    {
        date: dayjs('2024-07-24'),
        times: [
            '11:00',
            '11:30',
            '12:00',
            '12:30',
            '13:00',
            '13:30',
            '15:00',
            '15:30',
            '16:00',
            '16:30',
            '17:00',
            '17:30',
        ],
    },
];

const isDateOccupied = (date: Dayjs): boolean => occupiedDates.some((occupiedDate) => occupiedDate.isSame(date, 'day'));

const areAllSlotsOccupied = (date: Dayjs): boolean => {
    const occupiedDay = occupiedTimes.find((occupiedTime) => occupiedTime.date.isSame(date, 'day'));
    return occupiedDay ? timeSlots.every((time) => occupiedDay.times.includes(time)) : false;
};

export const shouldDisableDate = (date: Dayjs): boolean => {
    if (date.day() === 0) {
        return true;
    }
    return isDateOccupied(date) || areAllSlotsOccupied(date);
};

export const isTimeOccupied = (date: Dayjs, time: string): boolean => {
    const timeAsDayjs = dayjs(time, 'HH:mm');
    if (date.isSame(dayjs(), 'day') && timeAsDayjs.isBefore(dayjs(), 'minute')) {
        return true;
    }
    const occupiedDay = occupiedTimes.find((occupiedTime) => occupiedTime.date.isSame(date, 'day'));
    return occupiedDay ? occupiedDay.times.includes(time) : false;
};
