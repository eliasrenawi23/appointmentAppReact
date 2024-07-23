import React, { useState } from "react";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Button, Typography } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import {
  Container,
  CalendarContainer,
  TimeSlotContainer,
  TimeSlotGrid,
  SchedulePageContainer,
  SubmitButtonContainer,
} from "./styles";
import { shouldDisableDate, isTimeOccupied } from "./staticData";

const AppointmentScheduler = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(
    dayjs().add(1, "day")
  );
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(null);

  const handleDateChange = (date: Dayjs | null) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset the selected time when the date changes
  };

  const timeSlots = [];
  // eslint-disable-next-line no-plusplus
  for (let hour = 11; hour < 18; hour++) {
    // eslint-disable-next-line no-continue
    if (hour === 14) continue; // Skip the hour from 14:00 to 15:00
    timeSlots.push(dayjs(selectedDate).hour(hour).minute(0));
    timeSlots.push(dayjs(selectedDate).hour(hour).minute(30));
  }

  const handleTimeSlotClick = (time: Dayjs) => {
    setSelectedTime(time);
  };

  const handleAppointmentSubmit = () => {
    if (selectedDate && selectedTime) {
      alert(
        `Appointment made for ${selectedDate.format("DD/MM/YYYY")} at ${selectedTime.format("HH:mm")}`
      );
      // Add further logic to handle the appointment submission (e.g., API call)
    } else {
      alert("Please select both a date and a time.");
    }
  };

  const isMobile = window.innerWidth <= 600;

  return (
    <SchedulePageContainer>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Container>
          <CalendarContainer>
            <StaticDatePicker
              orientation={isMobile ? "portrait" : "landscape"}
              openTo="day"
              disablePast
              value={selectedDate}
              onChange={handleDateChange}
              shouldDisableDate={shouldDisableDate}
              slotProps={{
                actionBar: {
                  actions: ["today"],
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
                  variant={
                    selectedTime && selectedTime.isSame(time)
                      ? "contained"
                      : "outlined"
                  }
                  onClick={() => handleTimeSlotClick(time)}
                  disabled={isTimeOccupied(selectedDate!, time)}
                >
                  {time.format("HH:mm")}
                </Button>
              ))}
            </TimeSlotGrid>
            {selectedTime && selectedDate && (
              <Typography variant="body1" sx={{ mt: 2 }}>
                Selected Time and Date: {selectedTime.format("HH:mm")}
                {"  "}
                {selectedDate.format("DD/MM/YYYY")}
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
    </SchedulePageContainer>
  );
};

export default AppointmentScheduler;
