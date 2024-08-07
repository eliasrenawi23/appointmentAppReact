import React from 'react';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import { CalendarContainer } from './styles';

interface CalendarProps {
    selectedDate: Dayjs | null;
    handleDateChange: (date: Dayjs | null) => void;
    shouldDisableDate: (date: Dayjs) => boolean;
    isMobile: boolean;
}

const Calendar: React.FC<CalendarProps> = ({ selectedDate, handleDateChange, shouldDisableDate, isMobile }) => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CalendarContainer>
            <StaticDatePicker
                orientation={isMobile ? 'portrait' : 'landscape'}
                openTo="day"
                disablePast
                value={selectedDate}
                onChange={handleDateChange}
                shouldDisableDate={shouldDisableDate}
                slotProps={{
                    actionBar: {
                        actions: ['today'],
                    },
                }}
            />
        </CalendarContainer>
    </LocalizationProvider>
);

export default Calendar;
