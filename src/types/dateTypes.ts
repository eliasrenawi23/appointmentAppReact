import { Dayjs } from 'dayjs';

export const timeSlots = [
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
] as const;

export type TimeSlotsType = (typeof timeSlots)[number];
export interface Appointment {
    date: Dayjs | string;
    time: Dayjs | TimeSlotsType;
    name: string;
    phoneNumber: string;
}
