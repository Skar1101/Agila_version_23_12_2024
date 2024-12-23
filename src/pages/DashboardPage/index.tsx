import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../../utils/auth';
import DashboardHeader from './components/DashboardHeader';
import DashboardNav from '../../components/navigation/DashboardNav';
import DashboardContent from './components/DashboardContent';
import Calendar from './components/Calendar';

export default function DashboardPage() {
  const session = auth.getSession();

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-black">
      <DashboardHeader />
      <DashboardNav />
      <Calendar />
      <DashboardContent />
    </div>
  );
}