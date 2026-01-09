
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-slate-900 text-white p-4 shadow-lg z-50 border-t border-slate-700 animate-slide-up">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm text-slate-300 text-center sm:text-left">
                    <p>
                        We use cookies to enhance your experience, analyze site traffic, and deliver personalized content. By continuing to use our site, you consent to our use of cookies.
                        <Link to="/cookie-policy" className="text-blue-400 hover:text-blue-300 ml-1 underline transition-colors">
                            Learn more
                        </Link>
                    </p>
                </div>
                <button
                    onClick={handleAccept}
                    className="whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors text-sm shadow-sm"
                >
                    Accept Cookies
                </button>
            </div>
        </div>
    );
};

export default CookieConsent;
