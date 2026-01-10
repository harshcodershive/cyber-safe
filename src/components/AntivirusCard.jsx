
const AntivirusCard = ({ data }) => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-slate-100 flex flex-col h-full relative">
            {/* Discount Badge - Positioned Absolute */}
            <div className="absolute top-4 right-4 z-10">
                <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                    {data.discount}
                </span>
            </div>

            <div className="p-5 md:p-6 flex-grow flex flex-col">
                {/* Large Centered Logo Area - Responsive Height */}
                <div className="h-24 md:h-32 w-full flex items-center justify-center mb-4 md:mb-6 p-2">
                    <img
                        src={data.logo}
                        alt={data.name}
                        className="h-full w-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                </div>

                <div className="text-center mb-4">
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">{data.name}</h3>

                    {/* Centered Rating */}
                    <div className="flex items-center justify-center gap-2">
                        <div className="flex text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-5 h-5 ${i < Math.floor(data.rating) ? "" : "text-gray-300"}`}>
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-slate-500 text-sm font-medium">({data.reviews})</span>
                    </div>
                </div>

                <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6 flex-grow">
                    {data.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm text-slate-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bg-gray-50 px-5 md:px-6 py-4 md:py-5 border-t border-gray-100">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <span className="block text-xs text-slate-500 line-through">{data.originalPrice}</span>
                        <div className="flex items-baseline">
                            <span className="text-xl md:text-2xl font-bold text-slate-900">{data.price}</span>
                        </div>
                    </div>
                </div>
                <a href={data.link} className="block w-full bg-blue-600 text-white text-center py-3 md:py-3.5 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md text-base md:text-lg">
                    Get Deal
                </a>
                <p className="text-center text-xs text-slate-400 mt-3">30-day money-back guarantee</p>
            </div>
        </div>
    );
};

export default AntivirusCard;
