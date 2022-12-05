<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Producto;

class ProductoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = [
            [
                'nombre' => 'Fesh milk 250ml',
                'precio' => '250',
                'descripcion' => 'lorem ipsum',
                'imgPath' => 'https://cdn.pixabay.com/photo/2016/12/06/18/27/milk-1887234__340.jpg'
            ],
            [
                'nombre' => '12 Egs',
                'precio' => '6',
                'descripcion' => 'lorem ipsum',
                'imgPath' => 'https://cdn.pixabay.com/photo/2016/07/23/15/24/egg-1536990__340.jpg'
            ],
            [
                'nombre' => 'Wine 500ml',
                'precio' => '50',
                'descripcion' => 'lorem ipsum',
                'imgPath' => 'https://cdn.pixabay.com/photo/2015/11/07/12/00/alcohol-1031713__340.png'
            ],
            [
                'nombre' => 'Homey 100ml',
                'precio' => '12',
                'descripcion' => 'lorem ipsum',
                'imgPath' => 'https://cdn.pixabay.com/photo/2017/01/06/17/49/honey-1958464__340.jpg'
            ]
        ];
        Producto::insert($products);

    }
}
