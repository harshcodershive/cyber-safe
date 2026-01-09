
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-slate-900 text-white py-24 text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">About Us</h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        CyberSafe is a cybersecurity-focused information platform dedicated to helping individuals and businesses navigate the increasingly complex world of digital security.
                    </p>
                </div>
            </div>

            {/* Introduction & Mission */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-lg text-slate-600 leading-relaxed mb-10">
                        As online threats continue to evolve, our goal is to provide clear, reliable, and easy-to-understand information that empowers users to make informed decisions about protecting their digital lives. We believe that online safety should not be complicated or confusing. CyberSafe was created to simplify cybersecurity concepts and guide users toward trusted antivirus and security solutions through research-driven content, expert insights, and transparent recommendations.
                    </p>
                    <div className="h-1 w-24 bg-blue-600 mx-auto rounded"></div>
                </div>
            </section>

            {/* Who We Are & Approach - Two Columns */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Are</h2>
                            <div className="prose prose-lg text-slate-600">
                                <p className="mb-4">
                                    CyberSafe is an independent online resource built for users who value security, privacy, and informed decision-making. Our platform focuses on reviewing, comparing, and explaining antivirus and cybersecurity tools in a way that is accessible to both beginners and experienced users.
                                </p>
                                <p>
                                    We analyze security software based on multiple factors, including protection capabilities, performance impact, usability, features, pricing, and overall reliability. By breaking down technical details into practical insights, we help users understand which solutions best fit their needs.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Approach</h2>
                            <div className="prose prose-lg text-slate-600">
                                <p className="mb-4">
                                    At CyberSafe, accuracy and transparency are at the core of everything we do. Our content is developed using a structured research process that includes product analysis, industry data, feature evaluation, and user-focused considerations.
                                </p>
                                <p className="italic bg-white p-4 rounded-lg border border-slate-200">
                                    While CyberSafe may participate in affiliate programs, our editorial content remains independent. Affiliate partnerships do not influence our reviews, comparisons, or recommendations. Our priority is to provide honest and balanced information that users can trust.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Cybersecurity Matters */}
            <section className="py-20 bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold mb-6 text-white">Why Cybersecurity Matters to Us</h2>
                        <p className="text-blue-100 text-lg leading-relaxed mb-6">
                            Cyber threats such as malware, phishing, ransomware, and identity theft affect millions of users every year. Choosing the right protection tools can make a significant difference in preventing data loss and financial harm.
                        </p>
                        <p className="text-blue-100 text-lg leading-relaxed">
                            CyberSafe exists to raise awareness about these risks and to help users understand how antivirus and cybersecurity solutions work to reduce them. Our mission is not just to recommend products, but to educate users so they can make confident and informed security decisions.
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div className="bg-blue-800 p-10 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-40 h-40 text-blue-300 opacity-90">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.002A11.959 11.959 0 0 1 12 2.964ZM7.49 8.844l-.38 2.378H8.5l-.38-2.378a2.5 2.5 0 0 1 1.637-2.61l.904-.326c-.463-.264-1.02-.4-1.554-.367-1.37.085-2.074 1.258-1.616 3.297ZM20.08 6.075a2.5 2.5 0 0 1-1.637 2.61l-.904.326c.463.264 1.02.4 1.554.367 1.37-.085 2.074-1.258 1.616-3.297l.38-2.378h-1.39l.38 2.378ZM12.72 13.916 11.23 18h1.54l1.49-4.084h-1.54Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Commitment */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Commitment to Users</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                            {[
                                "Providing accurate and up-to-date cybersecurity information",
                                "Maintaining transparency in all recommendations and disclosures",
                                "Presenting unbiased and research-based content",
                                "Protecting user trust and privacy",
                                "Continuously improving content quality"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start bg-gray-50 p-6 rounded-lg">
                                    <svg className="w-6 h-6 text-green-500 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </div>
                            ))}
                            {/* Update Notice Card */}
                            <div className="bg-blue-50 p-6 rounded-lg flex items-start">
                                <svg className="w-6 h-6 text-blue-500 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                <span className="text-slate-700 text-sm">
                                    CyberSafe regularly updates its content to reflect changes in technology, security threats, and antivirus software developments.
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Get In Touch CTA */}
                    <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white">
                        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                            We value feedback, questions, and suggestions from our users. If you would like to contact CyberSafe, please visit our Contact Us page. We are always open to hearing from our community and improving our platform.
                        </p>
                        <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
