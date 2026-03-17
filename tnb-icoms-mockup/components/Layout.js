import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Layout({ children, title = 'TNB ICOMS 2.0' }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const navigation = [
        { name: 'Dashboard', href: '/', icon: '📊' },
        { name: 'Outage Creation', href: '/outage-creation', icon: '➕' },
        { name: 'Pending Review', href: '/pending-review', icon: '📋' },
        { name: 'Data Repository', href: '/data-repository', icon: '📁' },
        { name: 'Calendar', href: '/calendar', icon: '📅' },
        { name: 'Authorization', href: '/authorization', icon: '✅' },
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

            {/* Enhanced Enterprise Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 w-72 transform transition-all duration-300 ease-in-out md:translate-x-0 ${
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } bg-tnblue-dark text-white border-r border-white/5 shadow-2xl`}
            >
                <div className="flex flex-col h-full">
                    <div className="p-8 border-b border-white/5 flex items-center space-x-4">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
                            <span className="text-tnblue-primary font-black text-xl">IC</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-black tracking-tight font-display">TNB ICOMS</h1>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-tnblue-light/50">Enterprise 2.0</span>
                        </div>
                    </div>

                    <nav className="flex-1 overflow-y-auto px-4 py-8 space-y-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="group flex items-center px-4 py-3 text-sm font-semibold rounded-xl hover:bg-white/10 transition-all duration-200"
                            >
                                <span className="mr-4 text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
                                {item.name}
                                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                            </Link>
                        ))}
                    </nav>

                    <div className="p-6 border-t border-white/5 bg-black/10">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-enterprise-gradient flex items-center justify-center font-bold border-2 border-white/20">
                                AR
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold truncate">Abdul Rahman</p>
                                <p className="text-[10px] text-tnblue-light uppercase tracking-wider font-bold">Grid Admin</p>
                            </div>
                        </div>
                        <button className="w-full py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold transition-colors">
                            Sign Out
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content Interface */}
            <div className="md:pl-72 transition-all duration-300">
                {/* Premium Glass Top Nav */}
                <header className="navbar-enterprise">
                    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                        <div className="flex items-center">
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="md:hidden p-2 -ml-2 mr-4 text-gray-500 hover:text-tnblue-primary transition-colors"
                            >
                                <span className="text-2xl">☰</span>
                            </button>
                            <h2 className="text-lg font-bold text-gray-800 hidden md:block">
                                <span className="text-tnblue-primary font-black mr-2">//</span>
                                {title}
                            </h2>
                        </div>

                        <div className="flex items-center space-x-6">
                            <div className="hidden lg:flex items-center space-x-2 px-4 py-1.5 bg-green-50 rounded-full border border-green-100">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                <span className="text-[10px] font-bold text-green-700 uppercase tracking-widest">System Online</span>
                            </div>
                            
                            <button className="relative p-2 text-gray-400 hover:text-tnblue-primary transition-colors">
                                <span className="text-xl">🔔</span>
                                <span className="absolute top-0 right-0 w-4 h-4 bg-enterprise-error text-[10px] font-bold text-white rounded-full flex items-center justify-center animate-bounce">
                                    3
                                </span>
                            </button>
                            
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
                            <div className="w-8 h-8 bg-tnblue-primary rounded-lg flex items-center justify-center">
                                <span className="text-white font-black text-xs">IC</span>
                            </div>
                            <p className="text-xs font-bold text-gray-600">
                                POWERED BY TNB ICOMS 2.0 • Grid System Operator
                            </p>
                        </div>
                        <div className="flex space-x-8 text-xs font-bold text-gray-500">
                            <a href="#" className="hover:text-tnblue-primary transition-colors">Security Protocol</a>
                            <a href="#" className="hover:text-tnblue-primary transition-colors">Audit Logs</a>
                            <a href="#" className="hover:text-tnblue-primary transition-colors">Technical Support</a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}