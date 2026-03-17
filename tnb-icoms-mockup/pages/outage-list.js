import Layout from '../components/Layout'
import { HiMiniMagnifyingGlass, HiMiniFunnel, HiMiniArrowPath, HiMiniArrowDownTray, HiMiniChevronLeft, HiMiniChevronRight, HiMiniEye, HiMiniChevronDown, HiMiniChevronUp } from 'react-icons/hi2'
import { useState, Fragment } from 'react'

export default function OutageList() {
    const [searchTerm, setSearchTerm] = useState('')
    const [statusFilter, setStatusFilter] = useState('All')
    const [expandedRows, setExpandedRows] = useState({})

    const toggleRow = (id) => {
        setExpandedRows(prev => ({ ...prev, [id]: !prev[id] }))
    }

    const outages = [
        {
            id: 'OUT-2026-001',
            type: 'Planned',
            date: '17 Mar 2026',
            time: '08:00 — 16:00',
            equipmentType: 'Transformer',
            equipment: 'TR-001 SDNK 132/33kV',
            description: 'Routine maintenance and oil sampling on power transformer TR-001 at Substation Sendayan',
            status: 'Confirmed',
            studyRemarks: 'No system constraint identified. Approved for execution.',
            plannerStatus: 'TOMS Approved',
        },
        {
            id: 'OUT-2026-002',
            type: 'Unplanned',
            date: '17 Mar 2026',
            time: '02:15 — TBD',
            equipmentType: 'Transmission Line',
            equipment: 'GPTH-SDNK Line 2 132kV',
            description: 'Emergency inspection due to fault report — suspected conductor damage near tower T47',
            status: 'In-Study',
            studyRemarks: 'Constraint analysis in progress. Awaiting load flow results.',
            plannerStatus: 'GNC Reviewing',
        },
        {
            id: 'OUT-2026-003',
            type: 'Planned',
            date: '18 Mar 2026',
            time: '09:00 — 17:00',
            equipmentType: 'Circuit Breaker',
            equipment: 'CB-132-05 GPTH',
            description: 'Scheduled replacement of aging 132kV circuit breaker at Genting Peras Timur Hilir substation',
            status: 'Pending',
            studyRemarks: 'Pending security assessment for N-1 contingency.',
            plannerStatus: 'TOMS Pending',
        },
        {
            id: 'OUT-2026-004',
            type: 'Planned',
            date: '19 Mar 2026',
            time: '22:00 — 06:00',
            equipmentType: 'Bus Section',
            equipment: 'BS-275-01 OLKL',
            description: 'Bus section isolator maintenance and contact resistance testing at Olak Lempit Kuala Langat',
            status: 'Confirmed',
            studyRemarks: 'Night shift approved. No load transfer required.',
            plannerStatus: 'TOMS Approved',
        },
        {
            id: 'OUT-2026-005',
            type: 'Unplanned',
            date: '16 Mar 2026',
            time: '14:30 — 18:45',
            equipmentType: 'Transmission Line',
            equipment: 'KKSR-PKLG Line 1 275kV',
            description: 'Vegetation encroachment clearance along 275kV corridor — hot-spot detected via drone patrol',
            status: 'Completed',
            studyRemarks: 'Clearance completed. Line re-energized at 18:45.',
            plannerStatus: 'GNC Closed',
        },
        {
            id: 'OUT-2026-006',
            type: 'Planned',
            date: '20 Mar 2026',
            time: '08:00 — 12:00',
            equipmentType: 'Protection Relay',
            equipment: 'PR-500-02 JNHP',
            description: 'Relay setting update and functional testing on 500kV line protection system at Jambatan Perak',
            status: 'Pending',
            studyRemarks: 'Awaiting protection coordination study from TNB Research.',
            plannerStatus: 'TOMS Pending',
        },
        {
            id: 'OUT-2026-007',
            type: 'Planned',
            date: '21 Mar 2026',
            time: '10:00 — 15:00',
            equipmentType: 'Transformer',
            equipment: 'AT-500/275-01 YGPN',
            description: 'Auto-transformer tap changer inspection and winding resistance measurement at Yong Peng North',
            status: 'In-Study',
            studyRemarks: 'Load diversion plan under review. Alternative supply via KLJG required.',
            plannerStatus: 'GNC Reviewing',
        },
        {
            id: 'OUT-2026-008',
            type: 'Unplanned',
            date: '15 Mar 2026',
            time: '23:10 — 03:40',
            equipmentType: 'Cable',
            equipment: 'UGC-132-03 PJDR',
            description: 'Underground cable fault — repair of 132kV XLPE cable joint failure at Petaling Jaya Damansara',
            status: 'Completed',
            studyRemarks: 'Emergency repair completed. Cable tested and re-energized.',
            plannerStatus: 'TOMS Closed',
        },
    ]

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Confirmed': return 'bg-gso-green-50 text-gso-green-dark border-gso-green/20'
            case 'In-Study': return 'bg-amber-50 text-amber-700 border-amber-200'
            case 'Pending': return 'bg-blue-50 text-blue-700 border-blue-200'
            case 'Completed': return 'bg-gray-100 text-gray-600 border-gray-200'
            default: return 'bg-gray-50 text-gray-500 border-gray-200'
        }
    }

    const getTypeStyle = (type) => {
        switch (type) {
            case 'Planned': return 'bg-gso-blue/10 text-gso-blue border-gso-blue/20'
            case 'Unplanned': return 'bg-rose-50 text-rose-600 border-rose-200'
            default: return 'bg-gray-50 text-gray-500 border-gray-200'
        }
    }

    const getPlannerStyle = (status) => {
        if (status.includes('Approved') || status.includes('Closed')) return 'text-gso-green-dark font-bold'
        if (status.includes('Reviewing')) return 'text-amber-600 font-bold'
        if (status.includes('Pending')) return 'text-blue-600 font-bold'
        return 'text-gray-500 font-bold'
    }

    const statuses = ['All', 'Confirmed', 'In-Study', 'Pending', 'Completed']

    const filteredOutages = outages.filter(o => {
        const matchesSearch = searchTerm === '' ||
            o.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            o.equipment.toLowerCase().includes(searchTerm.toLowerCase()) ||
            o.description.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesStatus = statusFilter === 'All' || o.status === statusFilter
        return matchesSearch && matchesStatus
    })

    return (
        <Layout title="Outage List">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 mb-2 font-display">Outage List</h1>
                    <p className="text-gray-500 font-medium tracking-tight">
                        Showing <span className="text-gso-blue font-bold">{filteredOutages.length}</span> outage records
                    </p>
                </div>
                <div className="mt-4 md:mt-0 flex space-x-3">
                    <button className="btn-outline flex items-center">
                        <HiMiniArrowDownTray className="w-4 h-4 mr-2" />
                        Export
                    </button>
                    <button className="btn-primary flex items-center">
                        <HiMiniArrowPath className="w-4 h-4 mr-2" />
                        Refresh
                    </button>
                </div>
            </div>

            {/* Filters Bar */}
            <div className="card mb-6">
                <div className="p-4 flex flex-col md:flex-row md:items-center gap-4">
                    <div className="relative flex-1">
                        <HiMiniMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by Outage ID, equipment, or description..."
                            className="form-input h-11 pl-10"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <HiMiniFunnel className="w-4 h-4 text-gray-400" />
                        <div className="flex space-x-1">
                            {statuses.map((s) => (
                                <button
                                    key={s}
                                    onClick={() => setStatusFilter(s)}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                                        statusFilter === s
                                            ? 'bg-gso-green text-white shadow-gso'
                                            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                    }`}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Outage Table */}
            <div className="card overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50/80 border-b border-gray-100">
                                <th className="text-center px-3 py-4 text-[10px] font-black text-gray-500 uppercase tracking-widest w-10"></th>
                                <th className="text-left px-6 py-4 text-[10px] font-black text-gray-500 uppercase tracking-widest">Outage ID</th>
                                <th className="text-left px-6 py-4 text-[10px] font-black text-gray-500 uppercase tracking-widest">Type</th>
                                <th className="text-left px-6 py-4 text-[10px] font-black text-gray-500 uppercase tracking-widest">Date & Time</th>
                                <th className="text-left px-6 py-4 text-[10px] font-black text-gray-500 uppercase tracking-widest">Equipment Type / Equipment</th>
                                <th className="text-left px-6 py-4 text-[10px] font-black text-gray-500 uppercase tracking-widest">Status</th>
                                <th className="text-left px-6 py-4 text-[10px] font-black text-gray-500 uppercase tracking-widest">Understudy / Remarks</th>
                                <th className="text-left px-6 py-4 text-[10px] font-black text-gray-500 uppercase tracking-widest">Planner / TOMS / GNC</th>
                                <th className="text-center px-4 py-4 text-[10px] font-black text-gray-500 uppercase tracking-widest"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredOutages.map((outage) => (
                                <Fragment key={outage.id}>
                                    <tr
                                        className={`hover:bg-gray-50/50 transition-colors group cursor-pointer border-t border-gray-50 ${expandedRows[outage.id] ? 'bg-gray-50/30' : ''}`}
                                        onClick={() => toggleRow(outage.id)}
                                    >
                                        <td className="px-3 py-4 text-center">
                                            <button className={`p-1 rounded-md transition-all ${expandedRows[outage.id] ? 'text-gso-green bg-gso-green/10' : 'text-gray-300 group-hover:text-gray-500'}`}>
                                                {expandedRows[outage.id]
                                                    ? <HiMiniChevronUp className="w-4 h-4" />
                                                    : <HiMiniChevronDown className="w-4 h-4" />
                                                }
                                            </button>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-xs font-black text-gso-blue bg-tnblue-50 px-2.5 py-1 rounded-lg whitespace-nowrap">
                                                {outage.id}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`text-[10px] font-black px-2.5 py-1 rounded-full border uppercase tracking-wider whitespace-nowrap ${getTypeStyle(outage.type)}`}>
                                                {outage.type}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-sm font-bold text-gray-900 whitespace-nowrap">{outage.date}</p>
                                            <p className="text-xs text-gray-400 font-medium mt-0.5 whitespace-nowrap">{outage.time}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{outage.equipmentType}</p>
                                            <p className="text-sm font-bold text-gray-800 mt-0.5">{outage.equipment}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`text-[10px] font-black px-3 py-1.5 rounded-full border uppercase tracking-wider whitespace-nowrap ${getStatusStyle(outage.status)}`}>
                                                {outage.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 max-w-[200px]">
                                            <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{outage.studyRemarks}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`text-xs whitespace-nowrap ${getPlannerStyle(outage.plannerStatus)}`}>
                                                {outage.plannerStatus}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4 text-center">
                                            <button
                                                className="p-2 text-gray-300 hover:text-gso-green transition-colors opacity-0 group-hover:opacity-100"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <HiMiniEye className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </tr>
                                    {/* Embedded Description Row */}
                                    {expandedRows[outage.id] && (
                                        <tr className="bg-gray-50/50">
                                            <td colSpan={9} className="px-6 py-0">
                                                <div className="py-4 pl-10 pr-6 border-l-2 border-gso-green/30 ml-3">
                                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Description</p>
                                                    <p className="text-sm text-gray-700 leading-relaxed">{outage.description}</p>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>

                {filteredOutages.length === 0 && (
                    <div className="p-16 text-center">
                        <p className="text-gray-400 font-bold">No outages found matching your criteria.</p>
                    </div>
                )}

                {/* Pagination */}
                <div className="p-4 border-t border-gray-100 flex items-center justify-between">
                    <p className="text-xs font-bold text-gray-400">
                        Showing <span className="text-gray-700">{filteredOutages.length}</span> of <span className="text-gray-700">{outages.length}</span> records
                    </p>
                    <div className="flex items-center space-x-2">
                        <button className="p-2 rounded-lg bg-gray-100 text-gray-400 hover:bg-gray-200 transition-colors">
                            <HiMiniChevronLeft className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-gso-green text-white text-xs font-bold shadow-gso">1</button>
                        <button className="w-8 h-8 rounded-lg bg-gray-100 text-gray-500 text-xs font-bold hover:bg-gray-200 transition-colors">2</button>
                        <button className="w-8 h-8 rounded-lg bg-gray-100 text-gray-500 text-xs font-bold hover:bg-gray-200 transition-colors">3</button>
                        <button className="p-2 rounded-lg bg-gray-100 text-gray-400 hover:bg-gray-200 transition-colors">
                            <HiMiniChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
