
const CybersecurityGuides = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="bg-slate-900 text-white py-20 text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Cybersecurity Guides</h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        The Cybersecurity Guides section of CyberSafe is dedicated to educating users about digital threats and helping them understand how to protect their devices, data, and online privacy.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Intro */}
                <div className="mb-16 text-center">
                    <p className="text-lg text-slate-600 leading-relaxed">
                        As cyber risks continue to grow, having access to clear and reliable security information is essential for safe internet use. These guides are created to simplify complex cybersecurity topics and present them in a practical and easy-to-understand format for users of all experience levels.
                    </p>
                </div>

                {/* Modern Cyber Threats */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b pb-4">Understanding Modern Cyber Threats</h2>
                    <div className="prose prose-lg text-slate-600">
                        <p className="mb-4">
                            Cyber threats come in many forms, including malware, ransomware, phishing attacks, spyware, and identity theft. Many of these threats are designed to exploit system vulnerabilities or trick users into sharing sensitive information.
                        </p>
                        <p>
                            Our guides explain how these threats work, how they spread, and what warning signs users should watch for. By understanding common attack methods, users can take proactive steps to reduce their risk.
                        </p>
                    </div>
                </section>

                {/* How Antivirus Helps */}
                <section className="mb-16 bg-blue-50 p-8 rounded-2xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">How Antivirus Software Helps</h2>
                    <div className="prose prose-lg text-slate-600">
                        <p className="mb-4">
                            Antivirus and cybersecurity software play a critical role in protecting devices from online threats. CyberSafe guides explain how antivirus solutions detect, block, and remove malicious software using real-time protection, threat databases, and behavioral analysis.
                        </p>
                        <p>
                            We also cover additional security features such as firewalls, web protection, phishing detection, and secure browsing tools, helping users understand the full scope of modern digital protection.
                        </p>
                    </div>
                </section>

                {/* Best Practices */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Online Safety Best Practices</h2>
                    <p className="text-lg text-slate-600 mb-6">Cybersecurity is not just about software — user behavior matters. Our guides include best practices for:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Safe browsing and downloading",
                            "Recognizing suspicious emails and links",
                            "Creating strong and secure passwords",
                            "Protecting personal and financial information",
                            "Keeping software and operating systems up to date"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                                <svg className="w-6 h-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="font-medium text-slate-700">{item}</span>
                            </div>
                        ))}
                    </div>
                    <p className="mt-6 text-slate-600 italic">These practical tips help users build safer online habits.</p>
                </section>

                {/* Device Protection */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Device & Privacy Protection</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        With the increasing use of mobile devices and cloud services, protecting personal data and privacy has become more important than ever. CyberSafe guides provide insights into securing computers, smartphones, and online accounts, as well as understanding privacy risks in today’s digital environment.
                    </p>
                </section>

                {/* Footer Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t pt-12">
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Educational & Transparent Content</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            All CyberSafe cybersecurity guides are created for educational purposes only. While some guides may reference antivirus tools or services, our content remains research-based and user-focused. Any affiliate relationships are disclosed transparently and do not influence the educational intent of our guides.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Stay Informed with CyberSafe</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Cyber threats evolve constantly, and staying informed is one of the best defenses. Our cybersecurity guides are reviewed and updated regularly to reflect new risks, technologies, and protection methods.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CybersecurityGuides;
