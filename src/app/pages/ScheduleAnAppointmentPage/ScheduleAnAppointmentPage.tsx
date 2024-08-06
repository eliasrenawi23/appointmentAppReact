/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { useEffect, useState } from 'react';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Button, Typography } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { useSelector } from 'react-redux';
import {
    Container,
    CalendarContainer,
    TimeSlotContainer,
    TimeSlotGrid,
    SchedulePageContainer,
    SubmitButtonContainer,
} from './styles';
import { isTimeOccupied } from './staticData';
import MakeAppointmentDialog from '../../components/MakeAppointmentDialog/MakeAppointmentDialog';
import { TimeSlotsType, timeSlots } from '../../../types/dateTypes';
import { RootState } from '../../../store/store';

const AppointmentScheduler = () => {
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs().add(1, 'day'));
    const [selectedTime, setSelectedTime] = useState<TimeSlotsType | null>(null);

    const appointments = useSelector((state: RootState) => state.occupiedTimes.Appointments); // must update
    const fullDays = useSelector((state: RootState) => state.occupiedTimes.fullyOccupiedDates);

    useEffect(() => {
        console.log(fullDays);
    }, []);

    const isTimeOccupied = (date: Dayjs, time: TimeSlotsType): boolean => {
        const timeAsDayjs = dayjs(time, 'HH:mm');
        if (date.isSame(dayjs(), 'day') && timeAsDayjs.isBefore(dayjs(), 'minute')) {
            return true;
        }
        const day = appointments.get(date.format('DD/MM/YYYY'));

        if (day) {
            return day.has(time);
        }
        return false;
    };
    const isDateOccupied = (date: Dayjs): boolean => fullDays.has(date.format('DD/MM/YYYY'));

    const shouldDisableDate2 = (date: Dayjs): boolean => {
        if (date.day() === 0) {
            return true;
        }
        return isDateOccupied(date);
    };

    const handleDateChange = (date: Dayjs | null) => {
        setSelectedDate(date);
        setSelectedTime(null); // Reset the selected time when the date changes
    };

    const handleTimeSlotClick = (time: TimeSlotsType) => {
        setSelectedTime(time);
    };

    const handleAppointmentSubmit = () => {
        if (selectedDate && selectedTime) setOpen(true);
    };

    const isMobile = window.innerWidth <= 600;

    return (
        <SchedulePageContainer>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Container>
                    <CalendarContainer>
                        <StaticDatePicker
                            orientation={isMobile ? 'portrait' : 'landscape'}
                            openTo="day"
                            disablePast
                            value={selectedDate}
                            onChange={handleDateChange}
                            shouldDisableDate={shouldDisableDate2}
                            slotProps={{
                                actionBar: {
                                    actions: ['today'],
                                },
                            }}
                        />
                    </CalendarContainer>
                    <TimeSlotContainer>
                        <Typography variant="h6">Select a Time Slot</Typography>
                        <TimeSlotGrid>
                            {timeSlots.map((time) => (
                                <Button
                                    key={time.toString()}
                                    variant={selectedTime && selectedTime.match(time) ? 'contained' : 'outlined'}
                                    onClick={() => handleTimeSlotClick(time)}
                                    disabled={isTimeOccupied(selectedDate!, time)}
                                >
                                    {time}
                                </Button>
                            ))}
                        </TimeSlotGrid>
                        {selectedTime && selectedDate && (
                            <Typography variant="body1" sx={{ mt: 2 }}>
                                Selected Time and Date: {selectedTime}
                                {'  '}
                                {selectedDate.format('DD/MM/YYYY')}
                            </Typography>
                        )}
                    </TimeSlotContainer>
                </Container>
                <SubmitButtonContainer>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAppointmentSubmit}
                        disabled={!selectedDate || !selectedTime}
                    >
                        Make an Appointment
                    </Button>
                </SubmitButtonContainer>
            </LocalizationProvider>

            {selectedDate && selectedTime && (
                <MakeAppointmentDialog
                    open={open}
                    setOpen={setOpen}
                    date={selectedDate as Dayjs}
                    time={selectedTime as TimeSlotsType}
                />
            )}
        </SchedulePageContainer>
    );
};

export default AppointmentScheduler;
