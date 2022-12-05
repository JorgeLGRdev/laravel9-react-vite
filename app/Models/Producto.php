<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Producto extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'precio',
        'categoria',
        'imgPath'
    ];

    protected $appends = [
        'image_uri'
    ];

    public function imageUri(): Attribute
    {
        return new Attribute(
            get: fn ($value, $attributes) => Storage::url("public/productos/" . $attributes['imgPath']),
        );
    }


    
}
