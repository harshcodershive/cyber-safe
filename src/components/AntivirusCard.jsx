
const AntivirusCard = ({ data }) => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-slate-100 flex flex-col h-full">
            <div className="p-6 flex-grow">
                <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-auto bg-gray-50 rounded-lg p-1 flex items-center justify-center">
                        <img src={data.logo} alt={data.name} className="h-full w-auto object-contain" />
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                            {data.discount}
                        </span>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">{data.name}</h3>

                <div className="flex items-center mb-4">
                    <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-5 h-5 ${i < Math.floor(data.rating) ? "" : "text-gray-300"}`}>
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                            </svg>
                        ))}
                    </div>
                    <span className="ml-2 text-slate-500 text-sm font-medium">{data.rating} ({data.reviews} reviews)</span>
                </div>

                <ul className="space-y-2 mb-6">
                    {data.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm text-slate-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-500 mr-2 flex-shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <span className="block text-xs text-slate-500 line-through">{data.originalPrice}</span>
                        <span className="text-2xl font-bold text-slate-900">{data.price}</span>
                        <span className="text-xs text-slate-500 ml-1">/year</span>
                    </div>
                </div>
                <a href={data.link} className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md">
                    Get Deal
                </a>
                <p className="text-center text-xs text-slate-400 mt-2">30-day money-back guarantee</p>
            </div>
        </div>
    );
};

export default AntivirusCard;
