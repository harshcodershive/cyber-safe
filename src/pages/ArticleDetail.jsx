
import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { guides, blogs } from '../data/resources';

const ArticleDetail = ({ type }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Choose data source based on type
    const dataSource = type === 'guide' ? guides : blogs;
    const article = dataSource.find(item => item.id === parseInt(id));

    useEffect(() => {
        if (!article) {
            navigate('/resources');
        }
        window.scrollTo(0, 0);
    }, [article, navigate]);

    if (!article) return null;

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="mb-8 flex items-center text-sm text-slate-500">
                    <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <Link to="/resources" className="hover:text-blue-600 transition-colors">Resources</Link>
                    <span className="mx-2">/</span>
                    <span className="text-slate-900 font-medium truncate">{article.title}</span>
                </div>

                <article className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    {/* Header Image */}
                    <div className="w-full aspect-video md:aspect-[21/9] relative">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white">
                            <div className="flex items-center gap-3 mb-3">
                                {type === 'guide' ? (
                                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                        {article.category}
                                    </span>
                                ) : (
                                    <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                        Blog
                                    </span>
                                )}
                                <span className="text-slate-200 text-sm font-medium">
                                    {type === 'guide' ? article.readTime : article.date}
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-2 text-shadow-sm">
                                {article.title}
                            </h1>
                            {type === 'blog' && (
                                <p className="text-slate-200 text-base font-medium">By {article.author}</p>
                            )}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12">
                        <div className="prose prose-lg prose-slate max-w-none hover:prose-a:text-blue-600">
                            {/* Render HTML content safely */}
                            <div dangerouslySetInnerHTML={{ __html: article.content }} />
                        </div>
                    </div>
                </article>

                {/* Back Button */}
                <div className="mt-8 text-center">
                    <Link
                        to="/resources"
                        className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                        Back to Resources
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ArticleDetail;
