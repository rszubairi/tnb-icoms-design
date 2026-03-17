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
        { name: 'Reports', href: '/reports', icon: '📈' },
        { name: 'System Setup', href: '/system-setup', icon: '⚙️' },
    ]

    const userNavigation = [
        { name: 'Profile', href: '/profile' },
        { name: 'Settings', href: '/settings' },
        { name: 'Sign out', href: '/signout' },
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            <Head>
                <title>{title} - TNB ICOMS 2.0</title>
                <meta name="description" content="TNB Integrated Commissioning and Outage Management System" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Mobile sidebar backdrop */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-40 md:hidden"
                    role="presentation"
                    onClick={() => setSidebarOpen(false)}
                >
                    <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
                </div>
            )}

            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="sidebar flex flex-col h-full">
                    {/* Sidebar header */}
                    <div className="flex items-center justify-between p-4 border-b border-tnblue-medium">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                <span className="text-tnblue-primary font-bold text-lg">IC</span>
                            </div>
                            <div>
                                <h1 className="text-lg font-bold">TNB ICOMS</h1>
                                <p className="text-xs text-tnblue-light">Version 2.0</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="md:hidden text-tnblue-light hover:text-white"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Sidebar navigation */}
                    <nav className="flex-1 overflow-y-auto py-4">
                        <div className="space-y-1 px-2">
                            {navigation.map((item) => (
                                <Link key={item.name} href={item.href}>
                                    <a className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-tnblue-medium transition-colors duration-200">
                                        <span className="mr-3 text-lg">{item.icon}</span>
                                        {item.name}
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </nav>

                    {/* Sidebar footer */}
                    <div className="p-4 border-t border-tnblue-medium">
                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                                <p className="font-medium">Current User</p>
                                <p className="text-tnblue-light text-xs">Requestor - KL Zone</p>
                            </div>
                            <div className="flex space-x-2">
                                <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                                <span className="text-xs text-tnblue-light">Online</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="md:pl-64">
                {/* Top navigation bar */}
                <nav className="navbar">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            {/* Mobile menu button */}
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="md:hidden p-2 rounded-md text-tnblue-light hover:text-white hover:bg-tnblue-dark"
                            >
                                <span className="text-2xl">☰</span>
                            </button>

                            {/* Logo and title */}
                            <div className="flex items-center">
                                <div className="hidden md:block w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
                                    <span className="text-tnblue-primary font-bold">IC</span>
                                </div>
                                <h2 className="text-xl font-bold">Integrated Commissioning and Outage Management System</h2>
                            </div>

                            {/* User menu */}
                            <div className="flex items-center space-x-4">
                                <button className="p-2 rounded-md hover:bg-tnblue-dark transition-colors duration-200">
                                    <span className="text-2xl">🔔</span>
                                    <span className="absolute top-2 right-4 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
                                </button>
                                <div className="relative group">
                                    <button className="flex items-center space-x-2 p-2 rounded-md hover:bg-tnblue-dark transition-colors duration-200">
                                        <div className="w-8 h-8 bg-tnblue-secondary rounded-full flex items-center justify-center">
                                            <span className="text-white font-medium">AR</span>
                                        </div>
                                        <span className="hidden md:inline text-sm font-medium">Abdul Rahman</span>
                                        <span className="hidden md:inline text-tnblue-light">|</span>
                                        <span className="hidden md:inline text-sm text-tnblue-light">TOMS Admin</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Main content area */}
                <main className="p-6">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>

                {/* Footer */}
                <footer className="bg-white border-t border-gray-200 mt-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                            <p>&copy; 2024 TNB. All rights reserved.</p>
                            <div className="flex space-x-4 mt-2 md:mt-0">
                                <a href="#" className="hover:text-tnblue-primary">Privacy Policy</a>
                                <a href="#" className="hover:text-tnblue-primary">Terms of Service</a>
                                <a href="#" className="hover:text-tnblue-primary">Support</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}