import Layout from '../components/Layout'
import { useState } from 'react'

export default function Authorization() {
    const [selectedZone, setSelectedZone] = useState('All')

    const authorizations = [
        {
            id: 'AUTH-2024-101',
            outageId: 'OUT-2024-001',
            equipment: 'TR-001',
            station: 'SDNK',
            zone: 'KL',
            voltage: '132kV',
            startTime: '2024-04-10 08:30',
            estimatedRestoration: '2024-04-10 17:00',
            timeRemaining: '04:15:22',
            status: 'Authorized',
            color: 'text-green-600',
            bgColor: 'bg-green-50',
            indicatorColor: 'bg-green-500'
        },
        {
            id: 'AUTH-2024-102',
            outageId: 'OUT-2024-002',
            equipment: 'CB-102',
            station: 'GPTH',
            zone: 'Selangor',
            voltage: '275kV',
            startTime: '2024-04-10 09:15',
            estimatedRestoration: '2024-04-10 13:00',
            timeRemaining: '00:15:10',
            status: 'Expiring Soon',
            color: 'text-yellow-600',
            bgColor: 'bg-yellow-50',
            indicatorColor: 'bg-yellow-500'
        },
        {
            id: 'AUTH-2024-103',
            outageId: 'OUT-2024-003',
            equipment: 'Line A',
            station: 'SIDC',
            zone: 'KL',
            voltage: '500kV',
            startTime: '2024-04-10 07:00',
            estimatedRestoration: '2024-04-10 15:00',
            timeRemaining: '-1:45:10',
            status: 'Overdue',
            color: 'text-red-600',
            bgColor: 'bg-red-50',
            indicatorColor: 'bg-red-500'
        }
    ]

    return (
        <Layout title="Authorization in Force">
            <div className="mb-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Authorization in Force</h1>
                        <p className="mt-1 text-sm text-gray-600">Real-time monitoring of active outage authorizations and execution status</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <select 
                            className="btn-outline text-sm"
                            value={selectedZone}
                            onChange={(e) => setSelectedZone(e.target.value)}
                        >
                            <option value="All">All Zones</option>
                            <option value="KL">KL Zone</option>
                            <option value="Selangor">Selangor Zone</option>
                            <option value="Eastern">Eastern Zone</option>
                        </select>
                        <button className="btn-primary">
                            Manual Extension
                        </button>
                    </div>
                </div>
            </div>

            <div className="card overflow-hidden mb-8">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50/80 border-b border-gray-100">
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Status</th>
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Auth ID</th>
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Equipment / Station</th>
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Zone / Voltage</th>
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Authorized At</th>
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Est. Restoration</th>
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Time Remaining</th>
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {authorizations.map((auth) => (
                                <tr key={auth.id} className={`border-t border-gray-50 ${auth.bgColor}`}>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center space-x-2">
                                            <span className={`w-2 h-2 rounded-full animate-pulse ${auth.indicatorColor}`}></span>
                                            <span className={`text-xs font-bold uppercase whitespace-nowrap ${auth.color}`}>{auth.status}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-xs font-medium text-gray-500 whitespace-nowrap">{auth.id}</td>
                                    <td className="px-4 py-3">
                                        <p className="text-sm font-bold text-gray-900 whitespace-nowrap">{auth.equipment} @ {auth.station}</p>
                                    </td>
                                    <td className="px-4 py-3 text-xs text-gray-600 whitespace-nowrap">{auth.zone} Zone • {auth.voltage}</td>
                                    <td className="px-4 py-3 text-xs font-medium text-gray-800 whitespace-nowrap">{auth.startTime}</td>
                                    <td className="px-4 py-3 text-xs font-medium text-gray-800 whitespace-nowrap">{auth.estimatedRestoration}</td>
                                    <td className="px-4 py-3">
                                        <span className={`text-sm font-mono font-bold whitespace-nowrap ${auth.color}`}>{auth.timeRemaining}</span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex space-x-2">
                                            <button className="btn-outline bg-white text-[10px] px-2 py-1">Request Ext.</button>
                                            <button className="btn-primary text-[10px] px-2 py-1">Authorize Restore</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="card p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Live Execution Timeline</h2>
                <div className="relative pt-1">
                    <div className="flex items-center justify-between mb-2">
                        <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-tnblue-primary bg-blue-100">
                                Total Active Load: 450.2 MW
                            </span>
                        </div>
                        <div className="text-right">
                            <span className="text-xs font-semibold inline-block text-tnblue-primary">
                                75% System Margin
                            </span>
                        </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-100">
                        <div style={{ width: "75%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-tnblue-primary"></div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
