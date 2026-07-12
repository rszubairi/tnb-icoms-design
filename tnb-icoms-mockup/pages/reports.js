import Layout from '../components/Layout'
import { useState } from 'react'
import { HiMiniArrowDownTray, HiMiniDocumentText, HiMiniEye, HiMiniArrowPath } from 'react-icons/hi2'

export default function Reports() {
    const [states, setStates] = useState([])
    const [requestStatus, setRequestStatus] = useState([])
    const [progressStatus, setProgressStatus] = useState([])

    const stateOptions = ['JOH1', 'JOH2', 'KEDP', 'KELN', 'KLUM', 'MLKA', 'NSEM', 'PHNG', 'PPNG', 'SELG', 'TERG']
    const requestOptions = ['Pending', 'Approved', 'Disapproved', 'KIVed']
    const progressOptions = ['Pending', 'Taken-Completed', 'Taken-Active', 'Not Taken']

    const toggle = (list, setList, value) => {
        setList(list.includes(value) ? list.filter(v => v !== value) : [...list, value])
    }

    const results = [
        { id: '151970', station: 'PPNG / SPID', equipment: '132/33kV 90MVA T3', start: '1 Dec 2025', end: '3 Dec 2025', status: 'Taken-Completed', desc: 'SPID T3: Routine Maintenance (RBM 2022) Substation: Primary Routine Maintenance Protection.' },
        { id: '153291', station: 'PPNG / KLIM', equipment: '132/33kV 90MVA T1', start: '1 Dec 2025', end: '5 Dec 2025', status: 'Taken-Completed', desc: 'To perform oil replacement for KLIM T1. WPF test failed during routine maintenance.' },
        { id: '153203', station: 'JOH1 / DBAY', equipment: '132/33kV 90MVA T2', start: '1 Dec 2025', end: '5 Dec 2025', status: 'Taken-Completed', desc: 'Testing feeder 33kv dan ROP Stability. Outage requested by DN.' },
        { id: '152014', station: 'NSEM / PDPS', equipment: '275PDPSRTAU2', start: '1 Dec 2025', end: '3 Dec 2025', status: 'Taken-Completed', desc: 'OUTAGE WORKS - Reinstall ACWS (T17 - T36) = 67 NOS & (T70 - T71) = 3 NOS.' },
        { id: '153114', station: 'JOH1 / GPTH', equipment: '275GPTHSDAI1', start: '1 Dec 2025', end: '8 Dec 2025', status: 'Taken-Completed', desc: 'Tower inspection and structure study.' },
    ]

    const FilterGroup = ({ title, options, selected, onToggle }) => (
        <div className="border-t border-gray-100 pt-3 mt-3 first:border-0 first:mt-0 first:pt-0">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">{title}</p>
            <div className="space-y-1.5 max-h-32 overflow-y-auto pr-1">
                {options.map((opt) => (
                    <label key={opt} className="flex items-center gap-2 text-xs text-gray-700 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={selected.includes(opt)}
                            onChange={() => onToggle(opt)}
                            className="rounded border-gray-300 text-gso-green focus:ring-gso-green/30"
                        />
                        {opt}
                    </label>
                ))}
            </div>
        </div>
    )

    return (
        <Layout title="Reports">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 mb-2 font-display">Transmission Outage Report</h1>
                    <p className="text-gray-500 font-medium tracking-tight">Build a customised report using the filters below</p>
                </div>
                <div className="mt-4 md:mt-0 flex space-x-3">
                    <button className="btn-outline flex items-center">
                        <HiMiniArrowDownTray className="w-4 h-4 mr-2" />
                        Excel
                    </button>
                    <button className="btn-outline flex items-center">
                        <HiMiniDocumentText className="w-4 h-4 mr-2" />
                        PDF
                    </button>
                    <button className="btn-primary flex items-center">
                        <HiMiniEye className="w-4 h-4 mr-2" />
                        View
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Filter Sidebar */}
                <div className="lg:col-span-1">
                    <div className="card p-5 sticky top-6">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-sm font-bold text-gray-900">Filters</h3>
                            <button className="text-gray-400 hover:text-gray-600"><HiMiniArrowPath className="w-4 h-4" /></button>
                        </div>

                        <div className="space-y-3 mb-3">
                            <div>
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Date Start</label>
                                <input type="date" className="form-input mt-1 py-1.5 text-sm" />
                            </div>
                            <div>
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Date End</label>
                                <input type="date" className="form-input mt-1 py-1.5 text-sm" />
                            </div>
                            <div>
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Keyword</label>
                                <input type="text" placeholder="ID, station, equipment..." className="form-input mt-1 py-1.5 text-sm" />
                            </div>
                        </div>

                        <FilterGroup title="State" options={stateOptions} selected={states} onToggle={(v) => toggle(states, setStates, v)} />
                        <FilterGroup title="Request Status" options={requestOptions} selected={requestStatus} onToggle={(v) => toggle(requestStatus, setRequestStatus, v)} />
                        <FilterGroup title="Progress Status" options={progressOptions} selected={progressStatus} onToggle={(v) => toggle(progressStatus, setProgressStatus, v)} />

                        <button className="btn-primary w-full mt-4 text-sm">Apply Filters</button>
                    </div>
                </div>

                {/* Results */}
                <div className="lg:col-span-3">
                    <div className="card overflow-hidden">
                        <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                            <h2 className="text-sm font-bold font-display">Results</h2>
                            <span className="text-xs text-gray-400 font-bold">{results.length} records</span>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-50/80 border-b border-gray-100">
                                        <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">ID</th>
                                        <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Date Info</th>
                                        <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Region / Station</th>
                                        <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Equipment / Job Info</th>
                                        <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Status / Study Info</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {results.map((r) => (
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
                                                <p className="text-xs font-bold text-gray-800">{r.equipment}</p>
                                                <p className="text-[11px] text-gray-500 mt-0.5 max-w-[280px] leading-snug">{r.desc}</p>
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className="status-badge status-confirmed text-[10px] whitespace-nowrap">{r.status}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
