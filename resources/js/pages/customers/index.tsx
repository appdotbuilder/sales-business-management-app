import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Customers',
        href: '/customers',
    },
];

interface Customer {
    id: number;
    code: string;
    name: string;
    email?: string;
    phone?: string;
    city?: string;
    customer_group?: { name: string };
    region?: { name: string };
    credit_limit: number;
    status: string;
    created_at: string;
}

interface CustomersIndexProps {
    customers: {
        data: Customer[];
        links: Array<{
            url?: string;
            label: string;
            active: boolean;
        }>;
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
    [key: string]: unknown;
}

export default function CustomersIndex({ customers }: CustomersIndexProps) {
    const getStatusBadge = (status: string) => {
        return status === 'active' 
            ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
            : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Customers Management" />
            <div className="p-6 space-y-6">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">👥 Customers Management</h1>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                            Manage your customer database and relationships
                        </p>
                    </div>
                    <Link
                        href="/customers/create"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                    >
                        <span>➕</span>
                        <span>Add Customer</span>
                    </Link>
                </div>

                {/* Filters */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border">
                    <div className="flex flex-wrap gap-4">
                        <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                            <option value="">All Groups</option>
                            <option value="retail">Retail</option>
                            <option value="wholesale">Wholesale</option>
                            <option value="vip">VIP</option>
                        </select>
                        <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                            <option value="">All Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Search customers..."
                            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        />
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border">
                        <div className="flex items-center space-x-3">
                            <div className="text-xl">👥</div>
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Total Customers</p>
                                <p className="text-lg font-bold text-gray-900 dark:text-white">{customers.total}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border">
                        <div className="flex items-center space-x-3">
                            <div className="text-xl">✅</div>
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Active</p>
                                <p className="text-lg font-bold text-gray-900 dark:text-white">
                                    {customers.data.filter(c => c.status === 'active').length}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border">
                        <div className="flex items-center space-x-3">
                            <div className="text-xl">📧</div>
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">With Email</p>
                                <p className="text-lg font-bold text-gray-900 dark:text-white">
                                    {customers.data.filter(c => c.email).length}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border">
                        <div className="flex items-center space-x-3">
                            <div className="text-xl">💎</div>
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">VIP Customers</p>
                                <p className="text-lg font-bold text-gray-900 dark:text-white">
                                    {customers.data.filter(c => c.credit_limit > 10000).length}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Customers Table */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                                <tr>
                                    <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Customer</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Code</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Contact</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Group/Region</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Credit Limit</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Status</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                                {customers.data.map((customer) => (
                                    <tr key={customer.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                        <td className="py-3 px-4">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                                                    <span className="text-blue-600 dark:text-blue-400 font-medium">
                                                        {customer.name.charAt(0).toUpperCase()}
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900 dark:text-white">{customer.name}</p>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                                        Member since {new Date(customer.created_at).getFullYear()}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-4">
                                            <p className="text-gray-900 dark:text-white font-mono">{customer.code}</p>
                                        </td>
                                        <td className="py-3 px-4">
                                            <div>
                                                {customer.email && (
                                                    <p className="text-gray-900 dark:text-white">{customer.email}</p>
                                                )}
                                                {customer.phone && (
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">{customer.phone}</p>
                                                )}
                                                {customer.city && (
                                                    <p className="text-xs text-gray-400 dark:text-gray-500">{customer.city}</p>
                                                )}
                                            </div>
                                        </td>
                                        <td className="py-3 px-4">
                                            <p className="text-gray-900 dark:text-white">
                                                {customer.customer_group?.name || 'Default'}
                                            </p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                {customer.region?.name || 'No Region'}
                                            </p>
                                        </td>
                                        <td className="py-3 px-4">
                                            <div className="flex items-center space-x-2">
                                                <span className="font-medium text-gray-900 dark:text-white">
                                                    ${customer.credit_limit.toLocaleString()}
                                                </span>
                                                {customer.credit_limit > 10000 && (
                                                    <span className="text-yellow-500">👑</span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="py-3 px-4">
                                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(customer.status)}`}>
                                                {customer.status.toUpperCase()}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4">
                                            <div className="flex items-center space-x-2">
                                                <Link
                                                    href={`/customers/${customer.id}`}
                                                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                                                >
                                                    👁️
                                                </Link>
                                                <Link
                                                    href={`/customers/${customer.id}/edit`}
                                                    className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-800 dark:hover:text-yellow-300"
                                                >
                                                    ✏️
                                                </Link>
                                                <button className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300">
                                                    💬
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 border-t border-gray-200 dark:border-gray-600">
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                Showing {((customers.current_page - 1) * customers.per_page) + 1} to {Math.min(customers.current_page * customers.per_page, customers.total)} of {customers.total} results
                            </p>
                            <div className="flex items-center space-x-2">
                                <button
                                    disabled={customers.current_page === 1}
                                    className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 disabled:opacity-50"
                                >
                                    Previous
                                </button>
                                <span className="px-3 py-1 bg-blue-600 text-white rounded-md">
                                    {customers.current_page}
                                </span>
                                <button
                                    disabled={customers.current_page === customers.last_page}
                                    className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 disabled:opacity-50"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}