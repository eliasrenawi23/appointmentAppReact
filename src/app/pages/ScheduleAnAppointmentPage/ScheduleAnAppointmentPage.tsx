import React from 'react';
import { Button, useMediaQuery, useTheme } from '@mui/material';
import { Dayjs } from 'dayjs';
import { Container, SchedulePageContainer, SubmitButtonContainer } from './styles';
import MakeAppointmentDialog from '../../components/MakeAppointmentDialog/MakeAppointmentDialog';
import { TimeSlotsType } from '../../../types/dateTypes';
import { useAppointments } from './useAppointment';
import Calendar from './Calender';
import TimeSlotSelection from './TimeSlotSelection';
import { useHandlers } from './useHandlers';

const AppointmentScheduler: React.FC = () => {
    const { isTimeOccupied, isDateOccupied } = useAppointments();

    const { selectedDate, selectedTime, handleDateChange, handleAppointmentSubmit, setSelectedTime, setOpen, open } =
        useHandlers();
    const shouldDisableDate = (date: Dayjs) => date.day() === 0 || isDateOccupied(date);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <SchedulePageContainer>
            <Container>
                <Calendar
                    selectedDate={selectedDate}
                    handleDateChange={handleDateChange}
                    shouldDisableDate={shouldDisableDate}
                    isMobile={isMobile}
                />
                <TimeSlotSelection
                    selectedDate={selectedDate}
                    selectedTime={selectedTime}
                    setSelectedTime={setSelectedTime}
                    isTimeOccupied={isTimeOccupied}
                />
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
