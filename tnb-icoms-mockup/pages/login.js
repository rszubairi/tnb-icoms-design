import { useState } from 'react'
import Head from 'next/head'
import { HiMiniBolt, HiMiniShieldCheck, HiMiniGlobeAlt } from 'react-icons/hi2'

export default function Login() {
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            window.location.href = '/verify-2fa'
        }, 1500)
    }

    return (
        <div className="min-h-screen flex">
            <Head>
                <title>Secure Login | TNB ICOMS 2.0</title>
            </Head>

            {/* Left Panel — Branded Hero */}
            <div className="hidden lg:flex lg:w-[55%] relative bg-tnblue-dark overflow-hidden">
                {/* Background layers */}
                <div className="absolute inset-0 bg-gso-hero"></div>
                <div className="absolute inset-0 grid-pattern"></div>

                {/* Decorative elements */}
                <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-gso-green/10 blur-3xl"></div>
                <div className="absolute bottom-32 left-16 w-56 h-56 rounded-full bg-gso-blue/20 blur-3xl"></div>

                {/* Animated grid nodes */}
                <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-gso-green/40 rounded-full animate-pulse"></div>
                <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-gso-green/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-gso-green/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-2/3 left-1/3 w-3 h-3 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>

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

                    {/* Center — Hero text */}
                    <div className="max-w-lg">
                        <h1 className="text-5xl font-black text-white font-display leading-tight mb-6">
                            Integrated Commissioning &amp; Outage
                            <span className="text-gso-green"> Management</span>
                            <br />System
                        </h1>
                        <p className="text-white/50 text-base leading-relaxed max-w-md">
                            Ensuring safe, reliable, and economical operation of the electricity transmission system across Peninsular Malaysia.
                        </p>

                        {/* Feature pills */}
                        <div className="flex flex-wrap gap-3 mt-8">
                            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                                <HiMiniBolt className="w-4 h-4 text-gso-green" />
                                <span className="text-xs font-bold text-white/70">132kV — 500kV Grid</span>
                            </div>
                            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                                <HiMiniShieldCheck className="w-4 h-4 text-gso-green" />
                                <span className="text-xs font-bold text-white/70">Enterprise Security</span>
                            </div>
                            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                                <HiMiniGlobeAlt className="w-4 h-4 text-gso-green" />
                                <span className="text-xs font-bold text-white/70">National Grid</span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom — Stats bar */}
                    <div className="flex items-center space-x-8">
                        <div>
                            <p className="text-2xl font-black text-white font-display">11M+</p>
                            <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Customers Served</p>
                        </div>
                        <div className="h-8 w-px bg-white/10"></div>
                        <div>
                            <p className="text-2xl font-black text-gso-green font-display">99.9%</p>
                            <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Grid Uptime</p>
                        </div>
                        <div className="h-8 w-px bg-white/10"></div>
                        <div>
                            <p className="text-2xl font-black text-white font-display">24/7</p>
                            <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">GSO Monitoring</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Panel — Login Form */}
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
                    {/* Welcome */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-black text-gray-900 font-display">Welcome Back</h2>
                        <p className="text-sm text-gray-500 font-medium mt-1">Sign in to your ICOMS account</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="form-label">Staff ID / Email</label>
                            <input
                                type="text"
                                required
                                className="form-input h-12"
                                placeholder="e.g. 100xxxxx"
                            />
                        </div>

                        <div>
                            <label className="form-label flex justify-between items-center">
                                Password
                                <a href="#" className="text-[10px] text-gso-green hover:underline font-bold">Forgot password?</a>
                            </label>
                            <input
                                type="password"
                                required
                                className="form-input h-12"
                                placeholder="••••••••"
                            />
                        </div>

                        <div className="flex items-center">
                            <input type="checkbox" id="remember" className="w-4 h-4 rounded border-gray-300 text-gso-green focus:ring-gso-green" />
                            <label htmlFor="remember" className="ml-2 text-xs font-bold text-gray-600 cursor-pointer">Remember this device</label>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full btn-primary h-12 text-base relative overflow-hidden group"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Authenticating...
                                </span>
                            ) : (
                                <span className="flex items-center justify-center font-bold">
                                    Sign In Securely
                                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                </span>
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <div className="h-px flex-1 bg-gray-200"></div>
                        <span className="px-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Or</span>
                        <div className="h-px flex-1 bg-gray-200"></div>
                    </div>

                    {/* SSO Button */}
                    <button className="w-full btn-blue h-12 text-sm">
                        <HiMiniShieldCheck className="w-5 h-5 mr-2" />
                        Sign in with Corporate SSO
                    </button>

                    {/* Footer */}
                    <div className="mt-10 text-center">
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