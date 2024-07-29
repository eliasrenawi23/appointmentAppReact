import React from 'react';
import {
    BarChart,
    Bar,
    LineChart,
    Line,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from 'recharts';
import { AnalyticsContainer, Title, ChartsContainer, StatTitle } from './styles';
import { analyticsData } from './mockData';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AnalyticsPage: React.FC = () => {
    const { laserAppointments, haircutAppointments, appointmentData, monthlyEarnings, appointmentTrends } =
        analyticsData;

    const pieData = [
        { name: 'Haircuts', value: haircutAppointments + 20 },
        { name: 'Laser Treatments', value: laserAppointments },
    ];

    return (
        <AnalyticsContainer>
            <Title>Analytics</Title>
            <ChartsContainer>
                <div style={{ width: '100%' }}>
                    <StatTitle>Appointments Overview</StatTitle>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={appointmentData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="haircuts" fill="#8884d8" />
                            <Bar dataKey="laser" fill="#82ca9d" />
                            <Bar dataKey="combined" fill="#ffc658" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div style={{ width: '100%' }}>
                    <StatTitle>Appointment Distribution</StatTitle>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={pieData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                fill="#8884d8"
                                label
                            >
                                {pieData.map((_entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div style={{ width: '100%' }}>
                    <StatTitle>Monthly Earnings</StatTitle>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={monthlyEarnings}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="amount" stroke="#8884d8" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div style={{ width: '100%' }}>
                    <StatTitle>Weekly Appointment Trends</StatTitle>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={appointmentTrends}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="week" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="haircuts" stackId="1" stroke="#8884d8" fill="#8884d8" />
                            <Area type="monotone" dataKey="laser" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </ChartsContainer>
        </AnalyticsContainer>
    );
};

export default AnalyticsPage;
