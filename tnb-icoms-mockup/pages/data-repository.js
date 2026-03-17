import Layout from '../components/Layout'
import { useState } from 'react'

export default function DataRepository() {
    const [searchTerm, setSearchTerm] = useState('')

    const historyData = [
        {
            id: 'OUT-2023-982',
            station: 'SDNK',
            voltage: '132kV',
            equipment: 'TR-001',
            type: 'Planned',
            start: '2023-10-15',
            end: '2023-10-15',
            status: 'Completed',
            restoration: '15 Mins'
        },
        {
            id: 'OUT-2023-981',
            station: 'GPTH',
            voltage: '275kV',
            equipment: 'CB-102',
            type: 'Unplanned',
            start: '2023-10-14',
            end: '2023-10-14',
            status: 'Completed',
            restoration: '30 Mins'
        },
        {
            id: 'OUT-2023-980',
            station: 'SIDC',
            voltage: '500kV',
            equipment: 'Busbar A',
            type: 'Emergency',
            start: '2023-10-12',
            end: '2023-10-12',
            status: 'Completed',
            restoration: '45 Mins'
        },
        {
            id: 'OUT-2023-979',
            station: 'KJTN',
            voltage: '132kV',
            equipment: 'Line 1',
            type: 'Planned',
            start: '2023-10-10',
            end: '2023-10-10',
            status: 'Completed',
            restoration: '15 Mins'
        },
        {
            id: 'OUT-2023-978',
            station: 'PJSN',
            voltage: '132kV',
            equipment: 'TR-002',
            type: 'Planned',
            start: '2023-10-09',
            end: '2023-10-09',
            status: 'Completed',
            restoration: '15 Mins'
        }
    ]

    return (
        <Layout title="Data Repository">
            <div className="mb-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Data Repository</h1>
                        <p className="mt-1 text-sm text-gray-600">Access historical outage data and comprehensive system logs</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <button className="btn-outline flex items-center">
                            <span className="mr-2">📥</span> Export (CSV)
                        </button>
                        <button className="btn-outline flex items-center">
                            <span className="mr-2">📄</span> Export (PDF)
                        </button>
                        <button className="btn-primary">
                            Advanced Search
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="md:col-span-3">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search by ID, Station, Equipment, or Requestor..."
                            className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tnblue-primary text-sm shadow-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
                    </div>
                </div>
                <div className="md:col-span-1">
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tnblue-primary text-sm shadow-sm bg-white">
                        <option value="">Filter by Status</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                        <option value="Discarded">Discarded</option>
                    </select>
                </div>
            </div>

            <div className="card overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Outage ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Equipment</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Schedule</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Restoration</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {historyData.map((data) => (
                            <tr key={data.id} className="hover:bg-gray-50 transition-colors duration-150">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-bold text-tnblue-primary">{data.id}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">{data.station}</div>
                                    <div className="text-xs text-gray-500">{data.voltage} Voltage Level</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{data.equipment}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-xs text-gray-900">{data.start}</div>
                                    <div className="text-xs text-gray-500">to {data.end}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">{data.restoration}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="status-badge bg-green-100 text-green-800">
                                        {data.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                                    <button className="text-tnblue-primary hover:text-tnblue-dark font-medium transition-colors">
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
                    <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-700">
                            Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">245</span> results
                        </div>
                        <div className="flex-1 flex justify-end space-x-2">
                            <button className="btn-outline text-xs">Previous</button>
                            <button className="btn-outline text-xs bg-tnblue-primary text-white border-tnblue-primary">1</button>
                            <button className="btn-outline text-xs">2</button>
                            <button className="btn-outline text-xs">3</button>
                            <button className="btn-outline text-xs">Next</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <div className="card p-6 border-l-4 border-tnblue-primary bg-blue-50">
                    <div className="flex items-center space-x-4">
                        <div className="text-3xl text-tnblue-primary shrink-0">ℹ️</div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">Historical Insights</h3>
                            <p className="text-sm text-gray-600 mt-1">Historically, most planned outages in the KL Zone occur during the second week of each month. Plan accordingly to avoid congestion in the approval pipeline.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
