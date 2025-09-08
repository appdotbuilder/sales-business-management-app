<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * App\Models\CustomerGroup
 *
 * @property int $id
 * @property string $name
 * @property string|null $description
 * @property float $discount_percentage
 * @property bool $is_active
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Customer> $customers
 * @property-read int|null $customers_count
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|CustomerGroup newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|CustomerGroup newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|CustomerGroup query()
 * @method static \Illuminate\Database\Eloquent\Builder|CustomerGroup whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CustomerGroup whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CustomerGroup whereDiscountPercentage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CustomerGroup whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CustomerGroup whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CustomerGroup whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CustomerGroup whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CustomerGroup active()
 * @method static \Database\Factories\CustomerGroupFactory factory($count = null, $state = [])
 * @method static CustomerGroup create(array $attributes = [])
 * @method static CustomerGroup firstOrCreate(array $attributes = [], array $values = [])
 * 
 * @mixin \Eloquent
 */
class CustomerGroup extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'description',
        'discount_percentage',
        'is_active',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'discount_percentage' => 'decimal:2',
        'is_active' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the customers for the customer group.
     */
    public function customers(): HasMany
    {
        return $this->hasMany(Customer::class);
    }

    /**
     * Scope a query to only include active customer groups.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}