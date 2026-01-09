
import { antiviruses } from '../data/antiviruses';
import AntivirusCard from '../components/AntivirusCard';

const Reviews = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="bg-slate-900 py-20 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                        Antivirus Software Reviews
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        At CyberSafe, our antivirus reviews are designed to help users make informed and confident decisions about their digital security. With the increasing number of cyber threats, choosing the right antivirus software has never been more important.
                    </p>
                </div>
            </div>

            {/* Introduction & Mission */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Unbiased & Thorough Analysis</h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            Our review process focuses on clarity, transparency, and real-world usefulness. We analyze each antivirus product in detail so users can understand how it performs, what features it offers, and who it is best suited for.
                        </p>
                        <div className="h-1 w-20 bg-blue-600 mx-auto rounded"></div>
                    </div>
                </div>
            </section>

            {/* Review Process (How We Review) */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">How We Review Antivirus Software</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Each antivirus review on CyberSafe is created using a structured evaluation process. We assess products based on several important factors:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Malware & Virus Protection", desc: "Capabilities to detect and neutralize threats." },
                            { title: "Real-time Threat Detection", desc: "Immediate response to active security risks." },
                            { title: "System Performance", desc: "Impact on speed and overall system efficiency." },
                            { title: "Ease of Use", desc: "Interface design and user experience." },
                            { title: "Security Features", desc: "Firewall, VPN, phishing protection, and more." },
                            { title: "Pricing & Value", desc: "Cost-effectiveness of plans and subscriptions." },
                            { title: "Customer Support", desc: "Availability and quality of help services." }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start space-x-4 hover:shadow-md transition-shadow">
                                <div className="bg-blue-100 p-2 rounded-lg text-blue-600 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                                    <p className="text-slate-600 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Reviews Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Latest Software Reviews</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Browse our latest in-depth reviews of top-rated security solutions.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {antiviruses.map((antivirus) => (
                            <AntivirusCard key={antivirus.id} data={antivirus} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Independence & Research */}
            <section className="py-16 bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold mb-6">Independent and Research-Based</h2>
                        <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                            CyberSafe is an independent cybersecurity information platform. Our reviews are based on research, product specifications, industry testing data, and user experience insights.
                        </p>
                        <p className="text-blue-200">
                            While some links on our website may be affiliate links, our editorial decisions remain independent. Affiliate partnerships do not influence how products are reviewed, rated, or compared.
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div className="bg-blue-800 p-8 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 h-32 text-blue-300 opacity-80">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Target Audience */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Who Our Reviews Are For</h2>
                        <p className="text-lg text-slate-600">Whether you are a beginner or a tech-savvy user, our reviews are practical and easy to understand.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { label: "Home Users", desc: "Basic online protection for daily use.", icon: "🏠" },
                            { label: "Families", desc: "Multi-device security for everyone.", icon: "👨‍👩‍👧‍👦" },
                            { label: "Professionals", desc: "Security for remote work & data.", icon: "💼" },
                            { label: "Small Businesses", desc: "Reliable cybersecurity solutions.", icon: "🏢" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-all">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="font-bold text-slate-900 mb-2">{item.label}</h3>
                                <p className="text-slate-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Updates & Transparency Footer */}
            <section className="py-12 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Stay Updated</h3>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                            Cybersecurity threats evolve constantly, and so do antivirus solutions. We regularly review and update our content to ensure accuracy and relevance. Check back frequently for the latest features and security improvements.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Transparency Notice</h3>
                        <p className="text-slate-600 text-sm italic bg-gray-50 p-4 rounded-lg border border-gray-100">
                            Some links within our reviews may be affiliate links. This means CyberSafe may earn a commission if you choose to purchase through those links, at no additional cost to you. For more details, please read our Affiliate Disclosure page.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Reviews;
