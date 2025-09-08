import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Business Pro - Complete Sales & Business Management">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
                {/* Header */}
                <header className="bg-white shadow-sm dark:bg-gray-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-4">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">BP</span>
                                </div>
                                <span className="text-xl font-bold text-gray-900 dark:text-white">Business Pro</span>
                            </div>
                            <nav className="flex items-center space-x-4">
                                <Link
                                    href="/shop"
                                    className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                                >
                                    Shop
                                </Link>
                                <Link
                                    href="/company"
                                    className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                                >
                                    Company
                                </Link>
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        Go to Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                        >
                                            Get Started
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                            🚀 Business Pro
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                            Complete Sales & Business Management Solution
                        </p>
                        <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-4xl mx-auto">
                            From company profiles and e-commerce to inventory management and accounting - 
                            everything your business needs in one powerful platform
                        </p>
                        
                        {!auth.user && (
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href={route('register')}
                                    className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                                >
                                    Start Free Trial
                                </Link>
                                <Link
                                    href={route('login')}
                                    className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
                                >
                                    Login to Account
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                            <div className="text-3xl mb-4">🌐</div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Company Profile Website</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Professional company website with product showcase, services, and contact forms
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                            <div className="text-3xl mb-4">🛒</div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">E-commerce Platform</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Full-featured online store with cart, checkout, and payment gateway integration
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                            <div className="text-3xl mb-4">📊</div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Sales Dashboard</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Visual analytics for sales, profits, expenses, and inventory with filtering options
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                            <div className="text-3xl mb-4">👥</div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Multi-Role Access</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Admin, Cashier, Sales, and Customer roles with flexible permissions system
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                            <div className="text-3xl mb-4">📦</div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Inventory Management</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Complete stock control, transfers, assembly items, and minimum stock alerts
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                            <div className="text-3xl mb-4">💰</div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Accounting Module</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Full accounting with COA, journals, P&L, balance sheet, and cash flow reports
                            </p>
                        </div>
                    </div>

                    {/* Additional Features */}
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-16">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                            🎯 Complete Business Solutions
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">📋 Master Data Management</h4>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                    <li>• Items with barcodes, variants, and 15 price levels</li>
                                    <li>• Suppliers, customers, and sales agents</li>
                                    <li>• Customer groups and regional management</li>
                                    <li>• Units, brands, types, and marketplaces</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">🔄 Business Operations</h4>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                    <li>• Purchase and sales invoice management</li>
                                    <li>• Returns and refund processing</li>
                                    <li>• Item assembly and production tracking</li>
                                    <li>• Customer billing and receivables</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    {!auth.user && (
                        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-xl">
                            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business? 🚀</h2>
                            <p className="text-xl mb-8 opacity-90">
                                Join thousands of businesses already using Business Pro to streamline their operations
                            </p>
                            <Link
                                href={route('register')}
                                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                            >
                                Start Your Free Trial Today
                            </Link>
                        </div>
                    )}
                </main>
            </div>
        </>
    );
}