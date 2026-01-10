
import { useEffect } from 'react';

const AffiliateDisclosureModal = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm transition-opacity">
            <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden transform transition-all">
                <div className="bg-blue-600 px-6 py-4 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                        </svg>
                        Affiliate Disclosure
                    </h3>
                    <button onClick={onClose} className="text-blue-100 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="p-6 md:p-8">
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        cybersafeantivirus participates in affiliate programs. This means we may earn a commission when users purchase products through links on our website, at <strong>no additional cost to you</strong>.
                    </p>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        Our recommendations are based on independent research, testing, and analysis. Our editorial integrity is not influenced by affiliate partnerships. We only recommend products we trust and believe will provide value to our users.
                    </p>
                    <button
                        onClick={onClose}
                        className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
                    >
                        I Understand
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AffiliateDisclosureModal;
