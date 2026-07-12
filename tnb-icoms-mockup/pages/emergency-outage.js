import Layout from '../components/Layout'
import { useState } from 'react'
import { HiMiniMagnifyingGlass, HiMiniPlusCircle } from 'react-icons/hi2'

export default function EmergencyOutage() {
    const [searchTerm, setSearchTerm] = useState('')

    const outages = [
        {
            id: '154037', station: 'JOH1 / PMJY', equipment: '132kV 60MVar Shunt Capacitor',
            start: '29 Dec 2026 05:00 PM', end: '30 Dec 2026 05:00 PM', duration: '1 Day, 0 Hour(s)',
            enteredBy: 'A. Rahman', category: 'Tripping (F)', description: 'PMJY CB145 tripped at 1534hrs'
        },
        {
            id: '154012', station: 'JOH1 / TRMN', equipment: '132PGRGTRMN1', additional: '132/11kV 7.5MVA T2, 132/33kV 90MVA T4, 132kV MAIN BUSBAR RHS of 120',
            start: '28 Dec 2026 09:00 PM', end: '28 Dec 2026 11:00 PM', duration: '0 Day(s), 2 Hour(s)',
            enteredBy: 'S. Aminah', category: 'Fault Investigation (F)', description: 'Isolation to investigate CB305(DSRU)'
        },
        {
            id: '154013', station: 'JOH1 / TRMN', equipment: '132DSRUTRMN1',
            start: '28 Dec 2026 09:00 PM', end: '29 Dec 2026 02:00 AM', duration: '0 Day(s), 5 Hour(s)',
            enteredBy: 'S. Aminah', category: 'Fault Investigation (F)', description: 'Investigate CB305(DSRU)'
        },
        {
            id: '153957', station: 'KELN / SJTH', equipment: '132/33kV 45MVA T1',
            start: '23 Dec 2026 07:30 PM', end: '23 Dec 2026 05:00 PM', duration: '0 Day(s), -2 Hour(s)',
            enteredBy: 'T. Boon Hock', category: 'Tripping (E)', description: 'Investigate tripping'
        },
        {
            id: '153956', station: 'JOH1 / PLTG', equipment: '230PLTG Spare bay',
            start: '23 Dec 2026 03:00 PM', end: '31 Dec 2026 11:30 PM', duration: '373 Day(s), 8 Hour(s)',
            enteredBy: 'M. Rajan', category: 'Others (E)', description: 'L55 Spare bay. Bphs SA transfer to L65.'
        },
        {
            id: '153881', station: 'JOH2 / TPCH', equipment: '132/11kV 30MVA T1',
            start: '17 Dec 2026 03:00 PM', end: '17 Dec 2026 08:00 PM', duration: '0 Day(s), 5 Hour(s)',
            enteredBy: 'A. Rahman', category: 'Defect Correction (E)', description: 'DN job, repair defect at cable tail 31'
        },
    ]

    const categoryStyle = (cat) => {
        if (cat.includes('Tripping')) return 'bg-rose-50 text-rose-600 border-rose-200'
        if (cat.includes('Fault')) return 'bg-amber-50 text-amber-700 border-amber-200'
        if (cat.includes('Defect')) return 'bg-blue-50 text-blue-700 border-blue-200'
        return 'bg-gray-50 text-gray-600 border-gray-200'
    }

    const filtered = outages.filter(o =>
        searchTerm === '' ||
        o.id.includes(searchTerm) ||
        o.station.toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.description.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <Layout title="Emergency Outage">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 mb-2 font-display">Emergency / Forced Outage List</h1>
                    <p className="text-gray-500 font-medium tracking-tight">
                        <span className="text-rose-600 font-bold">{filtered.length}</span> requests submitted to NLDC/GSO
                    </p>
                </div>
                <button className="mt-4 md:mt-0 btn-primary flex items-center bg-rose-500 hover:bg-rose-600 shadow-none">
                    <HiMiniPlusCircle className="w-4 h-4 mr-2" />
                    Submit Emergency Outage
                </button>
            </div>

            <div className="card mb-6">
                <div className="p-4">
                    <div className="relative">
                        <HiMiniMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by ID, Station, or Description..."
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
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Date Info</th>
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Region / Station</th>
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Equipment Info</th>
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Category</th>
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Description</th>
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Entered By</th>
                                <th className="text-center px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((o) => (
                                <tr key={o.id} className="border-t border-gray-50 hover:bg-gray-50/50 transition-colors">
                                    <td className="px-4 py-3">
                                        <span className="text-xs font-black text-gso-blue bg-tnblue-50 px-2 py-1 rounded-lg whitespace-nowrap">{o.id}</span>
                                    </td>
                                    <td className="px-4 py-3 whitespace-nowrap">
                                        <p className="text-xs font-bold text-gray-900">{o.start}</p>
                                        <p className="text-[11px] text-gray-400">to {o.end}</p>
                                        <p className="text-[11px] text-gray-400">{o.duration}</p>
                                    </td>
                                    <td className="px-4 py-3 text-xs font-bold text-gray-800 whitespace-nowrap">{o.station}</td>
                                    <td className="px-4 py-3">
                                        <p className="text-xs font-bold text-gray-800">{o.equipment}</p>
                                        {o.additional && <p className="text-[11px] text-gray-400 max-w-[220px]">{o.additional}</p>}
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className={`text-[10px] font-black px-2 py-1 rounded-full border uppercase tracking-wider whitespace-nowrap ${categoryStyle(o.category)}`}>
                                            {o.category}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 max-w-[240px]">
                                        <p className="text-xs text-gray-600 leading-snug">{o.description}</p>
                                    </td>
                                    <td className="px-4 py-3 text-xs text-gray-500 whitespace-nowrap">{o.enteredBy}</td>
                                    <td className="px-4 py-3 text-center">
                                        <div className="flex justify-center gap-2">
                                            <button className="btn-outline text-[10px] px-2.5 py-1">Edit</button>
                                            <button className="text-[10px] px-2.5 py-1 rounded-lg border-2 border-rose-400 text-rose-500 font-semibold hover:bg-rose-500 hover:text-white transition-all">Delete</button>
                                        </div>
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
