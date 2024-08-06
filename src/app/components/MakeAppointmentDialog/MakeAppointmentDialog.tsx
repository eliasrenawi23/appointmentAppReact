import React, { FC } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { Dayjs } from 'dayjs';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { appointmentValidationSchema } from '../../Validation/validation';
import { Appointment, TimeSlotsType } from '../../../types/dateTypes';
import { addSingleAppointment } from '../../../store/occupiedTimesSlice';

interface MakeAppointmentDialogProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    time: TimeSlotsType;
    date: Dayjs;
}

const MakeAppointmentDialog: FC<MakeAppointmentDialogProps> = ({ open, setOpen, time, date }) => {
    const dispatch = useDispatch();

    const formik = useFormik<Appointment>({
        initialValues: {
            name: '',
            phoneNumber: '',
            date: date.format('DD/MM/YYYY'),
            time,
        },

        validationSchema: appointmentValidationSchema,
        onSubmit: () => {
            // eslint-disable-next-line no-console
            console.log(formik.values);
            dispatch(addSingleAppointment(formik.values));
            setOpen(false);
        },
    });

    return (
        <div>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <form onSubmit={formik.handleSubmit}>
                    <DialogTitle>Subscribe</DialogTitle>
                    <DialogContent>
                        {date && time && (
                            <DialogContentText>
                                Appointment made for {date.format('DD/MM/YYYY')} at {time}
                            </DialogContentText>
                        )}
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="name"
                            label="Your Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />
                        <TextField
                            required
                            margin="dense"
                            id="phoneNumber"
                            name="phoneNumber"
                            label="Your Phone Number"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={formik.values.phoneNumber}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpen(false)}>Cancel</Button>
                        <Button type="submit">Submit</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
};

export default MakeAppointmentDialog;
