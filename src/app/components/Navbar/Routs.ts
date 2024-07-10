export enum Routs {
    Home = '/',
    MakeAppointment = 'MakeAppointment',
    Analytics = 'Analytics',
    About = 'About',
    Login = 'Login',
}


export const Links = [
    { to: Routs.MakeAppointment, label: 'Schedule an Appointment' },
    { to: Routs.Analytics, label: 'Analytics' },
    { to: Routs.About, label: 'Why Us' },
    { to: Routs.Login, label: 'Login' }
];

