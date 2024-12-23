import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Bell } from 'lucide-react';
import { auth } from '../../../utils/auth';

export default function DashboardHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate('/login');
  };

  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <div className="px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">Mendley</h1>
        
        <div className="flex items-center space-x-4">
          <button className="text-gray-400 hover:text-white">
            <Bell className="h-5 w-5" />
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center text-gray-400 hover:text-white"
          >
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}