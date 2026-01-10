
import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { antiviruses } from '../data/antiviruses';

const AntivirusDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const antivirus = antiviruses.find(a => a.id === parseInt(id));

    useEffect(() => {
        if (!antivirus) {
            navigate('/');
        }
        window.scrollTo(0, 0);
    }, [antivirus, navigate]);

    if (!antivirus) return null;

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="mb-6">
                    <Link to="/" className="text-slate-500 hover:text-blue-600 transition-colors">Home</Link>
                    <span className="mx-2 text-slate-400">/</span>
                    <Link to="/top-antiviruses" className="text-slate-500 hover:text-blue-600 transition-colors">Top Antiviruses</Link>
                    <span className="mx-2 text-slate-400">/</span>
                    <span className="text-slate-900 font-medium">{antivirus.name}</span>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100">
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        {/* Left Column: Image & Basic Info */}
                        <div className="p-8 lg:p-12 lg:border-r border-slate-100 flex flex-col items-center text-center">
                            <div className="h-48 w-full flex items-center justify-center mb-8">
                                <img
                                    src={antivirus.logo}
                                    alt={antivirus.name}
                                    className="h-full w-auto max-w-xs object-contain"
                                />
                            </div>
                            <h1 className="text-3xl font-bold text-slate-900 mb-4">{antivirus.name}</h1>

                            <div className="flex items-center gap-2 mb-6">
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-6 h-6 ${i < Math.floor(antivirus.rating) ? "" : "text-gray-200"}`}>
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-xl font-bold text-slate-900">{antivirus.rating}</span>
                                <span className="text-slate-500">({antivirus.reviews.toLocaleString()} reviews)</span>
                            </div>

                            <div className="w-full bg-gray-50 rounded-xl p-6 mb-6">
                                <span className="block text-slate-500 line-through text-lg">{antivirus.originalPrice}</span>
                                <div className="flex items-center justify-center gap-3 mb-2">
                                    <span className="text-4xl font-bold text-slate-900">{antivirus.price}</span>
                                    <span className="bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full text-sm">{antivirus.discount}</span>
                                </div>
                                <a
                                    href={antivirus.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full bg-blue-600 text-white text-center py-4 rounded-lg font-bold text-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all mt-6"
                                >
                                    Buy Now
                                </a>
                                <p className="text-xs text-slate-400 mt-3">30-day money-back guarantee via official site</p>
                            </div>
                        </div>

                        {/* Right Column: Details */}
                        <div className="p-8 lg:p-12 col-span-2">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Product Overview</h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-10">
                                {antivirus.description}
                            </p>

                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Features</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {antivirus.features.map((feature, index) => (
                                    <div key={index} className="flex items-start p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
                                        <div className="bg-green-100 p-2 rounded-full mr-4 shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-green-600">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        </div>
                                        <span className="text-slate-800 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-6 bg-blue-50 border border-blue-100 rounded-lg">
                                <h3 className="text-lg font-bold text-blue-900 mb-2">Why we recommend {antivirus.name}</h3>
                                <p className="text-blue-800">
                                    Our testing shows that {antivirus.name} provides exceptional protection with minimal impact on system performance.
                                    Its interface is user-friendly, and the additional privacy tools make it a comprehensive security suite for modern users.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AntivirusDetail;
