import Layout from '../components/Layout'
import { useState } from 'react'
import { HiMiniMagnifyingGlass, HiMiniPlusCircle } from 'react-icons/hi2'

export default function OffPointList() {
    const [searchTerm, setSearchTerm] = useState('')

    const points = [
        { no: 2, zone: 'CENTRAL', station: 'DMHT', feeder: '605', offpoint: '132DMHTSGBT1', status: 'Remained' },
        { no: 3, zone: 'CENTRAL', station: 'SGBT', feeder: '905', offpoint: '132SGBTTNHQ1', status: 'Remained' },
        { no: 4, zone: 'CENTRAL', station: 'BFLD', feeder: '305', offpoint: '132BFLDDMHT1', status: 'Remained' },
        { no: 5, zone: 'CENTRAL', station: 'BFLD', feeder: '405', offpoint: '132BFLDDMHT2', status: 'Remained' },
        { no: 6, zone: 'CENTRAL', station: 'SDAM', feeder: '305', offpoint: '132KULNSDAM1', status: 'Changed', date: '12/08/2014', reason: 'KAWA SGT2 on outage', info: 'KAWA 132kV BB reconfigured' },
        { no: 7, zone: 'CENTRAL', station: 'KULN', feeder: '405', offpoint: '132KULNSDAM2', status: 'Changed', date: '12/08/2014', reason: 'KAWA SGT2 on outage', info: 'KAWA 132kV BB reconfigured' },
        { no: 8, zone: 'CENTRAL', station: 'BMKM', feeder: '130', offpoint: '132kV Bus Coupler', status: 'Remained' },
        { no: 9, zone: 'CENTRAL', station: 'KLCC', feeder: '130', offpoint: '132kV Bus Coupler', status: 'Remained' },
        { no: 10, zone: 'CENTRAL', station: 'KULW', feeder: '305', offpoint: '132KULWNSPK1', status: 'Remained' },
        { no: 11, zone: 'CENTRAL', station: 'NSPK', feeder: '405', offpoint: '132KULWNSPK2', status: 'Remained' },
        { no: 12, zone: 'CENTRAL', station: 'KULS', feeder: '105', offpoint: '132KULSNSPK1', status: 'Remained' },
        { no: 13, zone: 'CENTRAL', station: 'SPKC', feeder: '505', offpoint: '132BLKGSPKC1', status: 'Remained' },
    ]

    const filtered = points.filter(p =>
        searchTerm === '' ||
        p.station.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.offpoint.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <Layout title="Off-Point List">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 mb-2 font-display">System Status & Network Configuration</h1>
                    <p className="text-gray-500 font-medium tracking-tight">
                        Off-Point List — <span className="text-gso-blue font-bold">{filtered.length}</span> configuration records
                    </p>
                </div>
                <button className="mt-4 md:mt-0 btn-primary flex items-center">
                    <HiMiniPlusCircle className="w-4 h-4 mr-2" />
                    Create New Off-Point
                </button>
            </div>

            <div className="card mb-6">
                <div className="p-4">
                    <div className="relative">
                        <HiMiniMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by keyword..."
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
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">No</th>
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Zone</th>
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Station</th>
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Feeder</th>
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Off-Point</th>
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Status</th>
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Reason / Info</th>
                                <th className="text-center px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((p) => (
                                <tr key={p.no} className={`border-t border-gray-50 transition-colors ${p.status === 'Changed' ? 'bg-amber-50/60 hover:bg-amber-50' : 'hover:bg-gray-50/50'}`}>
                                    <td className="px-4 py-3 text-xs font-bold text-gray-400">{p.no}</td>
                                    <td className="px-4 py-3 text-xs font-bold text-gray-800">{p.zone}</td>
                                    <td className="px-4 py-3 text-xs font-bold text-gray-800">{p.station}</td>
                                    <td className="px-4 py-3 text-xs text-gray-600">{p.feeder}</td>
                                    <td className="px-4 py-3 text-xs font-medium text-gray-700 whitespace-nowrap">{p.offpoint}</td>
                                    <td className="px-4 py-3">
                                        <span className={`text-[10px] font-black px-2.5 py-1 rounded-full border uppercase tracking-wider whitespace-nowrap ${
                                            p.status === 'Changed' ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-gso-green-50 text-gso-green-dark border-gso-green/20'
                                        }`}>
                                            {p.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 max-w-[240px]">
                                        {p.reason && (
                                            <>
                                                <p className="text-[11px] text-gray-600">{p.date} — {p.reason}</p>
                                                <p className="text-[11px] text-gray-400">{p.info}</p>
                                            </>
                                        )}
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        <button className="btn-outline text-[10px] px-3 py-1.5">Update</button>
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
