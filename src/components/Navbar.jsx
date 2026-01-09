
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

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
                        <Link to="/" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Home</Link>
                        <Link to="/top-antiviruses" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Top Antiviruses</Link>
                        <Link to="/about" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">About Us</Link>
                        <Link to="/contact" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Contact</Link>
                        <Link to="/get-started" className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">Get Approved</Link>
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
                        <Link to="/" className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-gray-50 rounded-md">Home</Link>
                        <Link to="/top-antiviruses" className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-gray-50 rounded-md">Top Antiviruses</Link>
                        <Link to="/about" className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-gray-50 rounded-md">About Us</Link>
                        <Link to="/contact" className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-gray-50 rounded-md">Contact</Link>
                        <Link to="/get-started" className="block w-full text-center mt-4 bg-blue-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700">Get Approved</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
