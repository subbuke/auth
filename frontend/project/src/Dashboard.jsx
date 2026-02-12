import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Navbar */}
      <div className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">My Dashboard</h1>
        <button className="bg-red-500 px-4 py-1 rounded hover:bg-red-600">
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="p-6">
        
        {/* Welcome */}
        <h2 className="text-2xl font-semibold mb-6">
          Welcome, User 👋
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-bold">Total Users</h3>
            <p className="text-3xl font-semibold mt-2 text-blue-600">120</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-bold">Total Courses</h3>
            <p className="text-3xl font-semibold mt-2 text-green-600">8</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-bold">Completed Tasks</h3>
            <p className="text-3xl font-semibold mt-2 text-purple-600">45</p>
          </div>

        </div>

        {/* Table */}
        <div className="mt-10 bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-bold mb-4">Recent Activities</h3>

          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">Name</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">React Course</td>
                <td className="text-green-600">Completed</td>
                <td>10 Feb 2026</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Tailwind UI</td>
                <td className="text-yellow-600">In Progress</td>
                <td>8 Feb 2026</td>
              </tr>
              <tr>
                <td className="py-2">AWS Basics</td>
                <td className="text-red-600">Pending</td>
                <td>5 Feb 2026</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
