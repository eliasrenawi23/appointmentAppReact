import styled from 'styled-components';
import { Box } from '@mui/material';


export const Container = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%; /* Ensures the container takes full width */

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CalendarContainer = styled(Box)`
  margin-right: 16px;

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 16px;
    width: 100%; /* Ensures the calendar takes full width */
  }

  .MuiPickerStaticWrapper-root {
    max-width: 100% !important; /* Ensures the date picker fits within the container */
    width: 100%; /* Ensures the date picker fits within the container */
  }

  .MuiCalendarPicker-root {
    width: 100%; /* Ensures the calendar picker fits within the container */
  }
`;

export const TimeSlotContainer = styled(Box)`
  max-width: 400px;

  @media (max-width: 600px) {
    width: 100%; /* Full width on mobile */
  }
`;

export const TimeSlotGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-top: 8px;
`;

export const SchedulePageContainer = styled(Box)`
max-width: 100vw;
overflow-x: hidden;
margin: 10px;
`;

export const SubmitButtonContainer = styled(Box)`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  width: 100%;
`;