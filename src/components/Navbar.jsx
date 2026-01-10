
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDisclosureHovered, setIsDisclosureHovered] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path ? "text-blue-600 font-semibold" : "text-slate-600 hover:text-blue-600 font-medium";

    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                            CyberSafe
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        <Link to="/" className={isActive("/")}>Home</Link>
                        <Link to="/top-antiviruses" className={isActive("/top-antiviruses")}>Top Picks</Link>
                        <Link to="/reviews" className={isActive("/reviews")}>Reviews</Link>
                        <Link to="/resources" className={isActive("/resources")}>Resources</Link>
                        <Link to="/about" className={isActive("/about")}>About Us</Link>
                        <Link to="/contact" className={isActive("/contact")}>Contact</Link>

                        {/* Affiliate Disclosure Hover */}
                        <div
                            className="relative group h-16 flex items-center"
                            onMouseEnter={() => setIsDisclosureHovered(true)}
                            onMouseLeave={() => setIsDisclosureHovered(false)}
                        >
                            <button className="text-slate-600 hover:text-blue-600 font-medium cursor-help flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
                                </svg>
                                Disclosure
                            </button>

                            {isDisclosureHovered && (
                                <div className="absolute top-14 right-0 w-72 bg-white rounded-lg shadow-xl border border-gray-100 p-4 z-50 text-sm animate-fade-in">
                                    <div className="flex items-start gap-3">
                                        <div className="bg-blue-100 p-2 rounded-full shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-600">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-slate-700 leading-relaxed">
                                                <strong>Advertising Disclosure:</strong> CyberSafe is supported by our readers. When you purchase through links on our site, we may earn an affiliate commission at no extra cost to you.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link to="/top-antiviruses" className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">Get Deals</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-blue-600 p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <div className="px-4 pt-2 pb-4 space-y-1">
                        <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-gray-50 rounded-md">Home</Link>
                        <Link to="/top-antiviruses" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-gray-50 rounded-md">Top Picks</Link>
                        <Link to="/reviews" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-gray-50 rounded-md">Reviews</Link>
                        <Link to="/resources" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-gray-50 rounded-md">Resources</Link>
                        <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-gray-50 rounded-md">About Us</Link>
                        <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-gray-50 rounded-md">Contact</Link>
                        <Link to="/top-antiviruses" onClick={() => setIsOpen(false)} className="block w-full text-center mt-4 bg-blue-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700">Get Deals</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
