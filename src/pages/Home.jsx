
import { antiviruses } from '../data/antiviruses';
import AntivirusCard from '../components/AntivirusCard';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-slate-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                        Secure Your Digital Life with Top Antivirus Protection
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10">
                        We compare the best antivirus software so you can browse, shop, and bank online with confidence.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="#top-list" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors">
                            Find Protection
                        </a>
                        <Link to="/about" className="bg-slate-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-700 transition-colors border border-slate-700">
                            Learn More
                        </Link>
                    </div>
                    <div className="mt-12 flex justify-center space-x-8 opacity-70 grayscale">
                        {/* Placeholder Trust Badges */}
                        <div className="text-slate-500 font-semibold">SSL Secured</div>
                        <div className="text-slate-500 font-semibold">Verified Reviews</div>
                        <div className="text-slate-500 font-semibold">Expert Tested</div>
                    </div>
                </div>
            </section>

            {/* List Section */}
            <section id="top-list" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Top Rated Antivirus Software 2026</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Our experts have tested and ranked the best security solutions based on protection score, performance impact, and value.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {antiviruses.map((antivirus) => (
                            <AntivirusCard key={antivirus.id} data={antivirus} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Features/Trust Section */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div>
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Verified Protection</h3>
                            <p className="text-slate-600">We only list software that has passed rigorous independent lab testing.</p>
                        </div>
                        <div>
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Best Prices</h3>
                            <p className="text-slate-600">Access exclusive deals and discounts through our partner links.</p>
                        </div>
                        <div>
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Up-to-Date Info</h3>
                            <p className="text-slate-600">We constantly update our lists to reflect the latest threats and software versions.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
