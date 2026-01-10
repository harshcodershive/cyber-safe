
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="bg-slate-900 text-white py-20 text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Contact Us</h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Thank you for visiting cybersafeantivirus. We value communication and are always open to hearing from our users, partners, and visitors.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Information Column */}
                    <div>
                        <div className="prose prose-lg text-slate-600 mb-12">
                            <p>
                                Whether you have a question, feedback, or a general inquiry, we encourage you to get in touch with us. cybersafeantivirus is committed to providing accurate and helpful cybersecurity information, and your input helps us improve the quality of our content and services.
                            </p>
                        </div>

                        <div className="space-y-12">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-blue-600 pl-4">How to Reach Us</h3>
                                <p className="text-slate-600 mb-4">
                                    If you have any questions related to our content, antivirus reviews, comparisons, or resources, please feel free to contact us using the methods below.
                                </p>
                                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                                    <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <div>
                                        <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">Email</div>
                                        <a href="mailto:support@cybersafeantivirus.com" className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors">support@cybersafeantivirus.com</a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">What You Can Contact Us About</h3>
                                <ul className="space-y-3">
                                    {[
                                        "General questions about our website or content",
                                        "Feedback or suggestions for improvement",
                                        "Reporting outdated or incorrect information",
                                        "Partnership or collaboration inquiries",
                                        "Questions related to our affiliate disclosure or policies"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start text-slate-600">
                                            <svg className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-4 text-sm text-slate-500 bg-yellow-50 p-4 rounded border border-yellow-100 italic">
                                    Please note that cybersafeantivirus does not provide direct technical support for antivirus software. For product-specific issues, we recommend contacting the official support team of the respective antivirus provider.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Response Time</h3>
                                    <p className="text-slate-600 text-sm">
                                        We aim to review and respond to all inquiries in a timely manner. While response times may vary, we make every effort to reply as soon as possible during regular business days.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Transparency & Trust</h3>
                                    <p className="text-slate-600 text-sm">
                                        If you have any questions about how we operate, our review process, or our affiliate relationships, we encourage you to reach out.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Column */}
                    <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 h-fit">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    required
                                >
                                    <option value="" disabled>Select a subject</option>
                                    <option value="General Inquiry">General Inquiry</option>
                                    <option value="Feedback">Feedback</option>
                                    <option value="Partnership">Partnership</option>
                                    <option value="Correction">Report Issue</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    placeholder="How can we help you?"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
