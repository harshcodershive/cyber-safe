
import { guides, blogs } from '../data/resources';
import { Link } from 'react-router-dom';

const Resources = () => {
    return (
        <div className="bg-white">
            {/* Resources Hero */}
            <div className="bg-slate-900 py-20 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                        Resources
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        The Resources section of CyberSafe is designed to provide practical cybersecurity knowledge and helpful tools for users who want to improve their online safety. This page focuses on education and awareness, helping visitors understand digital risks and how to protect their devices and personal data.
                    </p>
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                        Our resources are carefully curated to support users at every level — from beginners learning basic online safety to experienced users looking for deeper cybersecurity insights.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* What You'll Find */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-blue-600 pl-4">What You’ll Find in Our Resources</h2>
                    <p className="text-lg text-slate-600 mb-6">
                        CyberSafe resources include easy-to-understand guides, security checklists, and informative materials related to digital protection, such as:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {[
                            "Cybersecurity basics and terminology",
                            "Antivirus and malware protection guides",
                            "Online privacy and data protection tips",
                            "Safe browsing and email security practices",
                            "Device security for computers and mobile phones"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center text-slate-700">
                                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <p className="text-slate-600">Each resource is created to simplify complex security concepts and present them in a clear and actionable way.</p>
                </div>

                {/* Existing Guides Grid */}
                <div className="mb-20">
                    <h3 className="text-xl font-bold text-slate-900 mb-8">Featured Guides</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {guides.map((guide) => (
                            <div key={guide.id} className="group cursor-pointer">
                                <div className="relative overflow-hidden rounded-xl mb-4 aspect-video">
                                    <img
                                        src={guide.image}
                                        alt={guide.title}
                                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900 uppercase tracking-wide">
                                        {guide.category}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    <Link to={`/resource/${guide.id}`}>{guide.title}</Link>
                                </h3>
                                <p className="text-slate-600 text-sm mb-3 line-clamp-2">{guide.excerpt}</p>
                                <div className="text-slate-400 text-xs font-medium uppercase tracking-wider">{guide.readTime}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Educational & Updates Text */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 bg-blue-50 p-8 rounded-2xl">
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Educational & Independent Content</h3>
                        <p className="text-slate-600 leading-relaxed">
                            All resources on CyberSafe are developed for educational purposes only. We aim to help users make informed decisions by understanding cybersecurity risks and available protection methods. While some resources may reference antivirus tools or services, our content remains neutral, research-based, and user-focused. We do not promote unsafe practices or misleading information.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Keeping Resources Updated</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Cyber threats evolve constantly, and so does cybersecurity technology. Our team regularly reviews and updates resources to ensure accuracy and relevance. We encourage users to revisit this section often to stay informed about best practices for online safety.
                        </p>
                    </div>
                </div>
            </div>

            {/* BLOG SECTION SEPARATOR/HEADER */}
            <div className="bg-gray-900 text-white py-20" id="blog">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                        Blog
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        The CyberSafe Blog is where we share the latest insights, updates, and educational content related to cybersecurity and antivirus software. Our blog is designed to keep users informed about digital threats and security trends in a constantly changing online environment.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* What We Publish */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-purple-600 pl-4">What We Publish</h2>
                    <p className="text-lg text-slate-600 mb-6">
                        Our blog covers a wide range of cybersecurity-related topics, including:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {[
                            "Latest malware and cyber threat trends",
                            "Antivirus software updates and improvements",
                            "Online safety tips for individuals and families",
                            "Common scams, phishing attacks, and how to avoid them",
                            "Cybersecurity awareness for remote work and small businesses"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center text-slate-700">
                                <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <p className="text-slate-600">Articles are written in a clear, professional, and easy-to-read format, making them accessible to all users.</p>
                </div>

                {/* Existing Blog Grid */}
                <div className="mb-20">
                    <h3 className="text-xl font-bold text-slate-900 mb-8">Latest Posts</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {blogs.map((blog) => (
                            <div key={blog.id} className="flex flex-col md:flex-row gap-6 items-start group cursor-pointer">
                                <div className="w-full md:w-1/3 aspect-video rounded-lg overflow-hidden shrink-0">
                                    <img src={blog.image} alt={blog.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="flex-grow">
                                    <div className="text-sm text-slate-500 mb-2">{blog.date} • {blog.author}</div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                                        <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                                    </h3>
                                    <p className="text-slate-600 text-sm line-clamp-2">{blog.excerpt}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Informational & Stay Informed Text */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-50 p-8 rounded-2xl border border-gray-100">
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Informational and Trust-Focused Content</h3>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            CyberSafe’s blog content is informational and educational in nature. Our goal is to help users understand cybersecurity risks and learn how antivirus solutions can reduce those risks.
                        </p>
                        <p className="text-slate-500 text-sm italic">
                            Some blog posts may contain affiliate links where relevant. However, all opinions and recommendations are based on research and analysis, not promotional bias. Transparency is important to us, and users can always refer to our Affiliate Disclosure for more details.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Stay Informed with CyberSafe</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Cybersecurity is not static — new threats appear every day. Our blog is updated regularly to reflect changes in the digital security landscape and provide timely, reliable information. By following the CyberSafe blog, users can stay proactive and better prepared to protect their digital lives.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resources;
