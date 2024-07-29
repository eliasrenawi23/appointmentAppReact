import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { Dayjs } from 'dayjs';
import { useFormik } from 'formik';
import { appointmentValidationSchema } from '../../Validation/validation';

interface MakeAppointmentDialogProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    time: Dayjs | null;
    date: Dayjs | null;
}

const MakeAppointmentDialog = (props: MakeAppointmentDialogProps) => {
    const { open, setOpen, time, date } = props;

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            date: date ? date.format('DD/MM/YYYY') : '',
            time: time ? time.format('HH:mm') : '',
        },

        validationSchema: appointmentValidationSchema,
        onSubmit: () => {
            alert(formik.values);
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
                                Appointment made for {date.format('DD/MM/YYYY')} at {time.format('HH:mm')}
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
                            id="phone"
                            name="phone"
                            label="Your Phone Number"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                            helperText={formik.touched.phone && formik.errors.phone}
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
