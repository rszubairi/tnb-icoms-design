import Layout from '../components/Layout'

export default function Dashboard() {
    const stats = [
        {
            name: 'Outages Pending Review',
            value: '12',
            change: '+2',
            changeType: 'increase',
            icon: '📋',
            color: 'bg-yellow-500'
        },
        {
            name: 'Outages Pending Approval',
            value: '8',
            change: '-1',
            changeType: 'decrease',
            icon: '⏳',
            color: 'bg-blue-500'
        },
        {
            name: 'Active Authorizations',
            value: '15',
            change: '+3',
            changeType: 'increase',
            icon: '✅',
            color: 'bg-green-500'
        },
        {
            name: 'KIV Outages',
            value: '5',
            change: '0',
            changeType: 'neutral',
            icon: '⏸️',
            color: 'bg-gray-500'
        }
    ]

    const recentActivity = [
        {
            id: 'OUT-2024-001',
            title: 'Transformer Maintenance - SDNK',
            type: 'Planned',
            status: 'Confirmed',
            time: '2 hours ago',
            description: 'Routine maintenance on 132kV transformer'
        },
        {
            id: 'OUT-2024-002',
            title: 'Line Inspection - GPTH-SDNK',
            type: 'Unplanned',
            status: 'Pending Review',
            time: '4 hours ago',
            description: 'Emergency inspection due to fault report'
        },
        {
            id: 'OUT-2024-003',
            title: 'Circuit Breaker Replacement',
            type: 'Planned',
            status: 'Approved',
            time: '1 day ago',
            description: 'Scheduled replacement of aging equipment'
        },
        {
            id: 'OUT-2024-004',
            title: 'SCADA System Upgrade',
            type: 'Project',
            status: 'Under Study',
            time: '2 days ago',
            description: 'System upgrade for improved monitoring'
        }
    ]

    const quickActions = [
        {
            title: 'Create New Outage',
            description: 'Submit a new outage request',
            icon: '➕',
            color: 'bg-tnblue-primary',
            href: '/outage-creation'
        },
        {
            title: 'Review Pending Outages',
            description: 'Review outages requiring approval',
            icon: '📋',
            color: 'bg-yellow-500',
            href: '/pending-review'
        },
        {
            title: 'View Calendar',
            description: 'View outage schedule',
            icon: '📅',
            color: 'bg-green-500',
            href: '/calendar'
        },
        {
            title: 'Generate Reports',
            description: 'Create custom reports',
            icon: '📈',
            color: 'bg-purple-500',
            href: '/reports'
        }
    ]

    return (
        <Layout>
            {/* Page Header */}
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                        <p className="mt-1 text-sm text-gray-600">
                            Welcome back, Abdul Rahman. Here's what's happening with your outages today.
                        </p>
                    </div>
                    <div className="flex space-x-3">
                        <button className="btn-primary">
                            Quick Create
                        </button>
                        <button className="btn-outline">
                            Help
                        </button>
                    </div>
                </div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat) => (
                    <div key={stat.name} className="card p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                                <p className={`text-sm mt-1 ${stat.changeType === 'increase' ? 'text-green-600' :
                                        stat.changeType === 'decrease' ? 'text-red-600' : 'text-gray-600'
                                    }`}>
                                    {stat.changeType !== 'neutral' && (
                                        <span className="inline-flex items-center">
                                            {stat.changeType === 'increase' ? '↗' : '↘'}
                                            <span className="ml-1">{stat.change}</span>
                                        </span>
                                    )}
                                </p>
                            </div>
                            <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center text-white text-xl`}>
                                {stat.icon}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Quick Actions */}
                <div className="lg:col-span-1">
                    <div className="card p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
                        <div className="space-y-3">
                            {quickActions.map((action) => (
                                <a
                                    key={action.title}
                                    href={action.href}
                                    className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                                >
                                    <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center text-white text-lg mr-4 group-hover:scale-110 transition-transform duration-200`}>
                                        {action.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900">{action.title}</h3>
                                        <p className="text-sm text-gray-600">{action.description}</p>
                                    </div>
                                    <div className="ml-auto text-gray-400 group-hover:text-tnblue-primary transition-colors duration-200">
                                        →
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="lg:col-span-2">
                    <div className="card p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
                            <a href="#" className="text-tnblue-primary text-sm font-medium hover:text-tnblue-dark">
                                View All
                            </a>
                        </div>
                        <div className="space-y-4">
                            {recentActivity.map((activity) => (
                                <div key={activity.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-tnblue-secondary rounded-lg flex items-center justify-center text-white font-bold">
                                            {activity.icon}
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center space-x-2">
                                            <h3 className="text-sm font-medium text-gray-900">{activity.title}</h3>
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                {activity.type}
                                            </span>
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${activity.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                                                    activity.status === 'Pending Review' ? 'bg-yellow-100 text-yellow-800' :
                                                        activity.status === 'Approved' ? 'bg-blue-100 text-blue-800' :
                                                            'bg-gray-100 text-gray-800'
                                                }`}>
                                                {activity.status}
                                            </span>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-600">{activity.description}</p>
                                        <div className="mt-2 flex items-center space-x-4 text-xs text-gray-500">
                                            <span>{activity.id}</span>
                                            <span>•</span>
                                            <span>{activity.time}</span>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <button className="text-gray-400 hover:text-gray-600">
                                            <span className="text-lg">⋮</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* System Status */}
            <div className="mt-8">
                <div className="card p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-900">System Status</h2>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span>All systems operational</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                                ✓
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">Database</p>
                                <p className="text-sm text-gray-600">Connected</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                                ✓
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">Authentication</p>
                                <p className="text-sm text-gray-600">Active</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3 p-4 bg-yellow-50 rounded-lg">
                            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white">
                                ⚠
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">Backup System</p>
                                <p className="text-sm text-gray-600">Running</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}