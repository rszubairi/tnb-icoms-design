import Layout from '../components/Layout'
import { useState } from 'react'
import { HiMiniCheckCircle } from 'react-icons/hi2'

export default function Confirmation() {
    const [selected, setSelected] = useState([])

    const outages = [
        {
            id: '153203', station: 'JOH1 / DBAY', equipment: '132/33kV 90MVA T2', start: '1 Dec 2025 12:00 AM', end: '5 Dec 2025 11:30 PM',
            status: 'Agreed / Approved / Taken-Completed', desc: 'Distribution Work; Testing feeder 33kv dan ROP Stability. Outage requested by Distribution Network team.'
        },
        {
            id: '139510', station: 'JOH1 / CBRU', equipment: 'Busbar Coupler', start: '1 Dec 2025 09:00 AM', end: '2 Dec 2025 05:00 PM',
            status: 'Agreed / Approved / Taken-Completed', desc: 'Routine Maintenance by SUBD & PROA team.'
        },
        {
            id: '150173', station: 'JOH1 / TBRU', equipment: '132MAJDTBRU1', start: '1 Dec 2025 09:00 AM', end: '2 Dec 2025 05:00 PM',
            status: 'Agreed / KIVed / Pending', desc: 'Testing; TNB1721/2023 RNR RTU & RELAY PMU TBRU: END OF WARRANTY.'
        },
        {
            id: '150166', station: 'JOH1 / TBRU', equipment: '132/33kV 90MVA T4', start: '1 Dec 2025 09:00 AM', end: '2 Dec 2025 06:00 PM',
            status: 'Agreed / Approved / Taken-Completed', desc: 'Testing; TNB1721/2023 RNR RTU & RELAY PMU TBRU: END OF WARRANTY.'
        },
    ]

    const toggle = (id) => {
        setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
    }
    const selectAll = () => {
        setSelected(selected.length === outages.length ? [] : outages.map(o => o.id))
    }

    return (
        <Layout title="Confirmation">
            <div className="mb-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-4xl font-black text-gray-900 mb-2 font-display">Confirmation Page</h1>
                        <p className="text-gray-500 font-medium tracking-tight">
                            With the new MGC rules, outages agreed by the regional controller must be confirmed a minimum of 14 days prior to schedule, or they are automatically revoked.
                        </p>
                    </div>
                    <button
                        className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed flex items-center"
                        disabled={selected.length === 0}
                    >
                        <HiMiniCheckCircle className="w-4 h-4 mr-2" />
                        Confirm Selected ({selected.length})
                    </button>
                </div>
            </div>

            <div className="card overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50/80 border-b border-gray-100">
                                <th className="text-center px-4 py-3 w-10">
                                    <input type="checkbox" checked={selected.length === outages.length} onChange={selectAll} className="rounded border-gray-300 text-gso-green focus:ring-gso-green/30" />
                                </th>
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">ID</th>
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Start / End</th>
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Region / Station</th>
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Equipment / Description</th>
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Region / OPU / NLDC Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {outages.map((o) => (
                                <tr key={o.id} className={`border-t border-gray-50 transition-colors ${selected.includes(o.id) ? 'bg-gso-green-50/40' : 'hover:bg-gray-50/50'}`}>
                                    <td className="px-4 py-3 text-center">
                                        <input type="checkbox" checked={selected.includes(o.id)} onChange={() => toggle(o.id)} className="rounded border-gray-300 text-gso-green focus:ring-gso-green/30" />
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className="text-xs font-black text-gso-blue bg-tnblue-50 px-2 py-1 rounded-lg whitespace-nowrap">{o.id}</span>
                                    </td>
                                    <td className="px-4 py-3 whitespace-nowrap">
                                        <p className="text-xs font-bold text-gray-900">{o.start}</p>
                                        <p className="text-[11px] text-gray-400">to {o.end}</p>
                                    </td>
                                    <td className="px-4 py-3 text-xs font-bold text-gray-800 whitespace-nowrap">{o.station}</td>
                                    <td className="px-4 py-3 max-w-[320px]">
                                        <p className="text-xs font-bold text-gray-800">{o.equipment}</p>
                                        <p className="text-[11px] text-gray-500 leading-snug mt-0.5">{o.desc}</p>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className="status-badge status-confirmed text-[10px] whitespace-nowrap">{o.status}</span>
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
