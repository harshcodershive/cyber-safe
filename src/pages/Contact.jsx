
const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">Contact Us</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                Have questions or suggestions? We'd love to hear from you.
            </p>
            <div className="inline-block bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                <p className="text-lg text-slate-800 font-medium">Email us at:</p>
                <a href="mailto:support@cybersafe.com" className="text-blue-600 text-xl font-bold hover:underline">support@cybersafe.com</a>
            </div>
        </div>
    );
};

export default Contact;
