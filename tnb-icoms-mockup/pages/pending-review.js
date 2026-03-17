import Layout from '../components/Layout'
import { useState } from 'react'

export default function PendingReview() {
    const [selectedOutages, setSelectedOutages] = useState([])

    const outages = [
        {
            id: 'OUT-2024-005',
            station: 'SDNK',
            voltage: '132kV',
            equipment: 'TR-001',
            type: 'Planned',
            start: '2024-04-10 08:00',
            end: '2024-04-10 17:00',
            status: 'Pending Review',
            requestor: 'Ahmad Fauzi',
            zone: 'KL'
        },
        {
            id: 'OUT-2024-006',
            station: 'GPTH',
            voltage: '275kV',
            equipment: 'CB-102',
            type: 'Unplanned',
            start: '2024-04-11 09:00',
            end: '2024-04-11 13:00',
            status: 'Pending Review',
            requestor: 'Siti Aminah',
            zone: 'Selangor'
        },
        {
            id: 'OUT-2024-007',
            station: 'SIDC',
            voltage: '500kV',
            equipment: 'Busbar A',
            type: 'Emergency',
            start: '2024-04-08 14:00',
            end: '2024-04-08 18:00',
            status: 'Pending Review',
            requestor: 'Tan Boon Hock',
            zone: 'KL'
        },
        {
            id: 'OUT-2024-008',
            station: 'KJTN',
            voltage: '132kV',
            equipment: 'Line 1',
            type: 'Planned',
            start: '2024-04-15 08:00',
            end: '2024-04-15 17:00',
            status: 'Pending Review',
            requestor: 'M. Rajan',
            zone: 'Eastern'
        }
    ]

    const toggleSelection = (id) => {
        if (selectedOutages.includes(id)) {
            setSelectedOutages(selectedOutages.filter(item => item !== id))
        } else {
            setSelectedOutages([...selectedOutages, id])
        }
    }

    const selectAll = () => {
        if (selectedOutages.length === outages.length) {
            setSelectedOutages([])
        } else {
            setSelectedOutages(outages.map(o => o.id))
        }
    }

    return (
        <Layout title="Pending Review">
            <div className="mb-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Outages Pending Review</h1>
                        <p className="mt-1 text-sm text-gray-600">Review and agree to pending outage requests for your zone</p>
                    </div>
                    <div className="flex space-x-3">
                        <button 
                            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={selectedOutages.length === 0}
                        >
                            Bulk Agree ({selectedOutages.length})
                        </button>
                        <button className="btn-outline">
                            Filters
                        </button>
                    </div>
                </div>
            </div>

            <div className="card overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left">
                                <input 
                                    type="checkbox" 
                                    checked={selectedOutages.length === outages.length}
                                    onChange={selectAll}
                                    className="rounded border-gray-300 text-tnblue-primary focus:ring-tnblue-primary"
                                />
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Outage ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Station / Zone</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Equipment</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Schedule</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requestor</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {outages.map((outage) => (
                            <tr key={outage.id} className="hover:bg-gray-50 transition-colors duration-150">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <input 
                                        type="checkbox" 
                                        checked={selectedOutages.includes(outage.id)}
                                        onChange={() => toggleSelection(outage.id)}
                                        className="rounded border-gray-300 text-tnblue-primary focus:ring-tnblue-primary"
                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-bold text-tnblue-primary">{outage.id}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">{outage.station}</div>
                                    <div className="text-xs text-gray-500">{outage.zone} Zone, {outage.voltage}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{outage.equipment}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`status-badge ${
                                        outage.type === 'Emergency' ? 'bg-red-100 text-red-800' :
                                        outage.type === 'Unplanned' ? 'bg-orange-100 text-orange-800' :
                                        'bg-blue-100 text-blue-800'
                                    }`}>
                                        {outage.type}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-xs text-gray-900">{outage.start}</div>
                                    <div className="text-xs text-gray-500">to {outage.end}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {outage.requestor}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <div className="flex justify-end space-x-2">
                                        <button className="text-green-600 hover:text-green-900 bg-green-50 px-2 py-1 rounded">Agree</button>
                                        <button className="text-red-600 hover:text-red-900 bg-red-50 px-2 py-1 rounded">Disagree</button>
                                        <button className="text-blue-600 hover:text-blue-900 bg-blue-50 px-2 py-1 rounded">View</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
                    <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-700">
                            Showing <span className="font-medium">1</span> to <span className="font-medium">4</span> of <span className="font-medium">4</span> results
                        </div>
                        <div className="flex-1 flex justify-end space-x-2">
                            <button className="btn-outline text-xs">Previous</button>
                            <button className="btn-outline text-xs">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
