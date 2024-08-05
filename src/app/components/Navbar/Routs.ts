export enum Routs {
    Home = '/',
    AdminScheduleManager = 'AdminScheduleManager',
    MakeAppointment = 'MakeAppointment',
    Analytics = 'Analytics',
    About = 'About',
    Login = 'Login',
    LogOut = 'LogOut',
}

export const Links = [
    { to: Routs.AdminScheduleManager, label: 'AdminScheduleManager' },
    { to: Routs.MakeAppointment, label: 'Schedule an Appointment' },
    { to: Routs.Analytics, label: 'Analytics' },
    { to: Routs.About, label: 'Why Us' },
    { to: Routs.Login, label: 'Login' },
    { to: Routs.LogOut, label: 'LogOut' },
];
