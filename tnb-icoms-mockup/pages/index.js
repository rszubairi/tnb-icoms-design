import Layout from '../components/Layout'
import { HiMiniClipboardDocumentList, HiMiniClock, HiMiniCheckBadge, HiMiniExclamationTriangle, HiMiniPlusCircle, HiMiniCalendarDays, HiMiniArchiveBox } from 'react-icons/hi2'

export default function Dashboard() {
    const stats = [
        {
            name: 'Pending Review',
            value: '12',
            change: '+2.5%',
            trend: 'up',
            icon: <HiMiniClipboardDocumentList className="w-6 h-6" />,
            gradient: 'from-amber-500 to-amber-600'
        },
        {
            name: 'In-Study',
            value: '08',
            change: '-1',
            trend: 'down',
            icon: <HiMiniClock className="w-6 h-6" />,
            gradient: 'from-gso-blue to-gso-blue-dark'
        },
        {
            name: 'Active Auth',
            value: '15',
            change: '+3',
            trend: 'up',
            icon: <HiMiniCheckBadge className="w-6 h-6" />,
            gradient: 'from-gso-green to-gso-green-dark'
        },
        {
            name: 'Emergency',
            value: '03',
            change: 'Critical',
            trend: 'neutral',
            icon: <HiMiniExclamationTriangle className="w-6 h-6" />,
            gradient: 'from-rose-500 to-rose-600'
        }
    ]

    const recentActivity = [
        {
            id: 'OUT-2024-001',
            title: 'Transformer Maintenance - SDNK',
            equipment: 'TR-001 SDNK 132/33kV',
            type: 'Planned',
            status: 'Confirmed',
            time: '17 Mar 08:00 - 16:00',
            description: 'Routine maintenance on 132kV transformer TR-001'
        },
        {
            id: 'OUT-2024-002',
            title: 'Line Inspection - GPTH-SDNK',
            equipment: 'GPTH-SDNK Line 2 132kV',
            type: 'Unplanned',
            status: 'Pending',
            time: '17 Mar 02:15 - TBD',
            description: 'Emergency inspection due to fault report on Line 2'
        },
        {
            id: 'OUT-2024-003',
            title: 'Circuit Breaker Replacement',
            equipment: 'CB-132-05 GPTH',
            type: 'Planned',
            status: 'In-Study',
            time: '18 Mar 09:00 - 17:00',
            description: 'Scheduled replacement of aging equipment at GPTH'
        },
        {
            id: 'OUT-2024-004',
            title: 'Bus Section Isolator Maintenance',
            equipment: 'BS-275-01 OLKL',
            type: 'Planned',
            status: 'Confirmed',
            time: '19 Mar 22:00 - 06:00',
            description: 'Night shift maintenance, no load transfer required'
        },
        {
            id: 'OUT-2024-005',
            title: 'Vegetation Clearance',
            equipment: 'KKSR-PKLG Line 1 275kV',
            type: 'Unplanned',
            status: 'Completed',
            time: '16 Mar 14:30 - 18:45',
            description: 'Hot-spot detected via drone patrol, clearance completed'
        },
        {
            id: 'OUT-2024-006',
            title: 'Protection Relay Testing',
            equipment: 'PR-500-02 JNHP',
            type: 'Planned',
            status: 'Pending',
            time: '20 Mar 08:00 - 12:00',
            description: 'Relay setting update pending protection coordination study'
        }
    ]

    const quickActions = [
        {
            title: 'Create Request',
            description: 'Submit new outage',
            icon: <HiMiniPlusCircle className="w-6 h-6" />,
            href: '/outage-creation',
        },
        {
            title: 'Outage Calendar',
            description: 'View 5-week schedule',
            icon: <HiMiniCalendarDays className="w-6 h-6" />,
            href: '/calendar',
        },
        {
            title: 'Historical Data',
            description: 'Access repository',
            icon: <HiMiniArchiveBox className="w-6 h-6" />,
            href: '/data-repository',
        }
    ]

    return (
        <Layout title="Operations Overview">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 mb-2 font-display">Dashboard</h1>
                    <p className="text-gray-500 font-medium tracking-tight">
                        Logged in as <span className="text-gso-blue font-bold">Abdul Rahman (TOMS Admin)</span>
                    </p>
                </div>
                <div className="mt-4 md:mt-0 flex space-x-3">
                    <button className="btn-outline">Download Summary</button>
                    <button className="btn-primary">Quick Creation</button>
                </div>
            </div>

            {/* Compact Stats Strip */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                {stats.map((stat) => (
                    <div key={stat.name} className="card p-3 flex items-center gap-3">
                        <div className={`w-9 h-9 shrink-0 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-white text-sm shadow`}>
                            {stat.icon}
                        </div>
                        <div className="min-w-0">
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest truncate">{stat.name}</p>
                            <div className="flex items-baseline gap-1.5">
                                <p className="text-2xl font-black text-gray-900 font-display leading-none">{stat.value}</p>
                                <span className={`text-[10px] font-bold hidden md:inline ${
                                    stat.trend === 'up' ? 'text-gso-green-dark' :
                                    stat.trend === 'down' ? 'text-rose-600' : 'text-gray-500'
                                }`}>{stat.change}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Actions - compact row, desktop only extras */}
            <div className="flex flex-wrap gap-2 mb-6">
                {quickActions.map((action) => (
                    <a
                        key={action.title}
                        href={action.href}
                        className="flex items-center px-3 py-2 rounded-xl bg-tnblue-dark text-white hover:bg-gso-green/90 transition-all group text-sm"
                    >
                        <span className="mr-2">{action.icon}</span>
                        <span className="font-bold">{action.title}</span>
                        <span className="hidden lg:inline text-white/50 ml-2 text-xs">{action.description}</span>
                    </a>
                ))}
                <div className="ml-auto hidden md:flex items-center gap-4 text-xs px-2">
                    <span className="flex items-center gap-1.5 text-gray-500 font-bold">
                        <span className="w-1.5 h-1.5 bg-gso-green rounded-full"></span> DB 99.9% Uptime
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-500 font-bold">
                        <span className="w-1.5 h-1.5 bg-gso-green rounded-full"></span> GSO Sync Live
                    </span>
                </div>
            </div>

            {/* System Activity Table - dense, full-width */}
            <div className="card overflow-hidden">
                <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                    <h2 className="text-sm font-bold font-display">System Activity</h2>
                    <button className="text-[10px] font-bold text-gso-green uppercase tracking-widest hover:underline transition-all">View Full Audit Log</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50/80 border-b border-gray-100">
                                <th className="text-left px-4 py-2 text-[10px] font-black text-gray-500 uppercase tracking-widest">Outage ID</th>
                                <th className="text-left px-4 py-2 text-[10px] font-black text-gray-500 uppercase tracking-widest">Title</th>
                                <th className="text-left px-4 py-2 text-[10px] font-black text-gray-500 uppercase tracking-widest hidden md:table-cell">Equipment</th>
                                <th className="text-left px-4 py-2 text-[10px] font-black text-gray-500 uppercase tracking-widest hidden md:table-cell">Date & Time</th>
                                <th className="text-left px-4 py-2 text-[10px] font-black text-gray-500 uppercase tracking-widest hidden lg:table-cell">Type</th>
                                <th className="text-left px-4 py-2 text-[10px] font-black text-gray-500 uppercase tracking-widest">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentActivity.map((activity) => (
                                <tr key={activity.id} className="border-t border-gray-50 hover:bg-gray-50/50 transition-colors">
                                    <td className="px-4 py-2.5">
                                        <span className="text-xs font-black text-gso-blue bg-tnblue-50 px-2 py-1 rounded-lg whitespace-nowrap">
                                            {activity.id}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2.5">
                                        <p className="text-xs font-bold text-gray-900">{activity.title}</p>
                                        <p className="text-[11px] text-gray-400 md:hidden">{activity.time}</p>
                                    </td>
                                    <td className="px-4 py-2.5 text-xs text-gray-600 hidden md:table-cell whitespace-nowrap">{activity.equipment}</td>
                                    <td className="px-4 py-2.5 text-xs text-gray-500 hidden md:table-cell whitespace-nowrap">{activity.time}</td>
                                    <td className="px-4 py-2.5 hidden lg:table-cell">
                                        <span className="flex items-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                            <HiMiniExclamationTriangle className="w-3 h-3 mr-1" /> {activity.type}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2.5">
                                        <span className={`status-badge text-[10px] ${
                                            activity.status === 'Confirmed' ? 'status-confirmed' :
                                            activity.status === 'In-Study' ? 'status-agreed' : 'status-pending'
                                        }`}>
                                            {activity.status}
                                        </span>
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