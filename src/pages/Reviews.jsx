
import { antiviruses } from '../data/antiviruses';
import AntivirusCard from '../components/AntivirusCard';

const Reviews = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Antivirus Software Reviews</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Read detailed reviews of popular antivirus software, including real-world performance insights, pros and cons, and who each product is best suited for.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {antiviruses.map((antivirus) => (
                        <AntivirusCard key={antivirus.id} data={antivirus} />
                    ))}
                    {/* Placeholder for more content */}
                    <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                        <div className="bg-blue-50 p-4 rounded-full mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">More Reviews Coming Soon</h3>
                        <p className="text-slate-500">We are currently testing more providers to bring you the most comprehensive list.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
