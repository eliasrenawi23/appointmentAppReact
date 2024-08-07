import React from 'react';
import { Button, Typography } from '@mui/material';
import { Dayjs } from 'dayjs';
import { TimeSlotContainer, TimeSlotGrid } from './styles';
import { TimeSlotsType, timeSlots } from '../../../types/dateTypes';

interface TimeSlotSelectionProps {
    selectedDate: Dayjs | null;
    selectedTime: TimeSlotsType | null;
    setSelectedTime: React.Dispatch<React.SetStateAction<TimeSlotsType | null>>;
    isTimeOccupied: (date: Dayjs, time: TimeSlotsType) => boolean;
}

const TimeSlotSelection: React.FC<TimeSlotSelectionProps> = ({
    selectedDate,
    selectedTime,
    setSelectedTime,
    isTimeOccupied,
}) => (
    <TimeSlotContainer>
        <Typography variant="h6">Select a Time Slot</Typography>
        <TimeSlotGrid>
            {timeSlots.map((time) => (
                <Button
                    key={time.toString()}
                    variant={selectedTime && selectedTime.match(time) ? 'contained' : 'outlined'}
                    onClick={() => setSelectedTime(time)}
                    disabled={isTimeOccupied(selectedDate!, time)}
                >
                    {time}
                </Button>
            ))}
        </TimeSlotGrid>
        {selectedTime && selectedDate && (
            <Typography variant="body1" sx={{ mt: 2 }}>
                Selected Time and Date: {selectedTime} {selectedDate.format('DD/MM/YYYY')}
            </Typography>
        )}
    </TimeSlotContainer>
);

export default TimeSlotSelection;
