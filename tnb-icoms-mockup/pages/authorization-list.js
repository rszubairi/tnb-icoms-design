import Layout from '../components/Layout'
import { useState } from 'react'
import { HiMiniArrowDownTray, HiMiniMagnifyingGlass } from 'react-icons/hi2'

export default function AuthorizationList() {
    const [tab, setTab] = useState('Long Authorization')
    const [searchTerm, setSearchTerm] = useState('')

    const longAuth = [
        {
            id: '48879', authNo: 'RISPB11811', station: 'TERG / TKLG (AM-TERG)', voltage: '275',
            start: '9 Jun 2014 12:00 PM', end: '31 Jan 2017 12:00 AM', duration: '966 Days, 12 Hour(s)',
            job: '275PWSMTKLG2', desc: 'Disconnection of supply - under SGM TNBD (Operasi Wilayah 2) instruction.'
        },
        {
            id: '81418', authNo: 'RISPB15191', station: 'KLUM / SRDN (AM-KLUM)', voltage: '132',
            start: '12 Jan 2016 10:00 PM', end: '31 Dec 2018 12:00 AM', duration: '1083 Days, 2 Hour(s)',
            job: '132kV GCB GT2 290', desc: 'SLA Expired. To dismantle generator.'
        },
        {
            id: '81417', authNo: 'RISPB15470', station: 'KLUM / SRDG (AM-KLUM)', voltage: '275',
            start: '23 Apr 2016 10:00 PM', end: '31 Dec 2018 12:00 AM', duration: '981 Days, 2 Hour(s)',
            job: '275KV GCB GT3 M30', desc: 'SLA Expired.'
        },
        {
            id: '75364', authNo: 'G266816', station: 'KLUM / KULS (AM-KLUM)', voltage: '132',
            start: '9 Mar 2017 12:00 AM', end: '28 Feb 2018 12:00 AM', duration: '356 Days, 0 Hour(s)',
            job: '132KULSNSPK1', desc: 'Tripping'
        },
    ]

    const inForce = [
        {
            id: '153291', station: 'PPNG / KLIM', voltage: '132', equipment: '132/33kV 90MVA T1',
            start: '1 Dec 2025 12:00 AM', end: '5 Dec 2025 06:00 PM', duration: '4 Days, 18 Hour(s)', status: 'Taken-Completed',
            desc: 'To perform oil replacement for KLIM T1. WPF test failed during routine maintenance.'
        },
        {
            id: '153203', station: 'JOH1 / DBAY', voltage: '132', equipment: '132/33kV 90MVA T2',
            start: '1 Dec 2025 12:00 AM', end: '5 Dec 2025 11:30 PM', duration: '4 Days, 23 Hour(s)', status: 'Taken-Completed',
            desc: 'Testing feeder 33kv dan ROP Stability. Outage requested by DN.'
        },
        {
            id: '152014', station: 'NSEM / PDPS', voltage: '275', equipment: '275PDPSRTAU2',
            start: '1 Dec 2025 08:00 AM', end: '3 Dec 2025 06:00 PM', duration: '2 Days, 10 Hour(s)', status: 'Taken-Completed',
            desc: 'OUTAGE WORKS - Reinstall ACWS (T17 - T36) = 67 NOS & (T70 - T71) = 3 NOS. Contractor: BINADAM SDN BHD.'
        },
    ]

    const tabs = ['Long Authorization', 'Authorization List']
    const data = tab === 'Long Authorization' ? longAuth : inForce
    const filtered = data.filter(o => searchTerm === '' || o.id.includes(searchTerm) || o.station.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
        <Layout title="Authorization List">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 mb-2 font-display">Authorization List</h1>
                    <p className="text-gray-500 font-medium tracking-tight">
                        Total in-force records: <span className="text-gso-blue font-bold">{filtered.length}</span>
                    </p>
                </div>
                <div className="mt-4 md:mt-0 flex space-x-3">
                    <button className="btn-outline flex items-center">
                        <HiMiniArrowDownTray className="w-4 h-4 mr-2" />
                        Export Excel
                    </button>
                    <button className="btn-outline flex items-center">
                        <HiMiniArrowDownTray className="w-4 h-4 mr-2" />
                        Export PDF
                    </button>
                </div>
            </div>

            <div className="flex gap-2 mb-6">
                {tabs.map((t) => (
                    <button
                        key={t}
                        onClick={() => setTab(t)}
                        className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                            tab === t ? 'bg-gso-green text-white shadow-gso' : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-100'
                        }`}
                    >
                        {t}
                    </button>
                ))}
            </div>

            <div className="card mb-6">
                <div className="p-4">
                    <div className="relative">
                        <HiMiniMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by ID or Station..."
                            className="form-input h-11 pl-10"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="card overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50/80 border-b border-gray-100">
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">ID</th>
                                {tab === 'Long Authorization' && <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Auth No</th>}
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Region / Station</th>
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">kV</th>
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Duration</th>
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Equipment / Job Info</th>
                                {tab === 'Authorization List' && <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Status</th>}
                                <th className="text-center px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((o, idx) => {
                                const isOverdue = tab === 'Long Authorization'
                                return (
                                    <tr key={`${o.id}-${idx}`} className={`border-t border-gray-50 transition-colors ${isOverdue ? 'bg-rose-50/60 hover:bg-rose-50' : 'hover:bg-gray-50/50'}`}>
                                        <td className="px-4 py-3">
                                            <span className={`text-xs font-black px-2 py-1 rounded-lg whitespace-nowrap ${isOverdue ? 'text-rose-700 bg-rose-100' : 'text-gso-blue bg-tnblue-50'}`}>{o.id}</span>
                                        </td>
                                        {tab === 'Long Authorization' && (
                                            <td className="px-4 py-3 text-xs font-medium text-gray-600 whitespace-nowrap">{o.authNo}</td>
                                        )}
                                        <td className="px-4 py-3 text-xs font-bold text-gray-800 whitespace-nowrap">{o.station}</td>
                                        <td className="px-4 py-3 text-xs text-gray-600 whitespace-nowrap">{o.voltage}kV</td>
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            <p className={`text-xs font-bold ${isOverdue ? 'text-rose-600' : 'text-gray-800'}`}>{o.duration}</p>
                                            <p className="text-[11px] text-gray-400">{o.start} — {o.end}</p>
                                        </td>
                                        <td className="px-4 py-3 max-w-[260px]">
                                            <p className="text-xs font-bold text-gray-800">{o.job || o.equipment}</p>
                                            <p className="text-[11px] text-gray-500 leading-snug mt-0.5">{o.desc}</p>
                                        </td>
                                        {tab === 'Authorization List' && (
                                            <td className="px-4 py-3">
                                                <span className="status-badge status-confirmed text-[10px] whitespace-nowrap">{o.status}</span>
                                            </td>
                                        )}
                                        <td className="px-4 py-3 text-center">
                                            <button className="btn-outline text-[10px] px-3 py-1.5">Review</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}
