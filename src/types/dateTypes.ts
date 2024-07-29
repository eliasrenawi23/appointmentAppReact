import { Dayjs } from 'dayjs';

export interface Appointment {
    selectedDate: Dayjs | null;
    selectedTime: Dayjs | null;
    name: string;
    phoneNumber: string;
}
