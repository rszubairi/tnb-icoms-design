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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {authorizations.map((auth) => (
                    <div key={auth.id} className={`card ${auth.bgColor} border-2 ${auth.indicatorColor === 'bg-red-500' ? 'border-red-200 shadow-lg' : 'border-gray-200'}`}>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-2">
                                    <span className={`w-3 h-3 rounded-full animate-pulse ${auth.indicatorColor}`}></span>
                                    <span className={`text-sm font-bold uppercase ${auth.color}`}>{auth.status}</span>
                                </div>
                                <div className="text-xs font-medium text-gray-500">{auth.id}</div>
                            </div>
                            
                            <h3 className="text-lg font-bold text-gray-900 mb-1">{auth.equipment} @ {auth.station}</h3>
                            <p className="text-sm text-gray-600 mb-4">{auth.zone} Zone • {auth.voltage}</p>
                            
                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Authorized At:</span>
                                    <span className="font-medium text-gray-800">{auth.startTime}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Est. Restoration:</span>
                                    <span className="font-medium text-gray-800">{auth.estimatedRestoration}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-t border-gray-200 mt-2">
                                    <span className="text-sm font-bold text-gray-700">Time Remaining:</span>
                                    <span className={`text-xl font-mono font-bold ${auth.color}`}>{auth.timeRemaining}</span>
                                </div>
                            </div>
                            
                            <div className="flex space-x-2">
                                <button className="flex-1 btn-outline bg-white text-xs">Request Ext.</button>
                                <button className="flex-1 btn-primary text-xs">Authorize Restore</button>
                            </div>
                        </div>
                    </div>
                ))}
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
