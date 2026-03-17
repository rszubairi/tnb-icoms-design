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
            type: 'Planned',
            status: 'Confirmed',
            time: '2 hours ago',
            description: 'Routine maintenance on 132kV transformer TR-001'
        },
        {
            id: 'OUT-2024-002',
            title: 'Line Inspection - GPTH-SDNK',
            type: 'Unplanned',
            status: 'Pending',
            time: '4 hours ago',
            description: 'Emergency inspection due to fault report on Line 2'
        },
        {
            id: 'OUT-2024-003',
            title: 'Circuit Breaker Replacement',
            type: 'Planned',
            status: 'In-Study',
            time: '1 day ago',
            description: 'Scheduled replacement of aging equipment at GPTH'
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

            {/* Premium Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {stats.map((stat) => (
                    <div key={stat.name} className="card group hover-scale p-1 overflow-hidden">
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-white text-xl shadow-lg transform group-hover:rotate-6 transition-transform`}>
                                    {stat.icon}
                                </div>
                                <span className={`text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-widest ${
                                    stat.trend === 'up' ? 'bg-gso-green-50 text-gso-green-dark' :
                                    stat.trend === 'down' ? 'bg-rose-50 text-rose-600' : 'bg-gray-50 text-gray-600'
                                }`}>
                                    {stat.change}
                                </span>
                            </div>
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.name}</p>
                            <p className="text-4xl font-black text-gray-900 font-display">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Activity Section */}
                <div className="lg:col-span-2">
                    <div className="card h-full">
                        <div className="p-8 border-b border-gray-50 flex items-center justify-between">
                            <h2 className="text-xl font-bold font-display">System Activity</h2>
                            <button className="text-xs font-bold text-gso-green uppercase tracking-widest hover:underline transition-all">View Full Audit Log</button>
                        </div>
                        <div className="p-4">
                            {recentActivity.map((activity, idx) => (
                                <div
                                    key={activity.id}
                                    className={`p-6 rounded-2xl hover:bg-gray-50 transition-all cursor-pointer group ${
                                        idx !== recentActivity.length - 1 ? 'mb-2' : ''
                                    }`}
                                >
                                    <div className="flex items-start justify-between mb-2">
                                        <div className="flex items-center space-x-3">
                                            <span className="text-xs font-black text-gso-blue bg-tnblue-50 px-2.5 py-1 rounded-lg">
                                                {activity.id}
                                            </span>
                                            <h3 className="font-bold text-gray-900 group-hover:text-gso-green transition-colors">{activity.title}</h3>
                                        </div>
                                        <span className={`status-badge text-[10px] ${
                                            activity.status === 'Confirmed' ? 'status-confirmed' :
                                            activity.status === 'In-Study' ? 'status-agreed' : 'status-pending'
                                        }`}>
                                            {activity.status}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500 mb-4 line-clamp-1">{activity.description}</p>
                                    <div className="flex items-center text-[10px] font-bold text-gray-400 uppercase tracking-widest space-x-4">
                                        <span className="flex items-center"><HiMiniClock className="w-3 h-3 mr-1" /> {activity.time}</span>
                                        <span className="flex items-center"><HiMiniExclamationTriangle className="w-3 h-3 mr-1" /> {activity.type} Outage</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quick Actions & Navigation */}
                <div className="lg:col-span-1 space-y-8">
                    <div className="card p-8 bg-tnblue-dark text-white overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gso-green/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                        <h2 className="text-xl font-bold font-display mb-6 relative z-10">Quick Actions</h2>
                        <div className="space-y-4 relative z-10">
                            {quickActions.map((action) => (
                                <a
                                    key={action.title}
                                    href={action.href}
                                    className="flex items-center p-4 rounded-xl bg-white/5 hover:bg-gso-green/10 border border-white/10 hover:border-gso-green/30 transition-all group"
                                >
                                    <span className="text-2xl mr-4 text-white/60 group-hover:text-gso-green group-hover:scale-125 transition-all">{action.icon}</span>
                                    <div>
                                        <p className="font-bold text-sm leading-none mb-1">{action.title}</p>
                                        <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold">{action.description}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="card p-8 border-l-4 border-gso-green">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-bold font-display">System Health</h2>
                            <span className="w-2 h-2 bg-gso-green rounded-full"></span>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between text-xs">
                                <span className="font-bold text-gray-500 uppercase tracking-widest">Database Cluster</span>
                                <span className="text-gso-green-dark font-black">99.9% Uptime</span>
                            </div>
                            <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-gso-green w-[99.9%]"></div>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                                <span className="font-bold text-gray-500 uppercase tracking-widest">GSO Mainframe Sync</span>
                                <span className="text-gso-green-dark font-black">Live</span>
                            </div>
                            <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-gso-green w-[85%]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}