import dayjs, { Dayjs } from 'dayjs';

const occupiedDates = [dayjs('2022-04-18'), dayjs('2022-04-19')];

const occupiedTimes = [
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

const isDateOccupied = (date: Dayjs) => occupiedDates.some((occupiedDate) => occupiedDate.isSame(date, 'day'));

const areAllSlotsOccupied = (date: Dayjs) => {
    const timesPerDay = [
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
    ].map((time) =>
        dayjs(date)
            .hour(parseInt(time.split(':')[0]))
            .minute(parseInt(time.split(':')[1])),
    );

    const occupiedDay = occupiedTimes.find((occupiedTime) => occupiedTime.date.isSame(date, 'day'));
    return occupiedDay ? timesPerDay.every((time) => occupiedDay.times.includes(time.format('HH:mm'))) : false;
};

export const shouldDisableDate = (date: Dayjs) => {
    if (date.day() === 0) {
        return true;
    }
    return isDateOccupied(date) || areAllSlotsOccupied(date);
};

export const isTimeOccupied = (date: Dayjs, time: Dayjs) => {
    if (date.isSame(dayjs(), 'day') && time.isBefore(dayjs(), 'minute')) {
        return true;
    }
    const occupiedDay = occupiedTimes.find((occupiedTime) => occupiedTime.date.isSame(date, 'day'));
    return occupiedDay ? occupiedDay.times.includes(time.format('HH:mm')) : false;
};
