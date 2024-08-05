import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import { Appointment, RangePayload } from '../types/dateTypes';

interface DateState {
    Appointments: Appointment[];
}
const initialState: DateState = {
    Appointments: [],
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
                times.forEach((time) => {
                    const existingAppointment = state.Appointments.find(
                        (ut) => ut.date === date.format('YYYY-MM-DD') && ut.time === time,
                    );
                    if (!existingAppointment) {
                        state.Appointments.push({ date: date.format('YYYY-MM-DD'), time, name, phoneNumber });
                    }
                });
            }
        },
    },
});

export const { addUnavailableTime } = occupiedTimesSlice.actions;

export default occupiedTimesSlice.reducer;
