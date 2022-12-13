<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'price',
        'category_id',
        'image'
    ];

    protected $appends = [
        'image_uri'
    ];

    public function imageUri(): Attribute
    {
        return new Attribute(
            get: fn ($value, $attributes) => Storage::url("public/productos/" . $attributes['image']),
        );
    }

     public function categoria()
    {
        return $this->hasOne(Category::class, 'id', 'category_id');
    }
    
}
