/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';

import { addUnavailableTime } from '../../../store/occupiedTimesSlice';
import { timeSlots, TimeSlotsType } from '../../../types/dateTypes';
import { RootState } from '../../../store/store';
import {
    AppointmentItem,
    AppointmentsList,
    Button,
    Checkbox,
    Container,
    DateTimePickers,
    TimeSlot,
    TimeSlots,
} from './style';

const AdminScheduleManager: React.FC = () => {
    const dispatch = useDispatch();
    const appointments = useSelector((state: RootState) => state.occupiedTimes.Appointments);

    const [startDate, setStartDate] = useState<Dayjs | null>(null);
    const [endDate, setEndDate] = useState<Dayjs | null>(null);
    const [selectedTimes, setSelectedTimes] = useState<TimeSlotsType[]>([]);

    const user = useSelector((state: RootState) => state.auth.user); // Access user from auth state

    const handleTimeChange = (time: TimeSlotsType) => {
        setSelectedTimes((prev) => (prev.includes(time) ? prev.filter((t) => t !== time) : [...prev, time]));
    };

    const handleStartDateChange = (date: Dayjs | null) => {
        if (endDate && date && endDate.isBefore(date, 'day')) {
            setEndDate(date);
        }
        setStartDate(date);
    };

    const handleEndDateChange = (date: Dayjs | null) => {
        if (startDate && date && date.isBefore(startDate, 'day')) {
            setStartDate(date);
        }
        setEndDate(date);
    };

    const handleSubmit = () => {
        if (startDate && endDate && selectedTimes.length > 0 && user?.username) {
            dispatch(
                addUnavailableTime({
                    startDate: startDate.format('YYYY-MM-DD'),
                    endDate: endDate.format('YYYY-MM-DD'),
                    times: selectedTimes,
                    name: user?.username,
                    phoneNumber: '0000000000',
                }),
            );
        }
    };

    return (
        <Container>
            <h2>Manage Appointments</h2>
            <DateTimePickers>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker label="Start Date" disablePast value={startDate} onChange={handleStartDateChange} />
                    <DateTimePicker label="End Date" disablePast value={endDate} onChange={handleEndDateChange} />
                </LocalizationProvider>
            </DateTimePickers>
            <TimeSlots>
                <label>Times:</label>
                {timeSlots.map((time) => (
                    <TimeSlot key={time} selected={selectedTimes.includes(time)} onClick={() => handleTimeChange(time)}>
                        <Checkbox checked={selectedTimes.includes(time)} readOnly />
                        {time}
                    </TimeSlot>
                ))}
            </TimeSlots>
            <Button type="reset" onClick={() => setSelectedTimes([])}>
                Reset
            </Button>
            <Button primary onClick={() => setSelectedTimes(timeSlots.slice() as TimeSlotsType[])}>
                Mark All
            </Button>

            <Button onClick={handleSubmit} disabled={selectedTimes.length === 0 || !startDate || !endDate}>
                Submit
            </Button>
            <h3>Existing Appointments:</h3>
            <AppointmentsList>
                {appointments.map((appointment, index) => (
                    <AppointmentItem key={index}>
                        {appointment.date.toString()} - {appointment.time.toString()}
                    </AppointmentItem>
                ))}
            </AppointmentsList>
        </Container>
    );
};

export default AdminScheduleManager;
