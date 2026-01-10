
const PrivacyPolicy = () => {
    return (
        <div className="bg-white min-h-screen py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>

                <div className="prose prose-lg text-slate-600 max-w-none">
                    <p className="font-semibold text-slate-900">Last Updated: January 9, 2026</p>
                    <p>
                        CyberSafe values your privacy and is committed to protecting the personal information of its users. This Privacy Policy explains how we collect, use, store, and protect information when you visit and interact with our website.
                    </p>
                    <p>
                        By accessing or using CyberSafe, you agree to the terms outlined in this Privacy Policy.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Information We Collect</h2>
                    <p>CyberSafe may collect limited information in the following ways:</p>

                    <h3 className="text-xl font-bold text-slate-900 mt-6 mb-4">1. Personal Information</h3>
                    <p>We may collect personal information that you voluntarily provide, such as:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Information submitted through contact forms</li>
                    </ul>
                    <p>This information is collected only when you choose to provide it.</p>

                    <h3 className="text-xl font-bold text-slate-900 mt-6 mb-4">2. Non-Personal Information</h3>
                    <p>We may automatically collect non-personal information, including:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>Browser type and version</li>
                        <li>Device type and operating system</li>
                        <li>IP address (in anonymized or aggregated form)</li>
                        <li>Pages visited and time spent on the website</li>
                    </ul>
                    <p>This data helps us understand how users interact with our website and improve our content and user experience.</p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">How We Use Your Information</h2>
                    <p>The information we collect may be used to:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>Respond to inquiries or messages</li>
                        <li>Improve website functionality and content quality</li>
                        <li>Analyze website traffic and usage patterns</li>
                        <li>Maintain website security and performance</li>
                    </ul>
                    <p className="font-medium text-slate-900">CyberSafe does not sell, rent, or trade personal information to third parties.</p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Cookies and Tracking Technologies</h2>
                    <p>
                        CyberSafe may use cookies and similar tracking technologies to enhance user experience and analyze website traffic.
                    </p>
                    <p className="mb-4">Cookies help us:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>Understand user preferences</li>
                        <li>Improve website navigation</li>
                        <li>Measure content performance</li>
                    </ul>
                    <p>
                        You can choose to disable cookies through your browser settings. Please note that disabling cookies may affect certain website features.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Third-Party Links and Affiliate Programs</h2>
                    <p>
                        CyberSafe may contain links to third-party websites, including antivirus providers and affiliate partners. Clicking on these links may redirect you to external websites that operate under their own privacy policies.
                    </p>
                    <p>
                        CyberSafe is not responsible for the privacy practices or content of third-party websites. We encourage users to review the privacy policies of any external sites they visit.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Affiliate Disclosure</h2>
                    <p>
                        CyberSafe participates in affiliate programs. This means we may earn a commission when users purchase products through affiliate links, at no additional cost to the user.
                    </p>
                    <p>
                        Affiliate partnerships do not influence how we collect or handle personal information. For more details, please review our Affiliate Disclosure page.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Data Security</h2>
                    <p>
                        We take reasonable measures to protect user information from unauthorized access, misuse, or disclosure. While we strive to protect personal data, no method of online transmission or storage is completely secure, and we cannot guarantee absolute security.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Children’s Information</h2>
                    <p>
                        CyberSafe does not knowingly collect personal information from children under the age of 13. If you believe that a child has provided personal information on our website, please contact us, and we will take appropriate action.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Your Privacy Rights</h2>
                    <p>
                        Depending on your location, you may have certain rights regarding your personal data, including the right to access, update, or request deletion of your information.
                    </p>
                    <p>To make such a request, please contact us using the information provided below.</p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Changes to This Privacy Policy</h2>
                    <p>
                        CyberSafe reserves the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with an updated revision date. We encourage users to review this page periodically.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Contact Us</h2>
                    <p className="mb-4">
                        If you have any questions or concerns regarding this Privacy Policy or how your information is handled, please contact us:
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 not-prose">
                        <p className="text-lg font-bold text-slate-900 mb-1">Email:</p>
                        <a href="mailto:support@cybersafe.com" className="text-blue-600 font-bold text-xl hover:underline">support@cybersafe.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
