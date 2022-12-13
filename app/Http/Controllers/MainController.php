<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Category;

class MainController extends Controller
{
        /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categorias = Category::get()->map(function ($c) {
            $c->productos;
            return $c;
        });
//        return Inertia::render('Principal', ['categorias' => $categorias]);

        return Inertia::render('Dashboard', ['categorias' => $categorias]);
    }
}
