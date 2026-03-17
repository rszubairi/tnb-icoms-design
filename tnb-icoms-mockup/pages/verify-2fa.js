import { useState } from 'react'
import Head from 'next/head'
import { HiMiniDevicePhoneMobile, HiMiniShieldCheck, HiMiniLockClosed, HiMiniFingerPrint } from 'react-icons/hi2'

export default function Verify2FA() {
    const [loading, setLoading] = useState(false)
    const [code, setCode] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            window.location.href = '/'
        }, 1500)
    }

    return (
        <div className="min-h-screen flex">
            <Head>
                <title>Multi-Factor Authentication | TNB ICOMS 2.0</title>
            </Head>

            {/* Left Panel — Security Branded Hero */}
            <div className="hidden lg:flex lg:w-[55%] relative bg-tnblue-dark overflow-hidden">
                <div className="absolute inset-0 bg-gso-hero"></div>
                <div className="absolute inset-0 grid-pattern"></div>

                {/* Decorative orbs */}
                <div className="absolute top-1/4 right-16 w-64 h-64 rounded-full bg-gso-green/8 blur-3xl"></div>
                <div className="absolute bottom-1/4 left-12 w-48 h-48 rounded-full bg-gso-blue/15 blur-3xl"></div>

                {/* Animated security nodes */}
                <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-gso-green/40 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-gso-green/25 rounded-full animate-pulse" style={{ animationDelay: '0.7s' }}></div>
                <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1.2s' }}></div>
                <div className="absolute top-2/3 right-1/5 w-3 h-3 bg-gso-green/15 rounded-full animate-pulse" style={{ animationDelay: '1.8s' }}></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between w-full p-12">
                    {/* Top — Logos */}
                    <div>
                        <div className="flex items-center space-x-5">
                            <img
                                src="/images/tnb-logo.png"
                                alt="Tenaga Nasional"
                                className="h-10 w-auto brightness-0 invert"
                            />
                            <div className="h-8 w-px bg-white/20"></div>
                            <img
                                src="/images/gso-logo.png"
                                alt="Grid System Operator"
                                className="h-10 w-auto"
                            />
                        </div>
                        <div className="h-px w-16 bg-gradient-to-r from-gso-green to-transparent mt-5"></div>
                    </div>

                    {/* Center — Security visual */}
                    <div className="flex flex-col items-center text-center">
                        {/* Animated shield icon */}
                        <div className="relative mb-8">
                            <div className="w-28 h-28 rounded-3xl bg-gso-green/10 border border-gso-green/20 flex items-center justify-center">
                                <HiMiniFingerPrint className="w-14 h-14 text-gso-green" />
                            </div>
                            {/* Pulse rings */}
                            <div className="absolute inset-0 w-28 h-28 rounded-3xl border border-gso-green/20 animate-pulse-ring"></div>
                            <div className="absolute inset-0 w-28 h-28 rounded-3xl border border-gso-green/10 animate-pulse-ring" style={{ animationDelay: '0.5s' }}></div>
                        </div>

                        <h2 className="text-3xl font-black text-white font-display mb-4">
                            Identity <span className="text-gso-green">Verification</span>
                        </h2>
                        <p className="text-white/40 text-sm max-w-xs leading-relaxed">
                            Multi-factor authentication ensures only authorized personnel access the Grid System Operator network.
                        </p>

                        {/* Security features */}
                        <div className="flex flex-col gap-3 mt-8">
                            <div className="flex items-center space-x-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10">
                                <HiMiniLockClosed className="w-4 h-4 text-gso-green flex-shrink-0" />
                                <span className="text-xs font-bold text-white/70">End-to-end 256-bit AES encryption</span>
                            </div>
                            <div className="flex items-center space-x-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10">
                                <HiMiniShieldCheck className="w-4 h-4 text-gso-green flex-shrink-0" />
                                <span className="text-xs font-bold text-white/70">TNB Cybersecurity Protocol v2.4.1</span>
                            </div>
                            <div className="flex items-center space-x-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10">
                                <HiMiniDevicePhoneMobile className="w-4 h-4 text-gso-green flex-shrink-0" />
                                <span className="text-xs font-bold text-white/70">Corporate authenticator integration</span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom — Trust bar */}
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-gso-green rounded-full animate-pulse"></span>
                            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Secure Session Active</span>
                        </div>
                        <div className="h-4 w-px bg-white/10"></div>
                        <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">SOC-2 Compliant</span>
                    </div>
                </div>
            </div>

            {/* Right Panel — 2FA Form */}
            <div className="flex-1 flex items-center justify-center p-6 bg-enterprise-background relative">
                {/* Mobile-only top bar */}
                <div className="lg:hidden absolute top-0 left-0 right-0 p-6 flex items-center justify-center space-x-3">
                    <img
                        src="/images/tnb-logo.png"
                        alt="Tenaga Nasional"
                        className="h-7 w-auto"
                    />
                    <div className="h-5 w-px bg-gray-300"></div>
                    <img
                        src="/images/gso-logo.png"
                        alt="GSO"
                        className="h-7 w-auto"
                    />
                </div>

                <div className="w-full max-w-sm">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="w-14 h-14 bg-gso-green/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                            <HiMiniDevicePhoneMobile className="w-7 h-7 text-gso-green" />
                        </div>
                        <h1 className="text-2xl font-black text-gray-900 font-display">Two-Factor Auth</h1>
                        <p className="text-gray-500 font-medium text-sm mt-1">Check your authenticator app</p>
                    </div>

                    <div className="bg-white rounded-2xl border border-gray-100 shadow-enterprise p-8">
                        <div className="mb-6">
                            <div className="flex items-center space-x-3 mb-2">
                                <div className="w-2 h-2 bg-gso-green rounded-full animate-ping"></div>
                                <h2 className="text-xs font-black text-gray-700 uppercase tracking-widest">Verification Sent</h2>
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed font-medium">
                                Enter the 6-digit code sent to your registered device.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="form-label text-center block mb-3">Verification Code</label>
                                <input
                                    type="text"
                                    required
                                    maxLength="6"
                                    placeholder="000 000"
                                    className="form-input text-center text-2xl font-black tracking-[0.5em] h-16"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full btn-primary h-12 relative overflow-hidden"
                            >
                                {loading ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Verifying Session...
                                    </span>
                                ) : (
                                    <span className="flex items-center justify-center font-bold">
                                        Verify Identity
                                    </span>
                                )}
                            </button>

                            <button type="button" className="w-full text-xs font-bold text-gray-400 hover:text-gso-green transition-colors py-2">
                                I didn't receive a code • Resend Code
                            </button>
                        </form>
                    </div>

                    {/* Footer */}
                    <div className="mt-8 text-center">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed">
                            &copy; 2026 Tenaga Nasional Berhad
                            <br/>Grid System Operator (GSO) • Internal System
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}