
import { antiviruses } from '../data/antiviruses';
import AntivirusCard from '../components/AntivirusCard';

const TopAntiviruses = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Top Antivirus Deals</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Explore our curated list of the best antivirus software available today.
                        Compare features, prices, and protection ratings to find the perfect match for your security needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {antiviruses.map((antivirus) => (
                        <AntivirusCard key={antivirus.id} data={antivirus} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopAntiviruses;
