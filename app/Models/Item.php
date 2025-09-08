<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\Item
 *
 * @property int $id
 * @property string $code
 * @property string|null $barcode
 * @property string|null $sku
 * @property string $name
 * @property string|null $description
 * @property int|null $category_id
 * @property int|null $brand_id
 * @property int $unit_id
 * @property string|null $variant
 * @property array|null $images
 * @property float $cost_price
 * @property array|null $retail_prices
 * @property array|null $agent_prices
 * @property string $status
 * @property float $discount_percentage
 * @property float $discount_amount
 * @property float $net_price
 * @property float $stock_quantity
 * @property float $minimum_stock
 * @property bool $display_on_website
 * @property array|null $marketplace_links
 * @property float|null $weight
 * @property string|null $dimensions
 * @property bool $is_active
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Brand|null $brand
 * @property-read \App\Models\Category|null $category
 * @property-read \App\Models\Unit $unit
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Item newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Item newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Item query()
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereAgentPrices($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereBarcode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereBrandId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereCategoryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereCostPrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereDimensions($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereDiscountAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereDiscountPercentage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereDisplayOnWebsite($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereImages($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereMarketplaceLinks($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereMinimumStock($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereNetPrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereRetailPrices($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereSku($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereStockQuantity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereUnitId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereVariant($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item whereWeight($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Item active()
 * @method static \Illuminate\Database\Eloquent\Builder|Item forSale()
 * @method static \Illuminate\Database\Eloquent\Builder|Item displayOnWebsite()
 * @method static \Database\Factories\ItemFactory factory($count = null, $state = [])
 * @method static Item create(array $attributes = [])
 * @method static Item firstOrCreate(array $attributes = [], array $values = [])
 * 
 * @mixin \Eloquent
 */
class Item extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'code',
        'barcode',
        'sku',
        'name',
        'description',
        'category_id',
        'brand_id',
        'unit_id',
        'variant',
        'images',
        'cost_price',
        'retail_prices',
        'agent_prices',
        'status',
        'discount_percentage',
        'discount_amount',
        'net_price',
        'stock_quantity',
        'minimum_stock',
        'display_on_website',
        'marketplace_links',
        'weight',
        'dimensions',
        'is_active',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'images' => 'array',
        'retail_prices' => 'array',
        'agent_prices' => 'array',
        'marketplace_links' => 'array',
        'cost_price' => 'decimal:2',
        'discount_percentage' => 'decimal:2',
        'discount_amount' => 'decimal:2',
        'net_price' => 'decimal:2',
        'stock_quantity' => 'decimal:3',
        'minimum_stock' => 'decimal:3',
        'weight' => 'decimal:3',
        'display_on_website' => 'boolean',
        'is_active' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the category that owns the item.
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * Get the brand that owns the item.
     */
    public function brand(): BelongsTo
    {
        return $this->belongsTo(Brand::class);
    }

    /**
     * Get the unit that owns the item.
     */
    public function unit(): BelongsTo
    {
        return $this->belongsTo(Unit::class);
    }

    /**
     * Scope a query to only include active items.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope a query to only include items for sale.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeForSale($query)
    {
        return $query->where('status', 'for_sale');
    }

    /**
     * Scope a query to only include items displayed on website.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeDisplayOnWebsite($query)
    {
        return $query->where('display_on_website', true);
    }
}