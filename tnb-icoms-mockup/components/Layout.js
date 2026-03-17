import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { HiMiniSquares2X2, HiMiniPlusCircle, HiMiniClipboardDocumentCheck, HiMiniArchiveBox, HiMiniCalendarDays, HiMiniShieldCheck, HiMiniBars3, HiMiniBell, HiMiniChevronRight, HiMiniExclamationTriangle, HiMiniCheckCircle, HiMiniInformationCircle, HiMiniXMark, HiMiniChevronDoubleLeft, HiMiniChevronDoubleRight, HiMiniListBullet } from 'react-icons/hi2'

export default function Layout({ children, title = 'TNB ICOMS 2.0' }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
    const [notificationsOpen, setNotificationsOpen] = useState(false)

    const notifications = [
        {
            id: 1,
            type: 'warning',
            title: 'Emergency Outage Alert',
            message: 'Unplanned outage reported on Line GPTH-SDNK 132kV. Immediate review required.',
            time: '5 min ago',
            unread: true,
        },
        {
            id: 2,
            type: 'success',
            title: 'Outage OUT-2026-047 Confirmed',
            message: 'Transformer maintenance at SDNK has been confirmed by GSO Control Centre.',
            time: '32 min ago',
            unread: true,
        },
        {
            id: 3,
            type: 'info',
            title: 'Authorization Pending Approval',
            message: 'Circuit breaker replacement at GPTH requires your authorization sign-off.',
            time: '1 hour ago',
            unread: true,
        },
        {
            id: 4,
            type: 'success',
            title: 'Weekly Report Generated',
            message: 'Outage summary report for Week 11 is now available in Data Repository.',
            time: '3 hours ago',
            unread: false,
        },
        {
            id: 5,
            type: 'info',
            title: 'System Maintenance Window',
            message: 'Scheduled ICOMS maintenance on 22 Mar 2026, 02:00 — 04:00 MYT.',
            time: '1 day ago',
            unread: false,
        },
    ]

    const getNotificationIcon = (type) => {
        switch (type) {
            case 'warning': return <HiMiniExclamationTriangle className="w-5 h-5 text-amber-500" />
            case 'success': return <HiMiniCheckCircle className="w-5 h-5 text-gso-green" />
            case 'info': return <HiMiniInformationCircle className="w-5 h-5 text-gso-blue" />
            default: return <HiMiniInformationCircle className="w-5 h-5 text-gray-400" />
        }
    }

    const navigation = [
        {
            name: 'Dashboard',
            href: '/',
            icon: <HiMiniSquares2X2 className="w-5 h-5" />
        },
        {
            name: 'Outage List',
            href: '/outage-list',
            icon: <HiMiniListBullet className="w-5 h-5" />
        },
        {
            name: 'Outage Creation',
            href: '/outage-creation',
            icon: <HiMiniPlusCircle className="w-5 h-5" />
        },
        {
            name: 'Pending Review',
            href: '/pending-review',
            icon: <HiMiniClipboardDocumentCheck className="w-5 h-5" />
        },
        {
            name: 'Data Repository',
            href: '/data-repository',
            icon: <HiMiniArchiveBox className="w-5 h-5" />
        },
        {
            name: 'Calendar',
            href: '/calendar',
            icon: <HiMiniCalendarDays className="w-5 h-5" />
        },
        {
            name: 'Authorization',
            href: '/authorization',
            icon: <HiMiniShieldCheck className="w-5 h-5" />
        },
    ]

    return (
        <div className="min-h-screen bg-enterprise-background">
            <Head>
                <title>{`${title} | TNB ICOMS 2.0`}</title>
                <meta name="description" content="TNB Integrated Commissioning and Outage Management System" />
            </Head>

            {/* Mobile sidebar backdrop */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-50 bg-tnblue-dark/40 backdrop-blur-sm md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* GSO Branded Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 transform transition-all duration-300 ease-in-out bg-tnblue-dark text-white border-r border-white/5 shadow-2xl ${
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } ${sidebarCollapsed ? 'md:w-20' : 'md:w-72'} w-72 md:translate-x-0`}
            >
                <div className="flex flex-col h-full">
                    {/* GSO Logo Header */}
                    <div className={`border-b border-white/10 transition-all duration-300 ${sidebarCollapsed ? 'p-3' : 'p-6'}`}>
                        <div className={`flex items-center ${sidebarCollapsed ? 'justify-center' : 'space-x-3'} mb-3`}>
                            <img
                                src="/images/gso-logo.png"
                                alt="GSO Logo"
                                className={`w-auto transition-all duration-300 ${sidebarCollapsed ? 'h-8' : 'h-10'}`}
                            />
                        </div>
                        {!sidebarCollapsed && (
                            <>
                                <div className="flex items-center space-x-2">
                                    <div className="h-px flex-1 bg-gradient-to-r from-gso-green/50 to-transparent"></div>
                                </div>
                                <div className="mt-3 flex items-center space-x-2">
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-gso-green/20 border border-gso-green/30">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gso-green mr-1.5 animate-pulse"></span>
                                        <span className="text-[9px] font-bold text-gso-green uppercase tracking-widest">ICOMS 2.0</span>
                                    </span>
                                    <span className="text-[9px] font-medium text-white/30 uppercase tracking-wider">Enterprise</span>
                                </div>
                            </>
                        )}
                        {sidebarCollapsed && (
                            <div className="flex justify-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-gso-green animate-pulse"></span>
                            </div>
                        )}
                    </div>

                    <nav className={`flex-1 overflow-y-auto py-6 space-y-1 transition-all duration-300 ${sidebarCollapsed ? 'px-2' : 'px-3'}`}>
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                title={sidebarCollapsed ? item.name : undefined}
                                className={`group flex items-center text-sm font-semibold rounded-xl hover:bg-gso-green/10 hover:text-gso-green transition-all duration-200 ${
                                    sidebarCollapsed ? 'justify-center px-2 py-3' : 'px-4 py-3'
                                }`}
                            >
                                <span className={`text-white/60 group-hover:text-gso-green group-hover:scale-110 transition-all ${sidebarCollapsed ? '' : 'mr-3'}`}>{item.icon}</span>
                                {!sidebarCollapsed && (
                                    <>
                                        <span className="text-white/80 group-hover:text-white">{item.name}</span>
                                        <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-gso-green">
                                            <HiMiniChevronRight className="w-4 h-4" />
                                        </span>
                                    </>
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Collapse toggle — desktop only */}
                    <div className="hidden md:flex px-3 pb-2 justify-center">
                        <button
                            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                            className="w-full flex items-center justify-center p-2 rounded-xl text-white/40 hover:text-gso-green hover:bg-white/5 transition-all"
                            title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                        >
                            {sidebarCollapsed
                                ? <HiMiniChevronDoubleRight className="w-4 h-4" />
                                : <HiMiniChevronDoubleLeft className="w-4 h-4" />
                            }
                            {!sidebarCollapsed && <span className="ml-2 text-xs font-bold">Collapse</span>}
                        </button>
                    </div>

                    <div className={`border-t border-white/5 bg-black/20 transition-all duration-300 ${sidebarCollapsed ? 'p-2' : 'p-4'}`}>
                        <div className={`flex items-center mb-3 ${sidebarCollapsed ? 'justify-center p-1' : 'space-x-3 p-2'}`}>
                            <div className={`rounded-full bg-gradient-to-br from-gso-green to-gso-green-dark flex items-center justify-center font-bold border-2 border-gso-green/30 shadow-gso transition-all duration-300 ${
                                sidebarCollapsed ? 'w-9 h-9 text-xs' : 'w-10 h-10 text-sm'
                            }`}>
                                AR
                            </div>
                            {!sidebarCollapsed && (
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-bold truncate">Abdul Rahman</p>
                                    <p className="text-[10px] text-gso-green uppercase tracking-wider font-bold">Grid Admin</p>
                                </div>
                            )}
                        </div>
                        {!sidebarCollapsed && (
                            <Link
                                href="/login"
                                className="w-full py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold transition-colors text-center block border border-white/5 hover:border-white/10"
                            >
                                Sign Out
                            </Link>
                        )}
                    </div>
                </div>
            </aside>

            {/* Main Content Interface */}
            <div className={`transition-all duration-300 ${sidebarCollapsed ? 'md:pl-20' : 'md:pl-72'}`}>
                {/* Top Nav with GSO accent */}
                <header className="navbar-enterprise">
                    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                        <div className="flex items-center">
                            {/* Mobile: open overlay sidebar */}
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="md:hidden p-2 -ml-2 mr-4 text-gray-500 hover:text-gso-green transition-colors"
                            >
                                <HiMiniBars3 className="w-6 h-6" />
                            </button>
                            {/* Desktop: toggle collapse */}
                            <button
                                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                                className="hidden md:flex p-2 -ml-2 mr-4 text-gray-400 hover:text-gso-green transition-colors"
                                title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                            >
                                <HiMiniBars3 className="w-5 h-5" />
                            </button>
                            <h2 className="text-lg font-bold text-gray-800 hidden md:block">
                                <span className="text-gso-green font-black mr-2">//</span>
                                {title}
                            </h2>
                        </div>

                        <div className="flex items-center space-x-6">
                            <div className="hidden lg:flex items-center space-x-2 px-4 py-1.5 bg-gso-green-50 rounded-full border border-gso-green/20">
                                <span className="w-2 h-2 bg-gso-green rounded-full animate-pulse"></span>
                                <span className="text-[10px] font-bold text-gso-green-dark uppercase tracking-widest">Grid Online</span>
                            </div>

                            <div className="relative">
                                <button
                                    onClick={() => setNotificationsOpen(!notificationsOpen)}
                                    className="relative p-2 text-gray-400 hover:text-gso-blue transition-colors"
                                >
                                    <HiMiniBell className="w-6 h-6" />
                                    <span className="absolute top-0 right-0 w-4 h-4 bg-enterprise-error text-[10px] font-bold text-white rounded-full flex items-center justify-center animate-bounce">
                                        {notifications.filter(n => n.unread).length}
                                    </span>
                                </button>

                                {/* Notifications Dropdown */}
                                {notificationsOpen && (
                                    <>
                                        <div className="fixed inset-0 z-40" onClick={() => setNotificationsOpen(false)} />
                                        <div className="absolute right-0 top-full mt-2 w-96 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 overflow-hidden">
                                            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                                                <div className="flex items-center space-x-2">
                                                    <h3 className="font-bold text-gray-900 font-display">Notifications</h3>
                                                    <span className="text-[10px] font-black bg-enterprise-error text-white px-1.5 py-0.5 rounded-full">
                                                        {notifications.filter(n => n.unread).length} NEW
                                                    </span>
                                                </div>
                                                <button
                                                    onClick={() => setNotificationsOpen(false)}
                                                    className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                                                >
                                                    <HiMiniXMark className="w-5 h-5" />
                                                </button>
                                            </div>
                                            <div className="max-h-96 overflow-y-auto">
                                                {notifications.map((notification) => (
                                                    <div
                                                        key={notification.id}
                                                        className={`p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer ${
                                                            notification.unread ? 'bg-gso-green-50/30' : ''
                                                        }`}
                                                    >
                                                        <div className="flex items-start space-x-3">
                                                            <div className="flex-shrink-0 mt-0.5">
                                                                {getNotificationIcon(notification.type)}
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <div className="flex items-center justify-between mb-1">
                                                                    <p className="text-sm font-bold text-gray-900 truncate">{notification.title}</p>
                                                                    {notification.unread && (
                                                                        <span className="w-2 h-2 bg-gso-green rounded-full flex-shrink-0 ml-2"></span>
                                                                    )}
                                                                </div>
                                                                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">{notification.message}</p>
                                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2">{notification.time}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="p-3 border-t border-gray-100 bg-gray-50/50">
                                                <button className="w-full text-xs font-bold text-gso-green hover:text-gso-green-dark transition-colors uppercase tracking-widest py-1">
                                                    View All Notifications
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>

                            <div className="h-8 w-px bg-gray-100"></div>

                            <div className="flex items-center space-x-3">
                                <div className="text-right hidden sm:block">
                                    <p className="text-xs font-black text-gray-900 leading-none">SEL + NS ZONE</p>
                                    <p className="text-[10px] text-gray-400 font-bold mt-1">GNC Authorized</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="p-8">
                    <div className="max-w-7xl mx-auto min-h-screen">
                        {children}
                    </div>
                </main>

                <footer className="mt-20 border-t border-gray-100 bg-white p-8">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center opacity-60">
                        <div className="flex items-center space-x-4 mb-4 md:mb-0">
                            <img
                                src="/images/gso-logo.png"
                                alt="GSO"
                                className="h-6 w-auto opacity-50"
                            />
                            <p className="text-xs font-bold text-gray-600">
                                TNB ICOMS 2.0 • Grid System Operator
                            </p>
                        </div>
                        <div className="flex space-x-8 text-xs font-bold text-gray-500">
                            <a href="#" className="hover:text-gso-green transition-colors">Security Protocol</a>
                            <a href="#" className="hover:text-gso-green transition-colors">Audit Logs</a>
                            <a href="#" className="hover:text-gso-green transition-colors">Technical Support</a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}