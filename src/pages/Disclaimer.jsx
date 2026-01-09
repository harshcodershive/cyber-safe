
const Disclaimer = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold text-slate-900 mb-8">Disclaimer</h1>
            <div className="prose prose-slate max-w-none text-slate-600">
                <p className="mb-4">Last Updated: January 1, 2026</p>
                <p className="mb-6">
                    The information provided on CyberSafe (the "Service") is for general informational purposes only. cyberSafe assumes no responsibility for errors or omissions in the contents on the Service.
                </p>

                <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">No Professional Advice</h2>
                <p className="mb-4">
                    The information contained on the Service is not intended as, and shall not be understood or construed as, professional advice. While the employees and/or owners of the Service are professionals and the information provided on this Service relates to issues within their area of professionalism, the information contained on the Service is not a substitute for advice from a professional who is aware of the facts and circumstances of your individual situation.
                </p>

                <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Product Evaluation</h2>
                <p className="mb-4">
                    CyberSafe provides informational content only. We do not guarantee complete protection against cyber threats. Users should evaluate products based on their personal needs. No security software can guarantee 100% protection against all threats.
                </p>

                <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">External Links</h2>
                <p className="mb-4">
                    My Website may contain links to external websites that are not provided or maintained by or in any way affiliated with CyberSafe. Please note that the CyberSafe does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
                </p>
            </div>
        </div>
    );
};

export default Disclaimer;
