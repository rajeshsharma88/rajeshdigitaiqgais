import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, BookOpen, DollarSign, Activity, FileText } from 'lucide-react';
import { MOCK_LEADS, STATS } from '../constants';

const Dashboard: React.FC = () => {
  // Mock data for the chart
  const data = [
    { name: 'Jan', revenue: 4000 },
    { name: 'Feb', revenue: 3000 },
    { name: 'Mar', revenue: 2000 },
    { name: 'Apr', revenue: 2780 },
    { name: 'May', revenue: 1890 },
    { name: 'Jun', revenue: 2390 },
    { name: 'Jul', revenue: 3490 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-500 text-sm">Overview of institute performance and enrollments.</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></span>
              System Live
            </span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600"><Users size={20} /></div>
              <span className="text-xs font-bold text-green-600">+12%</span>
            </div>
            <p className="text-gray-500 text-sm">Total Students</p>
            <p className="text-2xl font-bold text-gray-900">1,240</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-lg text-purple-600"><BookOpen size={20} /></div>
              <span className="text-xs font-bold text-gray-400">0%</span>
            </div>
            <p className="text-gray-500 text-sm">Active Courses</p>
            <p className="text-2xl font-bold text-gray-900">8</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-lg text-green-600"><DollarSign size={20} /></div>
              <span className="text-xs font-bold text-green-600">+8%</span>
            </div>
            <p className="text-gray-500 text-sm">Monthly Revenue</p>
            <p className="text-2xl font-bold text-gray-900">$48,200</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-orange-100 p-3 rounded-lg text-orange-600"><Activity size={20} /></div>
              <span className="text-xs font-bold text-red-600">-2%</span>
            </div>
            <p className="text-gray-500 text-sm">Conversion Rate</p>
            <p className="text-2xl font-bold text-gray-900">4.2%</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-6">Revenue Overview</h3>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                  <Tooltip cursor={{fill: '#f3f4f6'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                  <Bar dataKey="revenue" fill="#0f172a" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Leads */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-4">Recent Inquiries</h3>
            <div className="space-y-4">
              {MOCK_LEADS.map((lead) => (
                <div key={lead.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold text-xs">
                      {lead.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{lead.name}</p>
                      <p className="text-xs text-gray-500">{lead.courseInterest}</p>
                    </div>
                  </div>
                  <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded ${
                    lead.status === 'New' ? 'bg-blue-100 text-blue-700' : 
                    lead.status === 'Enrolled' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {lead.status}
                  </span>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 text-sm text-brand-600 font-medium hover:text-brand-900">View All Leads</button>
          </div>
        </div>

        {/* Quick Actions (CMS) */}
        <div className="mt-8">
            <h3 className="font-bold text-gray-900 mb-4">Content Management</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-xl hover:border-accent-500 hover:shadow-md transition-all group">
                    <FileText className="text-gray-400 group-hover:text-accent-500 mb-2" />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Manage Pages</span>
                </button>
                <button className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-xl hover:border-accent-500 hover:shadow-md transition-all group">
                    <BookOpen className="text-gray-400 group-hover:text-accent-500 mb-2" />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Edit Courses</span>
                </button>
                 <button className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-xl hover:border-accent-500 hover:shadow-md transition-all group">
                    <Users className="text-gray-400 group-hover:text-accent-500 mb-2" />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Student List</span>
                </button>
                 <button className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-xl hover:border-accent-500 hover:shadow-md transition-all group">
                    <Activity className="text-gray-400 group-hover:text-accent-500 mb-2" />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Reports</span>
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;