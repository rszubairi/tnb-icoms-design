import Layout from '../components/Layout'
import { useState } from 'react'
import { HiMiniMagnifyingGlass, HiMiniPencilSquare } from 'react-icons/hi2'

export default function ChangeRequest() {
    const [searchTerm, setSearchTerm] = useState('')

    const requests = [
        {
            id: '139344', station: 'JOH1 / PLNG', voltage: '275', equipment: '275GPTHPLNG2',
            start: '18 Feb 2026 09:00 AM', end: '19 Feb 2026 05:00 PM', code: 'P',
            job: 'Routine Maintenance', desc: 'Routine Maintenance by SUBD & PROA team. Site coordination pending confirmation.'
        },
        {
            id: '139538', station: 'JOH1 / SHTE', voltage: '132', equipment: '132SHTESHTW2',
            start: '22 Feb 2026 09:00 AM', end: '23 Feb 2026 05:00 PM', code: 'P',
            job: 'Routine Maintenance', desc: 'Routine Maintenance by SUBD & PROA team.'
        },
        {
            id: '139250', station: 'JOH1 / GPTH', voltage: '275', equipment: '275GPTHPLNG1',
            start: '22 Feb 2026 09:00 AM', end: '23 Feb 2026 05:00 PM', code: 'P',
            job: 'Routine Maintenance', desc: 'Routine Maintenance by SUBD & PROA.'
        },
        {
            id: '139326', station: 'JOH1 / MAJD', voltage: '132', equipment: '132MAJDPMJY1',
            start: '22 Feb 2026 09:00 AM', end: '23 Feb 2026 05:00 PM', code: 'P',
            job: 'Routine Maintenance', desc: 'Routine Maintenance by SUBD & PROA.'
        },
        {
            id: '149722', station: 'MLKA / KLMK', voltage: '275', equipment: '275KLMKSMTI2',
            start: '25 Feb 2026 09:00 AM', end: '27 Feb 2026 05:30 PM', code: 'P',
            job: 'Testing', desc: 'Live Protection Maintenance (LPM) for Main 1 and Main 2 Relay 275kV PMU KLMK - SMTI 2.'
        },
    ]

    const filtered = requests.filter(r =>
        searchTerm === '' ||
        r.id.includes(searchTerm) ||
        r.station.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <Layout title="Change Request">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 mb-2 font-display">Planned Outage Request Change List</h1>
                    <p className="text-gray-500 font-medium tracking-tight">
                        Users can request changes to outage information not within the 7-week block. <span className="text-gso-blue font-bold">{filtered.length}</span> requests eligible.
                    </p>
                </div>
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
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Start / End Date</th>
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Region / Station</th>
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">kV Level / Equipment</th>
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Job Description</th>
                                <th className="text-center px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((r) => (
                                <tr key={r.id} className="border-t border-gray-50 hover:bg-gray-50/50 transition-colors">
                                    <td className="px-4 py-3">
                                        <span className="text-xs font-black text-gso-blue bg-tnblue-50 px-2 py-1 rounded-lg whitespace-nowrap">{r.id}</span>
                                    </td>
                                    <td className="px-4 py-3 whitespace-nowrap">
                                        <p className="text-xs font-bold text-gray-900">{r.start}</p>
                                        <p className="text-[11px] text-gray-400">to {r.end}</p>
                                    </td>
                                    <td className="px-4 py-3 text-xs font-bold text-gray-800 whitespace-nowrap">{r.station}</td>
                                    <td className="px-4 py-3">
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">kV {r.voltage} · Code {r.code}</p>
                                        <p className="text-xs font-bold text-gray-800">{r.equipment}</p>
                                    </td>
                                    <td className="px-4 py-3 max-w-[300px]">
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{r.job}</p>
                                        <p className="text-xs text-gray-600 leading-snug mt-0.5">{r.desc}</p>
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        <button className="btn-outline text-[10px] px-3 py-1.5 flex items-center gap-1 mx-auto">
                                            <HiMiniPencilSquare className="w-3.5 h-3.5" />
                                            Request for Change
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}
