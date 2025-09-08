import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Items',
        href: '/items',
    },
];

interface Item {
    id: number;
    code: string;
    name: string;
    barcode?: string;
    category?: { name: string };
    brand?: { name: string };
    unit: { name: string };
    cost_price: number;
    stock_quantity: number;
    status: string;
    display_on_website: boolean;
    is_active: boolean;
}

interface ItemsIndexProps {
    items: {
        data: Item[];
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

export default function ItemsIndex({ items }: ItemsIndexProps) {
    const getStatusBadge = (status: string) => {
        const statusColors = {
            for_sale: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
            not_for_sale: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
            purchase_only: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
            assembled_item: 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400',
        };
        
        return statusColors[status as keyof typeof statusColors] || 'bg-gray-100 text-gray-800';
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Items Management" />
            <div className="p-6 space-y-6">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">📦 Items Management</h1>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                            Manage your inventory items, prices, and stock levels
                        </p>
                    </div>
                    <Link
                        href="/items/create"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                    >
                        <span>➕</span>
                        <span>Add Item</span>
                    </Link>
                </div>

                {/* Filters */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border">
                    <div className="flex flex-wrap gap-4">
                        <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                            <option value="">All Categories</option>
                            <option value="electronics">Electronics</option>
                            <option value="clothing">Clothing</option>
                            <option value="books">Books</option>
                        </select>
                        <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                            <option value="">All Status</option>
                            <option value="for_sale">For Sale</option>
                            <option value="not_for_sale">Not For Sale</option>
                            <option value="purchase_only">Purchase Only</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Search items..."
                            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        />
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border">
                        <div className="flex items-center space-x-3">
                            <div className="text-xl">📦</div>
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Total Items</p>
                                <p className="text-lg font-bold text-gray-900 dark:text-white">{items.total}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border">
                        <div className="flex items-center space-x-3">
                            <div className="text-xl">✅</div>
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Active Items</p>
                                <p className="text-lg font-bold text-gray-900 dark:text-white">
                                    {items.data.filter(item => item.is_active).length}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border">
                        <div className="flex items-center space-x-3">
                            <div className="text-xl">🌐</div>
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">On Website</p>
                                <p className="text-lg font-bold text-gray-900 dark:text-white">
                                    {items.data.filter(item => item.display_on_website).length}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border">
                        <div className="flex items-center space-x-3">
                            <div className="text-xl">⚠️</div>
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Low Stock</p>
                                <p className="text-lg font-bold text-gray-900 dark:text-white">
                                    {items.data.filter(item => item.stock_quantity < 10).length}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Items Table */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                                <tr>
                                    <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Item</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Code/Barcode</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Category/Brand</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Stock</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Price</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Status</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                                {items.data.map((item) => (
                                    <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                        <td className="py-3 px-4">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                                                    📦
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900 dark:text-white">{item.name}</p>
                                                    {item.display_on_website && (
                                                        <span className="text-xs text-blue-600 dark:text-blue-400">🌐 On Website</span>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-4">
                                            <p className="text-gray-900 dark:text-white">{item.code}</p>
                                            {item.barcode && (
                                                <p className="text-sm text-gray-500 dark:text-gray-400">{item.barcode}</p>
                                            )}
                                        </td>
                                        <td className="py-3 px-4">
                                            <p className="text-gray-900 dark:text-white">
                                                {item.category?.name || 'No Category'}
                                            </p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                {item.brand?.name || 'No Brand'}
                                            </p>
                                        </td>
                                        <td className="py-3 px-4">
                                            <div className="flex items-center space-x-1">
                                                <span className="font-medium text-gray-900 dark:text-white">
                                                    {item.stock_quantity}
                                                </span>
                                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                                    {item.unit.name}
                                                </span>
                                            </div>
                                            {item.stock_quantity < 10 && (
                                                <span className="text-xs text-red-600 dark:text-red-400">⚠️ Low Stock</span>
                                            )}
                                        </td>
                                        <td className="py-3 px-4">
                                            <p className="font-medium text-gray-900 dark:text-white">
                                                ${item.cost_price.toFixed(2)}
                                            </p>
                                        </td>
                                        <td className="py-3 px-4">
                                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(item.status)}`}>
                                                {item.status.replace('_', ' ').toUpperCase()}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4">
                                            <div className="flex items-center space-x-2">
                                                <Link
                                                    href={`/items/${item.id}`}
                                                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                                                >
                                                    👁️
                                                </Link>
                                                <Link
                                                    href={`/items/${item.id}/edit`}
                                                    className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-800 dark:hover:text-yellow-300"
                                                >
                                                    ✏️
                                                </Link>
                                                <button className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300">
                                                    📋
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
                                Showing {((items.current_page - 1) * items.per_page) + 1} to {Math.min(items.current_page * items.per_page, items.total)} of {items.total} results
                            </p>
                            <div className="flex items-center space-x-2">
                                <button
                                    disabled={items.current_page === 1}
                                    className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 disabled:opacity-50"
                                >
                                    Previous
                                </button>
                                <span className="px-3 py-1 bg-blue-600 text-white rounded-md">
                                    {items.current_page}
                                </span>
                                <button
                                    disabled={items.current_page === items.last_page}
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