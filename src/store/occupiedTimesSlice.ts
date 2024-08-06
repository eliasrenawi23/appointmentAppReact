import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import { Appointment, DateState, RangePayload, timeSlots } from '../types/dateTypes';

const initialState: DateState = {
    Appointments: new Map(),
    fullyOccupiedDates: new Set(),
};

const occupiedTimesSlice = createSlice({
    name: 'occupiedTimes',
    initialState,
    reducers: {
        addUnavailableTime: (state, action: PayloadAction<RangePayload>) => {
            const { startDate, endDate, times, name, phoneNumber } = action.payload;
            const start = dayjs(startDate);
            const end = dayjs(endDate);

            for (let date = start; date.isBefore(end) || date.isSame(end, 'day'); date = date.add(1, 'day')) {
                const formattedDate = date.format('DD/MM/YYYY');

                if (!state.Appointments.has(formattedDate)) {
                    state.Appointments.set(formattedDate, new Map());
                }

                const dailyAppointments = state.Appointments.get(formattedDate);

                if (dailyAppointments) {
                    times.forEach((time) => {
                        if (!dailyAppointments.has(time)) {
                            dailyAppointments.set(time, { name, phoneNumber });
                        }
                    });

                    // Check if all time slots are occupied for the current date
                    const allTimesOccupied = timeSlots.every((time) => dailyAppointments.has(time));

                    if (allTimesOccupied) {
                        state.fullyOccupiedDates.add(formattedDate);
                    }
                }
            }
        },
        addSingleAppointment: (state, action: PayloadAction<Appointment>) => {
            const { date, time, name, phoneNumber } = action.payload;
            const formattedDate = dayjs(date).format('DD/MM/YYYY');

            if (!state.Appointments.has(formattedDate)) {
                state.Appointments.set(formattedDate, new Map());
            }

            const dailyAppointments = state.Appointments.get(formattedDate);

            if (dailyAppointments) {
                if (!dailyAppointments.has(time)) {
                    dailyAppointments.set(time, { name, phoneNumber });
                }

                // Check if all time slots are occupied for the current date
                const allTimesOccupied = timeSlots.every((timeSlot) => dailyAppointments.has(timeSlot));

                if (allTimesOccupied) {
                    state.fullyOccupiedDates.add(formattedDate);
                }
            }
        },
    },
});

export const { addUnavailableTime, addSingleAppointment } = occupiedTimesSlice.actions;

export default occupiedTimesSlice.reducer;
