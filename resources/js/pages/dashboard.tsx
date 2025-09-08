import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

interface DashboardProps {
    stats: {
        totalSales: number;
        totalPurchases: number;
        profit: number;
        expenses: number;
        activeStock: number;
        websiteVisits: number;
        invoicesCount: number;
    };
    [key: string]: unknown;
}

export default function Dashboard({ stats }: DashboardProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Business Pro Dashboard" />
            <div className="p-6 space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">📊 Business Dashboard</h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                        Get insights into your business performance
                    </p>
                </div>

                {/* Filter Controls */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border">
                    <div className="flex flex-wrap gap-4">
                        <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                        </select>
                        <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                            <option value="">All Months</option>
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-blue-100">💰 Total Sales</p>
                                <p className="text-2xl font-bold">${stats.totalSales.toLocaleString()}</p>
                            </div>
                            <div className="text-3xl opacity-80">📈</div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl text-white">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-green-100">🛒 Total Purchases</p>
                                <p className="text-2xl font-bold">${stats.totalPurchases.toLocaleString()}</p>
                            </div>
                            <div className="text-3xl opacity-80">🛍️</div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-purple-100">📊 Profit</p>
                                <p className="text-2xl font-bold">${stats.profit.toLocaleString()}</p>
                            </div>
                            <div className="text-3xl opacity-80">💎</div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-xl text-white">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-orange-100">💸 Expenses</p>
                                <p className="text-2xl font-bold">${stats.expenses.toLocaleString()}</p>
                            </div>
                            <div className="text-3xl opacity-80">📉</div>
                        </div>
                    </div>
                </div>

                {/* Secondary Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border">
                        <div className="flex items-center space-x-3">
                            <div className="text-2xl">📦</div>
                            <div>
                                <p className="text-gray-600 dark:text-gray-400">Active Stock Items</p>
                                <p className="text-xl font-bold text-gray-900 dark:text-white">{stats.activeStock}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border">
                        <div className="flex items-center space-x-3">
                            <div className="text-2xl">🌐</div>
                            <div>
                                <p className="text-gray-600 dark:text-gray-400">Website Visits</p>
                                <p className="text-xl font-bold text-gray-900 dark:text-white">{stats.websiteVisits.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border">
                        <div className="flex items-center space-x-3">
                            <div className="text-2xl">📄</div>
                            <div>
                                <p className="text-gray-600 dark:text-gray-400">Store Invoices</p>
                                <p className="text-xl font-bold text-gray-900 dark:text-white">{stats.invoicesCount}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Charts Placeholder */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">📈 Sales Trend</h3>
                        <div className="h-64 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                            <p className="text-gray-500 dark:text-gray-400">Sales Chart Coming Soon</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">🎯 Top Categories</h3>
                        <div className="h-64 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                            <p className="text-gray-500 dark:text-gray-400">Category Chart Coming Soon</p>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">⚡ Quick Actions</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <button className="flex flex-col items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                            <div className="text-2xl mb-2">➕</div>
                            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Add Item</span>
                        </button>
                        <button className="flex flex-col items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
                            <div className="text-2xl mb-2">🛒</div>
                            <span className="text-sm font-medium text-green-700 dark:text-green-300">New Sale</span>
                        </button>
                        <button className="flex flex-col items-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
                            <div className="text-2xl mb-2">📋</div>
                            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Purchase</span>
                        </button>
                        <button className="flex flex-col items-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors">
                            <div className="text-2xl mb-2">👥</div>
                            <span className="text-sm font-medium text-orange-700 dark:text-orange-300">Add Customer</span>
                        </button>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}