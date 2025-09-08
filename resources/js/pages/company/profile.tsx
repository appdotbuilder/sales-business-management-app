import { Head } from '@inertiajs/react';

interface Company {
    id: number;
    name: string;
    description?: string;
    history?: string;
    address?: string;
    phone?: string;
    email?: string;
    website?: string;
}

interface Item {
    id: number;
    name: string;
    description?: string;
    images?: string[];
    cost_price: number;
    category?: { name: string };
    brand?: { name: string };
}

interface CompanyProfileProps {
    company: Company;
    featuredItems: Item[];
    [key: string]: unknown;
}

export default function CompanyProfile({ company, featuredItems }: CompanyProfileProps) {
    return (
        <>
            <Head title={`${company.name} - Company Profile`} />
            <div className="min-h-screen bg-white">
                {/* Header */}
                <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">{company.name}</h1>
                            {company.description && (
                                <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                                    {company.description}
                                </p>
                            )}
                        </div>
                    </div>
                </header>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Company Information */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">🏢 About Our Company</h2>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                {company.history && (
                                    <div className="prose prose-lg max-w-none">
                                        <p className="text-gray-600 leading-relaxed">{company.history}</p>
                                    </div>
                                )}
                                {!company.history && (
                                    <div className="text-gray-600">
                                        <p className="mb-4">
                                            We are a leading business solutions provider, committed to delivering 
                                            high-quality products and services to our valued customers.
                                        </p>
                                        <p>
                                            With years of experience in the industry, we have built a reputation 
                                            for excellence, innovation, and customer satisfaction.
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl">
                                <h3 className="text-xl font-semibold text-gray-900 mb-6">📞 Contact Information</h3>
                                <div className="space-y-4">
                                    {company.address && (
                                        <div className="flex items-start space-x-3">
                                            <span className="text-blue-600 text-lg">📍</span>
                                            <p className="text-gray-700">{company.address}</p>
                                        </div>
                                    )}
                                    {company.phone && (
                                        <div className="flex items-center space-x-3">
                                            <span className="text-blue-600 text-lg">📞</span>
                                            <p className="text-gray-700">{company.phone}</p>
                                        </div>
                                    )}
                                    {company.email && (
                                        <div className="flex items-center space-x-3">
                                            <span className="text-blue-600 text-lg">📧</span>
                                            <p className="text-gray-700">{company.email}</p>
                                        </div>
                                    )}
                                    {company.website && (
                                        <div className="flex items-center space-x-3">
                                            <span className="text-blue-600 text-lg">🌐</span>
                                            <a 
                                                href={company.website} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-800"
                                            >
                                                {company.website}
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Featured Products */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">🛍️ Featured Products</h2>
                        {featuredItems.length > 0 ? (
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {featuredItems.map((item) => (
                                    <div key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                        <div className="aspect-square bg-gray-100 flex items-center justify-center">
                                            <span className="text-4xl text-gray-400">📦</span>
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                                            {item.description && (
                                                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                                    {item.description.substring(0, 100)}...
                                                </p>
                                            )}
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    {item.category && (
                                                        <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                                                            {item.category.name}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="text-lg font-bold text-green-600">
                                                    ${item.cost_price.toFixed(2)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <div className="text-6xl mb-4">📦</div>
                                <p className="text-gray-600 text-lg">Featured products coming soon!</p>
                            </div>
                        )}
                    </section>

                    {/* Services */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">⚡ Our Services</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center p-6 bg-blue-50 rounded-xl">
                                <div className="text-4xl mb-4">🚚</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Delivery</h3>
                                <p className="text-gray-600">Quick and reliable delivery to your doorstep</p>
                            </div>
                            <div className="text-center p-6 bg-green-50 rounded-xl">
                                <div className="text-4xl mb-4">🔒</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure Payment</h3>
                                <p className="text-gray-600">Safe and secure payment processing</p>
                            </div>
                            <div className="text-center p-6 bg-purple-50 rounded-xl">
                                <div className="text-4xl mb-4">💬</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Support</h3>
                                <p className="text-gray-600">Round-the-clock customer support</p>
                            </div>
                        </div>
                    </section>

                    {/* Contact Form */}
                    <section className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">📧 Get In Touch</h2>
                        <div className="max-w-2xl mx-auto">
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Your email"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Subject</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Message subject"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Message</label>
                                    <textarea
                                        rows={5}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Your message"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                >
                                    Send Message 🚀
                                </button>
                            </form>
                        </div>
                    </section>
                </div>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <p>&copy; 2024 {company.name}. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    );
}