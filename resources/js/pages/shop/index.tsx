import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

interface Item {
    id: number;
    name: string;
    description?: string;
    images?: string[];
    cost_price: number;
    category?: { name: string };
    brand?: { name: string };
    stock_quantity: number;
}

interface Category {
    id: number;
    name: string;
}

interface ShopIndexProps {
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
    categories: Category[];
    [key: string]: unknown;
}

export default function ShopIndex({ items, categories }: ShopIndexProps) {
    const [cart, setCart] = useState<Array<{ id: number; quantity: number }>>([]);

    const addToCart = (itemId: number) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === itemId);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === itemId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, { id: itemId, quantity: 1 }];
        });
    };

    const getCartItemCount = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <>
            <Head title="Shop - Business Pro E-commerce" />
            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <header className="bg-white shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-4">
                            <div className="flex items-center space-x-8">
                                <Link href="/" className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold text-sm">BP</span>
                                    </div>
                                    <span className="text-xl font-bold text-gray-900">Business Pro</span>
                                </Link>
                                <nav className="hidden md:flex space-x-6">
                                    <Link href="/shop" className="text-blue-600 font-medium">Shop</Link>
                                    <Link href="/company" className="text-gray-600 hover:text-gray-900">About</Link>
                                </nav>
                            </div>
                            <div className="flex items-center space-x-4">
                                <button className="relative text-gray-600 hover:text-gray-900">
                                    <span className="text-2xl">🛒</span>
                                    {getCartItemCount() > 0 && (
                                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                            {getCartItemCount()}
                                        </span>
                                    )}
                                </button>
                                <Link
                                    href="/login"
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Page Title */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">🛍️ Our Products</h1>
                        <p className="text-gray-600 mt-2">Discover our wide range of quality products</p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar Filters */}
                        <aside className="lg:w-64">
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">🔍 Filters</h3>
                                
                                {/* Category Filter */}
                                <div className="mb-6">
                                    <h4 className="font-medium text-gray-900 mb-3">Categories</h4>
                                    <div className="space-y-2">
                                        <label className="flex items-center">
                                            <input type="checkbox" className="rounded border-gray-300" />
                                            <span className="ml-2 text-gray-700">All Categories</span>
                                        </label>
                                        {categories.map((category) => (
                                            <label key={category.id} className="flex items-center">
                                                <input type="checkbox" className="rounded border-gray-300" />
                                                <span className="ml-2 text-gray-700">{category.name}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Price Range */}
                                <div className="mb-6">
                                    <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
                                    <div className="space-y-2">
                                        <label className="flex items-center">
                                            <input type="checkbox" className="rounded border-gray-300" />
                                            <span className="ml-2 text-gray-700">Under $25</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="checkbox" className="rounded border-gray-300" />
                                            <span className="ml-2 text-gray-700">$25 - $50</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="checkbox" className="rounded border-gray-300" />
                                            <span className="ml-2 text-gray-700">$50 - $100</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="checkbox" className="rounded border-gray-300" />
                                            <span className="ml-2 text-gray-700">Over $100</span>
                                        </label>
                                    </div>
                                </div>

                                {/* Availability */}
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-3">Availability</h4>
                                    <div className="space-y-2">
                                        <label className="flex items-center">
                                            <input type="checkbox" className="rounded border-gray-300" />
                                            <span className="ml-2 text-gray-700">In Stock</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="checkbox" className="rounded border-gray-300" />
                                            <span className="ml-2 text-gray-700">Pre-order</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <main className="flex-1">
                            {/* Search and Sort */}
                            <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                                <div className="flex flex-col sm:flex-row gap-4 justify-between">
                                    <div className="flex-1">
                                        <input
                                            type="text"
                                            placeholder="Search products..."
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                        <option value="newest">Newest First</option>
                                        <option value="price_low">Price: Low to High</option>
                                        <option value="price_high">Price: High to Low</option>
                                        <option value="name">Name A-Z</option>
                                    </select>
                                </div>
                            </div>

                            {/* Products Grid */}
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                {items.data.map((item) => (
                                    <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                                        <div className="aspect-square bg-gray-100 flex items-center justify-center">
                                            <span className="text-6xl text-gray-400">📦</span>
                                        </div>
                                        <div className="p-4">
                                            <div className="flex items-start justify-between mb-2">
                                                <h3 className="font-semibold text-gray-900 flex-1">{item.name}</h3>
                                                {item.stock_quantity > 0 ? (
                                                    <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full ml-2">
                                                        ✅ In Stock
                                                    </span>
                                                ) : (
                                                    <span className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded-full ml-2">
                                                        ❌ Out of Stock
                                                    </span>
                                                )}
                                            </div>
                                            
                                            {item.category && (
                                                <p className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full inline-block mb-3">
                                                    {item.category.name}
                                                </p>
                                            )}

                                            {item.description && (
                                                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                                    {item.description.substring(0, 100)}...
                                                </p>
                                            )}

                                            <div className="flex items-center justify-between">
                                                <span className="text-xl font-bold text-green-600">
                                                    ${item.cost_price.toFixed(2)}
                                                </span>
                                                <button
                                                    onClick={() => addToCart(item.id)}
                                                    disabled={item.stock_quantity <= 0}
                                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                                                >
                                                    {item.stock_quantity > 0 ? '🛒 Add to Cart' : '❌ Out of Stock'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm text-gray-700">
                                        Showing {((items.current_page - 1) * items.per_page) + 1} to {Math.min(items.current_page * items.per_page, items.total)} of {items.total} products
                                    </p>
                                    <div className="flex items-center space-x-2">
                                        <button
                                            disabled={items.current_page === 1}
                                            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            Previous
                                        </button>
                                        <span className="px-4 py-2 bg-blue-600 text-white rounded-md">
                                            {items.current_page}
                                        </span>
                                        <button
                                            disabled={items.current_page === items.last_page}
                                            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>

                {/* Cart Summary (if items in cart) */}
                {getCartItemCount() > 0 && (
                    <div className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                        <p className="font-semibold">🛒 Cart: {getCartItemCount()} items</p>
                        <button className="mt-2 bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
                            View Cart
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}