<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Item;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShopController extends Controller
{
    /**
     * Display the shop index page.
     */
    public function index(Request $request)
    {
        $items = Item::with(['category', 'brand'])
            ->where('display_on_website', true)
            ->where('is_active', true)
            ->where('status', 'for_sale')
            ->when($request->search, function ($query, $search) {
                return $query->where('name', 'like', "%{$search}%")
                    ->orWhere('description', 'like', "%{$search}%");
            })
            ->when($request->category, function ($query, $category) {
                return $query->where('category_id', $category);
            })
            ->when($request->sort, function ($query, $sort) {
                switch ($sort) {
                    case 'price_low':
                        return $query->orderBy('cost_price', 'asc');
                    case 'price_high':
                        return $query->orderBy('cost_price', 'desc');
                    case 'name':
                        return $query->orderBy('name', 'asc');
                    default:
                        return $query->latest();
                }
            })
            ->latest()
            ->paginate(12);

        $categories = Category::active()
            ->whereHas('items', function ($query) {
                $query->where('display_on_website', true)
                    ->where('is_active', true)
                    ->where('status', 'for_sale');
            })
            ->get();

        return Inertia::render('shop/index', [
            'items' => $items,
            'categories' => $categories,
            'filters' => $request->only(['search', 'category', 'sort']),
        ]);
    }
}