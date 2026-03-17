import Layout from '../components/Layout'
import { useState } from 'react'

export default function Calendar() {
    const [view, setView] = useState('Month')
    const [currentMonth, setCurrentMonth] = useState('April 2024')

    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    
    // Simple calendar grid data for April 2024 (starts on Monday)
    const calendarDays = Array.from({ length: 35 }, (_, i) => {
        const day = i + 1
        return {
            day: day > 30 ? day - 30 : day,
            isCurrentMonth: day <= 30,
            outages: day === 3 ? [
                { id: 'OUT-2024-001', type: 'Planned', title: 'TR-001 Maint', color: 'bg-blue-500' }
            ] : day === 5 ? [
                { id: 'OUT-2024-002', type: 'Unplanned', title: 'Line Insp', color: 'bg-yellow-500' }
            ] : day === 12 ? [
                { id: 'OUT-2024-003', type: 'Emergency', title: 'Fault Fix', color: 'bg-red-500' },
                { id: 'OUT-2024-004', type: 'Planned', title: 'CB Maint', color: 'bg-blue-500' }
            ] : []
        }
    })

    return (
        <Layout title="Calendar View">
            <div className="mb-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Outage Calendar</h1>
                        <p className="mt-1 text-sm text-gray-600">Visual timeline of planned and approved outages</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="flex bg-white rounded-lg border border-gray-200 p-1">
                            {['Month', 'Week', 'Day'].map((v) => (
                                <button
                                    key={v}
                                    onClick={() => setView(v)}
                                    className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                                        view === v ? 'bg-tnblue-primary text-white' : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                                >
                                    {v}
                                </button>
                            ))}
                        </div>
                        <div className="flex bg-white rounded-lg border border-gray-200 p-1">
                            <button className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded-md">←</button>
                            <span className="px-4 py-1.5 text-sm font-bold text-gray-900">{currentMonth}</span>
                            <button className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded-md">→</button>
                        </div>
                        <button className="btn-primary">
                            Add Outage
                        </button>
                    </div>
                </div>
            </div>

            <div className="card overflow-hidden">
                <div className="grid grid-cols-7 border-b border-gray-200 bg-gray-50">
                    {daysOfWeek.map((day) => (
                        <div key={day} className="px-4 py-3 text-sm font-bold text-gray-700 text-center uppercase tracking-wider">
                            {day}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-7 bg-white">
                    {calendarDays.map((date, idx) => (
                        <div 
                            key={idx} 
                            className={`min-h-[120px] p-2 border-r border-b border-gray-100 relative hover:bg-gray-50 transition-colors ${
                                !date.isCurrentMonth ? 'bg-gray-50/50' : ''
                            }`}
                        >
                            <div className={`text-sm font-medium mb-2 ${
                                !date.isCurrentMonth ? 'text-gray-400' : 'text-gray-900'
                            }`}>
                                {date.day}
                            </div>
                            <div className="space-y-1">
                                {date.outages.map((outage) => (
                                    <div 
                                        key={outage.id} 
                                        className={`px-2 py-1 rounded text-[10px] font-bold text-white shadow-sm cursor-pointer hover:opacity-80 transition-opacity truncate ${outage.color}`}
                                        title={`${outage.id}: ${outage.title}`}
                                    >
                                        {outage.title}
                                    </div>
                                ))}
                            </div>
                            {date.day === 12 && date.isCurrentMonth && (
                                <div className="absolute inset-x-0 bottom-0 pb-1 text-center">
                                    <span className="text-[10px] text-gray-400 font-medium">+ View 2 more</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="card p-4 flex items-center space-x-3">
                    <span className="w-4 h-4 rounded-full bg-blue-500"></span>
                    <span className="text-sm font-medium text-gray-700">Planned Outages</span>
                </div>
                <div className="card p-4 flex items-center space-x-3">
                    <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
                    <span className="text-sm font-medium text-gray-700">Unplanned Outages</span>
                </div>
                <div className="card p-4 flex items-center space-x-3">
                    <span className="w-4 h-4 rounded-full bg-red-500"></span>
                    <span className="text-sm font-medium text-gray-700">Emergency Outages</span>
                </div>
                <div className="card p-4 flex items-center space-x-3">
                    <span className="w-4 h-4 rounded-full bg-green-500"></span>
                    <span className="text-sm font-medium text-gray-700">Projects / Other</span>
                </div>
            </div>
        </Layout>
    )
}
