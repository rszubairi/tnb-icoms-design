import Layout from '../components/Layout'
import { useState } from 'react'

export default function OutageCreation() {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        zone: '',
        station: '',
        voltage: '',
        equipmentType: '',
        lineFilter: 'Single',
        equipment: '',
        additionalEquipmentType: '',
        additionalEquipment: [],
        outageType: 'Planned',
        workType: 'Dead',
        ptw: false,
        dateStart: '',
        timeStart: '08:00',
        dateEnd: '',
        timeEnd: '17:00',
        sequence: '',
        restoration: '',
        jobType: 'Routine Maintenance',
        project: '',
        description: '',
        pic: []
    })

    const zones = ['KL', 'Selangor + Negri Sembilan', 'Eastern', 'Northern', 'Perak + Melaka', 'Johor Baru']
    const stations = ['SDNK', 'GPTH', 'SIDC', 'KJTN', 'PJSN']
    const voltages = ['132kV', '275kV', '500kV']
    const equipmentTypes = ['Transformer', 'Circuit Breaker', 'Isolator', 'Busbar', 'Line']
    const jobTypes = ['Routine Maintenance', 'Defect Correction', 'Fault Investigation', 'Inspection', 'SCADA & SAS', 'Testing', 'Projects', 'Others']
    const sequences = ['One at a time', 'All at the same time', 'Not applicable']
    const restorations = ['Immediately', '15 Minutes', '30 Minutes', '1 Hour', '2 Hours', 'More than 2 Hours']

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    const nextStep = () => {
        if (step < 3) setStep(step + 1)
    }

    const prevStep = () => {
        if (step > 1) setStep(step - 1)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission
        console.log('Form submitted:', formData)
    }

    return (
        <Layout title="Outage Creation">
            {/* Page Header */}
            <div className="mb-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Create New Outage</h1>
                        <p className="mt-1 text-sm text-gray-600">Fill in the details below to create a new outage request</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <span className="text-sm text-gray-500">Step {step} of 3</span>
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div
                                className="bg-tnblue-primary h-2 rounded-full"
                                style={{ width: `${(step / 3) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Progress Steps */}
            <div className="card p-6 mb-6">
                <div className="flex items-center space-x-8">
                    {[
                        { step: 1, title: 'Basic Information', icon: '📋' },
                        { step: 2, title: 'Equipment Selection', icon: '⚙️' },
                        { step: 3, title: 'Additional Details', icon: '📝' }
                    ].map((item, index) => (
                        <div key={item.step} className="flex items-center space-x-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${step >= item.step ? 'bg-tnblue-primary' : 'bg-gray-300'
                                }`}>
                                {item.icon}
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-900">{item.title}</p>
                                <p className="text-xs text-gray-500">Step {item.step}</p>
                            </div>
                            {index < 2 && (
                                <div className="w-16 h-0.5 bg-gray-200"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Form */}
                    <div className="lg:col-span-2">
                        <div className="card p-6">
                            {step === 1 && (
                                <div className="space-y-6">
                                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="form-label">Zone</label>
                                            <select
                                                value={formData.zone}
                                                onChange={(e) => handleInputChange('zone', e.target.value)}
                                                className="form-input"
                                                required
                                            >
                                                <option value="">Select Zone</option>
                                                {zones.map(zone => (
                                                    <option key={zone} value={zone}>{zone}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="form-label">Station</label>
                                            <select
                                                value={formData.station}
                                                onChange={(e) => handleInputChange('station', e.target.value)}
                                                className="form-input"
                                                required
                                            >
                                                <option value="">Select Station</option>
                                                {stations.map(station => (
                                                    <option key={station} value={station}>{station}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div>
                                            <label className="form-label">Voltage</label>
                                            <select
                                                value={formData.voltage}
                                                onChange={(e) => handleInputChange('voltage', e.target.value)}
                                                className="form-input"
                                                required
                                            >
                                                <option value="">Select Voltage</option>
                                                {voltages.map(voltage => (
                                                    <option key={voltage} value={voltage}>{voltage}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="form-label">Equipment Type</label>
                                            <select
                                                value={formData.equipmentType}
                                                onChange={(e) => handleInputChange('equipmentType', e.target.value)}
                                                className="form-input"
                                                required
                                            >
                                                <option value="">Select Type</option>
                                                {equipmentTypes.map(type => (
                                                    <option key={type} value={type}>{type}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Line Filter</label>
                                            <select
                                                value={formData.lineFilter}
                                                onChange={(e) => handleInputChange('lineFilter', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tnblue-primary"
                                            >
                                                <option value="Single">Single</option>
                                                <option value="Tee-Off">Tee-Off</option>
                                                <option value="Quad">Quad</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Equipment</label>
                                            <select
                                                value={formData.equipment}
                                                onChange={(e) => handleInputChange('equipment', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tnblue-primary"
                                                required
                                            >
                                                <option value="">Select Equipment</option>
                                                <option value="TR-001">TR-001</option>
                                                <option value="TR-002">TR-002</option>
                                                <option value="CB-101">CB-101</option>
                                                <option value="CB-102">CB-102</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Outage Type</label>
                                            <div className="flex space-x-4">
                                                <label className="flex items-center">
                                                    <input type="radio" name="outageType" value="Planned" checked={formData.outageType === 'Planned'} onChange={(e) => handleInputChange('outageType', e.target.value)} className="mr-2" />
                                                    Planned
                                                </label>
                                                <label className="flex items-center">
                                                    <input type="radio" name="outageType" value="Unplanned" checked={formData.outageType === 'Unplanned'} onChange={(e) => handleInputChange('outageType', e.target.value)} className="mr-2" />
                                                    Unplanned
                                                </label>
                                                <label className="flex items-center">
                                                    <input type="radio" name="outageType" value="Emergency" checked={formData.outageType === 'Emergency'} onChange={(e) => handleInputChange('outageType', e.target.value)} className="mr-2" />
                                                    Emergency
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Work Type</label>
                                            <div className="flex space-x-4">
                                                <label className="flex items-center">
                                                    <input type="radio" name="workType" value="Dead" checked={formData.workType === 'Dead'} onChange={(e) => handleInputChange('workType', e.target.value)} className="mr-2" />
                                                    Dead
                                                </label>
                                                <label className="flex items-center">
                                                    <input type="radio" name="workType" value="Live" checked={formData.workType === 'Live'} onChange={(e) => handleInputChange('workType', e.target.value)} className="mr-2" />
                                                    Live
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <input
                                                type="checkbox"
                                                id="ptw"
                                                checked={formData.ptw}
                                                onChange={(e) => handleInputChange('ptw', e.target.checked)}
                                                className="w-4 h-4 text-tnblue-primary focus:ring-tnblue-primary border-gray-300 rounded"
                                            />
                                            <label htmlFor="ptw" className="text-sm font-medium text-gray-700">PTW Required</label>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Start Date & Time</label>
                                            <div className="grid grid-cols-2 gap-2">
                                                <input
                                                    type="date"
                                                    value={formData.dateStart}
                                                    onChange={(e) => handleInputChange('dateStart', e.target.value)}
                                                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tnblue-primary"
                                                    required
                                                />
                                                <input
                                                    type="time"
                                                    value={formData.timeStart}
                                                    onChange={(e) => handleInputChange('timeStart', e.target.value)}
                                                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tnblue-primary"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">End Date & Time</label>
                                            <div className="grid grid-cols-2 gap-2">
                                                <input
                                                    type="date"
                                                    value={formData.dateEnd}
                                                    onChange={(e) => handleInputChange('dateEnd', e.target.value)}
                                                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tnblue-primary"
                                                    required
                                                />
                                                <input
                                                    type="time"
                                                    value={formData.timeEnd}
                                                    onChange={(e) => handleInputChange('timeEnd', e.target.value)}
                                                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tnblue-primary"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-6">
                                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Equipment Selection</h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Additional Equipment Type</label>
                                            <select
                                                value={formData.additionalEquipmentType}
                                                onChange={(e) => handleInputChange('additionalEquipmentType', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tnblue-primary"
                                            >
                                                <option value="">Select Additional Type</option>
                                                <option value="All">All Equipment</option>
                                                {equipmentTypes.map(type => (
                                                    <option key={type} value={type}>{type}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Additional Equipment</label>
                                            <select
                                                multiple
                                                value={formData.additionalEquipment}
                                                onChange={(e) => {
                                                    const options = Array.from(e.target.selectedOptions, option => option.value)
                                                    handleInputChange('additionalEquipment', options)
                                                }}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tnblue-primary h-32"
                                            >
                                                <option value="TR-003">TR-003</option>
                                                <option value="TR-004">TR-004</option>
                                                <option value="CB-103">CB-103</option>
                                                <option value="CB-104">CB-104</option>
                                                <option value="IS-201">IS-201</option>
                                                <option value="IS-202">IS-202</option>
                                            </select>
                                            <p className="text-xs text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple items</p>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h3 className="font-medium text-gray-900 mb-2">Selected Equipment</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {formData.equipment && (
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                                                    {formData.equipment}
                                                </span>
                                            )}
                                            {formData.additionalEquipment.map(eq => (
                                                <span key={eq} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                                                    {eq}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="space-y-6">
                                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Additional Details</h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Sequence</label>
                                            <select
                                                value={formData.sequence}
                                                onChange={(e) => handleInputChange('sequence', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tnblue-primary"
                                            >
                                                <option value="">Select Sequence</option>
                                                {sequences.map(seq => (
                                                    <option key={seq} value={seq}>{seq}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Restoration Time</label>
                                            <select
                                                value={formData.restoration}
                                                onChange={(e) => handleInputChange('restoration', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tnblue-primary"
                                            >
                                                <option value="">Select Restoration</option>
                                                {restorations.map(rest => (
                                                    <option key={rest} value={rest}>{rest}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
                                            <select
                                                value={formData.jobType}
                                                onChange={(e) => handleInputChange('jobType', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tnblue-primary"
                                            >
                                                {jobTypes.map(job => (
                                                    <option key={job} value={job}>{job}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Project</label>
                                            <select
                                                value={formData.project}
                                                onChange={(e) => handleInputChange('project', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tnblue-primary"
                                            >
                                                <option value="">Select Project</option>
                                                <option value="TP-001">TP-001 - System Upgrade</option>
                                                <option value="TP-002">TP-002 - Maintenance Program</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                                        <textarea
                                            value={formData.description}
                                            onChange={(e) => handleInputChange('description', e.target.value)}
                                            rows={4}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tnblue-primary"
                                            placeholder="Enter detailed description of the outage..."
                                        ></textarea>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Point of Contact (PIC)</label>
                                        <div className="space-y-2">
                                            {formData.pic.map((pic, index) => (
                                                <div key={index} className="flex space-x-2">
                                                    <input
                                                        type="text"
                                                        value={pic.name}
                                                        onChange={(e) => {
                                                            const newPic = [...formData.pic]
                                                            newPic[index].name = e.target.value
                                                            handleInputChange('pic', newPic)
                                                        }}
                                                        placeholder="Name"
                                                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tnblue-primary"
                                                    />
                                                    <input
                                                        type="email"
                                                        value={pic.email}
                                                        onChange={(e) => {
                                                            const newPic = [...formData.pic]
                                                            newPic[index].email = e.target.value
                                                            handleInputChange('pic', newPic)
                                                        }}
                                                        placeholder="Email"
                                                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tnblue-primary"
                                                    />
                                                    <input
                                                        type="tel"
                                                        value={pic.phone}
                                                        onChange={(e) => {
                                                            const newPic = [...formData.pic]
                                                            newPic[index].phone = e.target.value
                                                            handleInputChange('pic', newPic)
                                                        }}
                                                        placeholder="Phone"
                                                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tnblue-primary"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            const newPic = formData.pic.filter((_, i) => i !== index)
                                                            handleInputChange('pic', newPic)
                                                        }}
                                                        className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            ))}
                                            <button
                                                type="button"
                                                onClick={() => handleInputChange('pic', [...formData.pic, { name: '', email: '', phone: '' }])}
                                                className="btn-outline"
                                            >
                                                + Add PIC
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Form Actions */}
                        <div className="mt-8 flex justify-between">
                            <button
                                type="button"
                                onClick={prevStep}
                                disabled={step === 1}
                                className="btn-secondary disabled:opacity-30"
                            >
                                ← Previous Step
                            </button>
                            {step < 3 ? (
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="btn-primary"
                                >
                                    Continue Transaction →
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className="btn-primary bg-enterprise-success hover:bg-emerald-700 shadow-enterprise-lg"
                                >
                                    Finalize & Submit Request
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Information Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="card p-6 space-y-6">
                            <h3 className="text-lg font-semibold text-gray-900">Information</h3>

                            {/* SLD Download */}
                            <div className="border-t border-gray-200 pt-4">
                                <h4 className="font-medium text-gray-900 mb-2">Single Line Diagram</h4>
                                <p className="text-sm text-gray-600 mb-3">Download SLD for selected station</p>
                                <button className="btn-outline w-full">
                                    Download SLD (PDF)
                                </button>
                            </div>

                            {/* Conflicting Lines */}
                            <div className="border-t border-gray-200 pt-4">
                                <h4 className="font-medium text-gray-900 mb-2">Conflicting Lines</h4>
                                <p className="text-sm text-gray-600 mb-3">No conflicting lines detected</p>
                                <div className="text-xs text-green-600">✓ Safe to proceed</div>
                            </div>

                            {/* Equipment History */}
                            <div className="border-t border-gray-200 pt-4">
                                <h4 className="font-medium text-gray-900 mb-2">Equipment History</h4>
                                <p className="text-sm text-gray-600 mb-3">Last maintenance: 15 days ago</p>
                                <button className="btn-outline w-full">
                                    View History
                                </button>
                            </div>

                            {/* Project Information */}
                            {formData.jobType !== 'Routine Maintenance' && (
                                <div className="border-t border-gray-200 pt-4">
                                    <h4 className="font-medium text-gray-900 mb-2">Project Information</h4>
                                    <p className="text-sm text-gray-600 mb-3">Project: {formData.project || 'Not selected'}</p>
                                    <button className="btn-outline w-full">
                                        View Project Details
                                    </button>
                                </div>
                            )}

                            {/* Form Summary */}
                            <div className="border-t border-gray-200 pt-4">
                                <h4 className="font-medium text-gray-900 mb-3">Form Summary</h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Zone:</span>
                                        <span className="font-medium">{formData.zone || 'Not selected'}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Station:</span>
                                        <span className="font-medium">{formData.station || 'Not selected'}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Equipment:</span>
                                        <span className="font-medium">{formData.equipment || 'Not selected'}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Duration:</span>
                                        <span className="font-medium">
                                            {formData.dateStart && formData.dateEnd ? `${formData.dateStart} to ${formData.dateEnd}` : 'Not set'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Layout>
    )
}