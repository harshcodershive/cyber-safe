
const Disclaimer = () => {
    return (
        <div className="bg-white min-h-screen py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-slate-900 mb-8">Disclaimer</h1>

                <div className="prose prose-lg text-slate-600 max-w-none">
                    <p className="font-semibold text-slate-900">Last Updated: January 9, 2026</p>
                    <p>
                        The information provided on CyberSafe is for general informational and educational purposes only. By accessing and using this website, you acknowledge and agree to the terms outlined in this Disclaimer.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">No Professional Advice</h2>
                    <p>
                        CyberSafe does not provide legal, financial, technical, or professional cybersecurity advice. All content, including reviews, guides, comparisons, and blog posts, is intended to offer general information only.
                    </p>
                    <p>
                        Users should conduct their own research and evaluate antivirus and cybersecurity products based on their individual needs before making any decisions or purchases.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Accuracy of Information</h2>
                    <p>
                        While we strive to provide accurate, up-to-date, and reliable information, CyberSafe makes no guarantees regarding the completeness, accuracy, or reliability of any content published on this website.
                    </p>
                    <p>
                        Cybersecurity threats, software features, and pricing may change over time. Content may become outdated, and CyberSafe is not obligated to update information immediately.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Affiliate Disclaimer</h2>
                    <p>
                        CyberSafe participates in affiliate programs and may earn a commission when users purchase products through affiliate links on this website, at no additional cost to the user.
                    </p>
                    <p>
                        Affiliate partnerships do not influence our editorial content, reviews, ratings, or recommendations. For full transparency, users are encouraged to review our Affiliate Disclosure page.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">External Links Disclaimer</h2>
                    <p>
                        CyberSafe may include links to third-party websites, tools, or services for informational purposes. We do not control or guarantee the accuracy, relevance, or security of content found on external websites.
                    </p>
                    <p>
                        Visiting third-party websites is done at your own risk, and CyberSafe is not responsible for any damages or losses resulting from their use.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Limitation of Liability</h2>
                    <p>
                        Under no circumstances shall CyberSafe be held liable for any direct, indirect, incidental, or consequential damages arising from:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>Use of or reliance on website content</li>
                        <li>Third-party software or services mentioned</li>
                        <li>Security breaches, data loss, or system damage</li>
                    </ul>
                    <p>
                        Users assume full responsibility for their actions and decisions related to the information provided on this website.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">No Guarantees</h2>
                    <p>
                        CyberSafe does not guarantee that using antivirus software or cybersecurity tools mentioned on this website will fully protect users from all cyber threats.
                    </p>
                    <p>
                        No security solution offers 100% protection, and users should maintain best cybersecurity practices alongside any software recommendations.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Changes to This Disclaimer</h2>
                    <p>
                        CyberSafe reserves the right to update or modify this Disclaimer at any time without prior notice. Any changes will be effective immediately upon posting on this page. Users are encouraged to review this page periodically.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Contact Us</h2>
                    <p className="mb-4">
                        If you have any questions regarding this Disclaimer, please contact us:
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

export default Disclaimer;
