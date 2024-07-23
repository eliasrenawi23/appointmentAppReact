import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './app/components/Navbar/Navbar';
import HomePage from './app/pages/HomePage/HomePage';
import AboutPage from './app/pages/AboutPage/AboutPage';
import AnalyticsPage from './app/pages/AnalyticsPage/AnalyticsPage';
import ScheduleAnAppointmentPage from './app/pages/ScheduleAnAppointmentPage/ScheduleAnAppointmentPage';
import LoginPage from './app/pages/LogInPage/LoginPage';

import { Routs } from './app/components/Navbar/Routs';
import ProtectedRoute from './app/components/ProtectedRoute/ProtectedRoute';
import { RootState } from './store/store'; // adjust the import path as needed


function App() {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="App" style={{ height: '100vh' }}>
      <Navbar />
      <main style={{ height: '100%', marginTop: '6rem', width: '100%' }}>
        <Routes>
          <Route path={`/${Routs.Home}`} element={
            <ProtectedRoute user={user}>
              <HomePage />
            </ProtectedRoute>}
          />

          <Route path={`/${Routs.Analytics}`} element={
            <ProtectedRoute user={user}>
              <AnalyticsPage />
            </ProtectedRoute>}
          />
          <Route path={`/${Routs.About}`} element={<AboutPage />} />
          <Route path={`/${Routs.MakeAppointment}`} element={<ScheduleAnAppointmentPage />} />
          <Route path={`/${Routs.Login}`} element={<LoginPage />} />
          <Route path="*" element={<Navigate to={`/${Routs.MakeAppointment}`} />} />
          <Route path="LogOut" element={<Navigate to={`/${Routs.Login}`} />} />

        </Routes>
      </main>
    </div>
  );
}

export default App;
