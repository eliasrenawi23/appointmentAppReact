import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { TimeSlotsType } from '../../../types/dateTypes';

export const useHandlers = () => {
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs().add(1, 'day'));
    const [selectedTime, setSelectedTime] = useState<TimeSlotsType | null>(null);

    const handleDateChange = (date: Dayjs | null) => {
        setSelectedDate(date);
        setSelectedTime(null);
    };

    const handleAppointmentSubmit = () => {
        if (selectedDate && selectedTime) setOpen(true);
    };

    return {
        selectedDate,
        setSelectedDate,
        selectedTime,
        setSelectedTime,
        handleDateChange,
        handleAppointmentSubmit,
        open,
        setOpen,
    };
};
