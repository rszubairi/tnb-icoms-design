import Layout from '../components/Layout'
import { useState } from 'react'
import { HiMiniBolt, HiMiniCalendarDays, HiMiniClock } from 'react-icons/hi2'

export default function OutageStatus() {
    const [tab, setTab] = useState('Scheduled')

    const tabs = [
        { name: 'Scheduled', icon: <HiMiniCalendarDays className="w-4 h-4" /> },
        { name: 'Active', icon: <HiMiniBolt className="w-4 h-4" /> },
        { name: 'Extended', icon: <HiMiniClock className="w-4 h-4" /> },
    ]

    const data = {
        Scheduled: [
            {
                id: '153491', station: 'KEDP / KGAR', equipment: '132/33kV 45MVA T3', additional: '132/33kV 45MVA T4',
                start: '30 Dec 2026 12:30 AM', end: '30 Dec 2026 08:00 AM', restoration: 'Immediately', status: 'Approved / Pending',
                job: 'Distribution Work', description: 'Membuat Kerja Online Trip Test LHS+RHS 33kV & Relay Maintenance T3 + T4', highlight: 'DN job', remark: 'T3+T4~28MW'
            },
            {
                id: '153479', station: 'PPNG / JJNG', equipment: '275BMRHJJNG2', additional: '',
                start: '30 Dec 2026 08:00 AM', end: '31 Dec 2026 05:00 PM', restoration: '15 Mins', status: 'Approved / Pending',
                job: 'Defect Correction', description: 'Change wooden crossarm live work by team LLU MTEP (Live Work) pada menara 275kV JJNG BMRH L2 T35 BOTTOM XARM KAYU.', highlight: 'Live work by LLU', remark: 'N/A'
            },
            {
                id: '153712', station: 'JOH1 / GPTH', equipment: '275/132kV 240MVA SGT2', additional: '',
                start: '30 Dec 2026 08:30 AM', end: '30 Dec 2026 05:00 PM', restoration: '30 Mins', status: 'Approved / Pending',
                job: 'Defect Correction', description: 'SubD to repair oil leak at top cover of Bucholz Relay at ET2 by replacing gasket, to drain oil from conservator and filling back the oil.', highlight: 'Propose to close 132SDAI-GPTH NOP', remark: 'Gen Assumption: TBIN~1400MW, rem SGT~73%'
            },
            {
                id: '153987', station: 'SELG / KPNG', equipment: '132/33kV 45MVA T2', additional: '',
                start: '30 Dec 2026 10:00 PM', end: '31 Dec 2026 06:00 AM', restoration: 'More than 1 Hour', status: 'Approved / Pending',
                job: 'Distribution Work', description: 'OFF T2, 2T0. Repair CBM defect tracking at 2T0 back/cable compartment.', highlight: 'DN work', remark: 'T1+T2~8MW'
            },
        ],
        Active: [
            {
                id: '118949', station: 'TERG / TKLG', equipment: '275PWSMTKLG1', additional: '275kV Reserve Busbar',
                start: '27 Mar 2022 08:00 AM', end: '31 Dec 2025 05:00 PM', restoration: '30 Mins', status: 'Taken-Active',
                job: 'Testing (E)', description: 'To dismantle primary equipment from 275kV system for both TKLG L15 & L25. SUBD will proceed for other related work after dismantling completed.', highlight: 'PWSM & ESTL to be informed', remark: 'Gen assumption KNYR~0MW, HTRG~0MW'
            },
            {
                id: '147270', station: 'SELG / OLPT', equipment: '275OLPTELPN1', additional: '275OLPTELPN2',
                start: '29 Apr 2025 10:00 AM', end: '31 Dec 2025 05:00 PM', restoration: 'N/A', status: 'Taken-Active',
                job: 'Projects (E)', description: 'The outage is needed for New Substation PMU BTIC project and connection from BTIC to OLPT.', highlight: 'Line on soak', remark: 'N/A'
            },
            {
                id: '151386', station: 'PPNG / BTGH', equipment: '275/132kV 180MVA SGT3', additional: '',
                start: '29 Sep 2025 10:00 AM', end: '31 Dec 2026 05:00 PM', restoration: 'N/A', status: 'Taken-Active',
                job: 'Projects (E)', description: 'Outage SGT3 for dismantling cable tail and CSE. Based on discussion between GD, GM, GSO and GSE.', highlight: 'SGT3 on soak, long outage for 1 year', remark: 'N/A'
            },
        ],
        Extended: [
            {
                id: '48879', station: 'TERG / TKLG', equipment: '275PWSMTKLG2', additional: '275PWSMTKLG1',
                start: '9 Jun 2014 12:00 PM', end: '31 Jan 2017 12:00 AM', restoration: '966.5 Days', status: 'Taken-Active',
                job: 'Code: E', description: 'Disconnection of supply - under SGM TNBD (Operasi Wilayah 2) instruction.', highlight: 'Long-standing extension', remark: 'Expired authorisation, requires review'
            },
            {
                id: '81418', station: 'KLUM / SRDN', equipment: '132kV GCB GT2 290', additional: '',
                start: '12 Jan 2016 10:00 PM', end: '31 Dec 2018 12:00 AM', restoration: '1083.1 Days', status: 'Taken-Active',
                job: 'Code: E', description: 'SLA Expired. To dismantle generator.', highlight: 'Expired authorisation', remark: 'Pending dismantling schedule'
            },
        ]
    }

    const getStatusStyle = (status) => {
        if (status.includes('Active')) return 'status-confirmed'
        if (status.includes('Pending')) return 'status-pending'
        return 'status-agreed'
    }

    return (
        <Layout title="Outage Status">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 mb-2 font-display">Outage Status</h1>
                    <p className="text-gray-500 font-medium tracking-tight">
                        Real-time operational view of <span className="text-gso-blue font-bold">{data[tab].length}</span> {tab.toLowerCase()} outages
                    </p>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6">
                {tabs.map((t) => (
                    <button
                        key={t.name}
                        onClick={() => setTab(t.name)}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                            tab === t.name ? 'bg-gso-green text-white shadow-gso' : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-100'
                        }`}
                    >
                        {t.icon} {t.name} Outages
                    </button>
                ))}
            </div>

            <div className="card overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50/80 border-b border-gray-100">
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">ID</th>
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Start / End</th>
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Region / Station</th>
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Equipment Info</th>
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Job Description / Study Remark</th>
                                <th className="text-left px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Status</th>
                                <th className="text-center px-4 py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data[tab].map((o) => (
                                <tr key={o.id} className="border-t border-gray-50 hover:bg-gray-50/50 transition-colors align-top">
                                    <td className="px-4 py-3">
                                        <span className="text-xs font-black text-gso-blue bg-tnblue-50 px-2 py-1 rounded-lg whitespace-nowrap">{o.id}</span>
                                    </td>
                                    <td className="px-4 py-3 whitespace-nowrap">
                                        <p className="text-xs font-bold text-gray-900">{o.start}</p>
                                        <p className="text-[11px] text-gray-400">to {o.end}</p>
                                        <p className="text-[11px] text-gray-400 mt-0.5">Restoration: {o.restoration}</p>
                                    </td>
                                    <td className="px-4 py-3 text-xs font-bold text-gray-800 whitespace-nowrap">{o.station}</td>
                                    <td className="px-4 py-3">
                                        <p className="text-xs font-bold text-gray-800">{o.equipment}</p>
                                        {o.additional && <p className="text-[11px] text-gray-400">Additional: {o.additional}</p>}
                                    </td>
                                    <td className="px-4 py-3 max-w-[320px]">
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{o.job}</p>
                                        <p className="text-xs text-gray-700 leading-snug mt-0.5">{o.description}</p>
                                        <p className="text-[11px] text-amber-600 mt-1">Highlight: {o.highlight}</p>
                                        <p className="text-[11px] text-gray-400">Study Remark: {o.remark}</p>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className={`status-badge text-[10px] whitespace-nowrap ${getStatusStyle(o.status)}`}>{o.status}</span>
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        <button className="btn-outline text-[10px] px-3 py-1.5">Complete</button>
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
