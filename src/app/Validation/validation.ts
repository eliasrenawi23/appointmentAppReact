import dayjs from 'dayjs';
import * as yup from 'yup';

export const userValidationSchema = yup.object({
    username: yup.string().required('Username is required'),
    password: yup.string().min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
});

export const appointmentValidationSchema = yup.object({
    name: yup.string().required('Name is required'),
    phone: yup
        .string()
        .matches(/^[0-9]+$/, 'Phone number must be digits only')
        .min(10, 'Phone number must be at least 10 digits')
        .required('Phone number is required'),
    date: yup
        .string()
        .required('Date is required')
        .test(
            'is-valid-date',
            'Invalid date format',
            (value: string | number | Date | dayjs.Dayjs | null | undefined) =>
                value ? dayjs(value, 'DD/MM/YYYY', true).isValid() : false,
        ),
    time: yup
        .string()
        .required('Time is required')
        .test(
            'is-valid-time',
            'Invalid time format',
            (value: string | number | Date | dayjs.Dayjs | null | undefined) =>
                value ? dayjs(value, 'HH:mm', true).isValid() : false,
        ),
});
