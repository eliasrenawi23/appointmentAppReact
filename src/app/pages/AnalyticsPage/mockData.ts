export interface Earnings {
    pastMonth: number;
    pastThreeMonths: number;
    pastYear: number;
}

export interface AppointmentData {
    date: string;
    haircuts: number;
    laser: number;
    combined: number; // Total appointments per day
}

export interface AnalyticsData {
    totalAppointments: number;
    totalHours: number;
    laserAppointments: number;
    haircutAppointments: number;
    earnings: Earnings;
    appointmentData: AppointmentData[];
    monthlyEarnings: { month: string; amount: number }[];
    appointmentTrends: { week: string; haircuts: number; laser: number }[];
}

export const analyticsData: AnalyticsData = {
    totalAppointments: 120,
    totalHours: 85,
    laserAppointments: 30,
    haircutAppointments: 90,
    earnings: {
        pastMonth: 1500,
        pastThreeMonths: 4500,
        pastYear: 18000,
    },
    appointmentData: [
        { date: '2024-05-01', haircuts: 5, laser: 2, combined: 7 },
        { date: '2024-05-02', haircuts: 7, laser: 1, combined: 8 },
        { date: '2024-05-03', haircuts: 6, laser: 3, combined: 9 },
        { date: '2024-05-04', haircuts: 4, laser: 2, combined: 6 },
        { date: '2024-05-05', haircuts: 8, laser: 1, combined: 9 },
        // More data points
    ],
    monthlyEarnings: [
        { month: 'January', amount: 5000 },
        { month: 'February', amount: 6000 },
        { month: 'March', amount: 6500 },
        { month: 'April', amount: 7000 },
        { month: 'May', amount: 7200 },
        // More data points
    ],
    appointmentTrends: [
        { week: 'Week 1', haircuts: 20, laser: 10 },
        { week: 'Week 2', haircuts: 25, laser: 15 },
        { week: 'Week 3', haircuts: 22, laser: 12 },
        { week: 'Week 4', haircuts: 28, laser: 18 },
        // More data points
    ],
};
