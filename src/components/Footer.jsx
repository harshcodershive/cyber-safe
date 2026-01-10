
import { Link } from 'react-router-dom';
import { useState } from 'react';
import AffiliateDisclosureModal from './AffiliateDisclosureModal';

const Footer = () => {
    const [isDisclosureOpen, setIsDisclosureOpen] = useState(false);

    return (
        <>
            <footer className="bg-slate-900 text-slate-300 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div className="col-span-1 md:col-span-1">
                            <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                </svg>
                                cybersafeantivirus
                            </Link>
                            <p className="text-sm text-slate-400">
                                Trusted reviews and rankings for the world's top antivirus software. Protecting your digital life.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-4">Company</h3>
                            <ul className="space-y-2">
                                <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                                <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li><Link to="/top-antiviruses" className="hover:text-blue-400 transition-colors">Top Antiviruses</Link></li>
                                <li><Link to="/reviews" className="hover:text-blue-400 transition-colors">Reviews</Link></li>
                                <li><Link to="/cybersecurity-guides" className="hover:text-blue-400 transition-colors">Cybersecurity Guides</Link></li>
                                <li><Link to="/resources" className="hover:text-blue-400 transition-colors">Blog</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-4">Legal</h3>
                            <ul className="space-y-2">
                                <li><Link to="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                                <li><Link to="/terms-of-service" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
                                <li><Link to="/disclaimer" className="hover:text-blue-400 transition-colors">Disclaimer</Link></li>
                                <li><Link to="/cookie-policy" className="hover:text-blue-400 transition-colors">Cookie Policy</Link></li>
                                <li>
                                    <button
                                        onClick={() => setIsDisclosureOpen(true)}
                                        className="hover:text-blue-400 transition-colors text-left"
                                    >
                                        Affiliate Disclosure
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
                        &copy; {new Date().getFullYear()} cybersafeantivirus. All rights reserved.
                    </div>
                </div>
            </footer>
            <AffiliateDisclosureModal isOpen={isDisclosureOpen} onClose={() => setIsDisclosureOpen(false)} />
        </>
    );
};

export default Footer;
