import { Dayjs } from "dayjs";

export interface DateState {
  selectedDate: Dayjs | null;
  selectedTime: Dayjs | null;
}
