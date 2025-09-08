<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Item;
use App\Models\Unit;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $items = Item::with(['category', 'brand', 'unit'])
            ->when($request->search, function ($query, $search) {
                return $query->where('name', 'like', "%{$search}%")
                    ->orWhere('code', 'like', "%{$search}%")
                    ->orWhere('barcode', 'like', "%{$search}%");
            })
            ->when($request->category, function ($query, $category) {
                return $query->where('category_id', $category);
            })
            ->when($request->status, function ($query, $status) {
                return $query->where('status', $status);
            })
            ->latest()
            ->paginate(20);

        return Inertia::render('items/index', [
            'items' => $items,
            'filters' => $request->only(['search', 'category', 'status']),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('items/create', [
            'categories' => Category::active()->get(),
            'brands' => Brand::active()->get(),
            'units' => Unit::active()->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'code' => 'required|string|unique:items,code',
            'name' => 'required|string|max:255',
            'barcode' => 'nullable|string',
            'sku' => 'nullable|string',
            'description' => 'nullable|string',
            'category_id' => 'nullable|exists:categories,id',
            'brand_id' => 'nullable|exists:brands,id',
            'unit_id' => 'required|exists:units,id',
            'variant' => 'nullable|string',
            'cost_price' => 'required|numeric|min:0',
            'status' => 'required|in:for_sale,not_for_sale,purchase_only,assembled_item',
            'discount_percentage' => 'nullable|numeric|min:0|max:100',
            'discount_amount' => 'nullable|numeric|min:0',
            'stock_quantity' => 'nullable|numeric|min:0',
            'minimum_stock' => 'nullable|numeric|min:0',
            'display_on_website' => 'boolean',
            'weight' => 'nullable|numeric|min:0',
            'dimensions' => 'nullable|string',
        ]);

        $item = Item::create($validated);

        return redirect()->route('items.show', $item)
            ->with('success', 'Item created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Item $item)
    {
        $item->load(['category', 'brand', 'unit']);

        return Inertia::render('items/show', [
            'item' => $item,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Item $item)
    {
        return Inertia::render('items/edit', [
            'item' => $item,
            'categories' => Category::active()->get(),
            'brands' => Brand::active()->get(),
            'units' => Unit::active()->get(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Item $item)
    {
        $validated = $request->validate([
            'code' => 'required|string|unique:items,code,' . $item->id,
            'name' => 'required|string|max:255',
            'barcode' => 'nullable|string',
            'sku' => 'nullable|string',
            'description' => 'nullable|string',
            'category_id' => 'nullable|exists:categories,id',
            'brand_id' => 'nullable|exists:brands,id',
            'unit_id' => 'required|exists:units,id',
            'variant' => 'nullable|string',
            'cost_price' => 'required|numeric|min:0',
            'status' => 'required|in:for_sale,not_for_sale,purchase_only,assembled_item',
            'discount_percentage' => 'nullable|numeric|min:0|max:100',
            'discount_amount' => 'nullable|numeric|min:0',
            'stock_quantity' => 'nullable|numeric|min:0',
            'minimum_stock' => 'nullable|numeric|min:0',
            'display_on_website' => 'boolean',
            'weight' => 'nullable|numeric|min:0',
            'dimensions' => 'nullable|string',
        ]);

        $item->update($validated);

        return redirect()->route('items.show', $item)
            ->with('success', 'Item updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Item $item)
    {
        $item->delete();

        return redirect()->route('items.index')
            ->with('success', 'Item deleted successfully.');
    }
}