
import { guides, blogs } from '../data/resources';

const Resources = () => {
    return (
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Cybersecurity Resources & Blog</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Access helpful cybersecurity resources, safety checklists, and beginner guides designed to improve your digital awareness.
                    </p>
                </div>

                {/* Guides Section */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-blue-600 pl-4">Security Guides</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {guides.map((guide) => (
                            <div key={guide.id} className="group cursor-pointer">
                                <div className="relative overflow-hidden rounded-xl mb-4 aspect-video">
                                    <img
                                        src={guide.image}
                                        alt={guide.title}
                                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900 uppercase tracking-wide">
                                        {guide.category}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    <a href={guide.link}>{guide.title}</a>
                                </h3>
                                <p className="text-slate-600 text-sm mb-3 line-clamp-2">{guide.excerpt}</p>
                                <div className="text-slate-400 text-xs font-medium uppercase tracking-wider">{guide.readTime}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Blog Section */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-purple-600 pl-4">Latest from Blog</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {blogs.map((blog) => (
                            <div key={blog.id} className="flex flex-col md:flex-row gap-6 items-start group cursor-pointer">
                                <div className="w-full md:w-1/3 aspect-video rounded-lg overflow-hidden shrink-0">
                                    <img src={blog.image} alt={blog.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="flex-grow">
                                    <div className="text-sm text-slate-500 mb-2">{blog.date} • {blog.author}</div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                                        <a href={blog.link}>{blog.title}</a>
                                    </h3>
                                    <p className="text-slate-600 text-sm line-clamp-2">{blog.excerpt}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resources;
