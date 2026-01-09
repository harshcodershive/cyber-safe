
export default function About() {
    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-slate-900 text-white py-20 text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-6">About Us</h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                        CyberSafe is an independent cybersecurity information platform dedicated to educating users about digital threats and protection tools.
                    </p>
                </div>
            </div>

            {/* Mission Section */}
            <div className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-10">
                        Our mission is to promote a safer digital world by helping individuals and businesses understand cybersecurity risks and choose trusted protection solutions. We research antivirus products, analyze features, and provide unbiased guidance to help users make informed decisions.
                    </p>
                </div>
            </div>

            {/* How We Review Section */}
            <div className="bg-gray-50 py-20 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">How We Review Antivirus Software</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            At CyberSafe, we evaluate antivirus software based on strict criteria to ensure meaningful and accurate recommendations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                            <div className="bg-blue-100 size-12 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Security Features</h3>
                            <p className="text-sm text-slate-500">We analyze detection rates, malware removal capabilities, and real-time scanning efficacy.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                            <div className="bg-blue-100 size-12 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Performance</h3>
                            <p className="text-sm text-slate-500">We test system impact during idle and active scans to ensure your device stays fast.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                            <div className="bg-blue-100 size-12 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Ease of Use</h3>
                            <p className="text-sm text-slate-500">Interface design and user experience are critical for hassle-free protection.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                            <div className="bg-blue-100 size-12 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Value & Support</h3>
                            <p className="text-sm text-slate-500">We analyze pricing structures, feature-to-price value, and support responsiveness.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
