import React from 'react';
import NavDashboard from '../Components/NavDashboard';
import ConsumptionList from '../Components/ConsumptionList';

const Dashboard = () => {
  return (
    <div className="h-screen w-screen bg-[#41cee71f]">
      <NavDashboard />
      <ConsumptionList />
    </div>
  );
};

export default Dashboard;
