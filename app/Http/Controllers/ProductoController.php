<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Producto;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $productos = Producto::all();
        //$posts = Post::all();
        return Inertia::render('Productos/Index', ['productos' => $productos]);
    }

       /**
     * Write code on Method
     *
     * @return response()
     */
    public function create()
    {
        return Inertia::render('Productos/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Validator::make($request->all(), [
            'nombre' => ['required'],
            'precio' => ['required'],
            'categoria' => ['required'],
            'image' => ['required'],
        ])->validate();

       // Producto::create($request->all());

            $img = $request->file('image', null);
            $image = sha1(date('YmdHis') . Str::random(30)) . '.' . $img->extension();
 
            Storage::disk('public')->putFileAs("productos", $img, $image);

        $producto = new Producto();
        $producto->nombre = $request->input('nombre');
        $producto->precio = $request->input('precio');
        $producto->categoria = $request->input('categoria');
        $producto->imgPath = $image;

        $producto->save();
    
        return redirect()->route('productos.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $producto = Producto::find($id);
        return $producto;
    }

        /**
     * Write code on Method
     *
     * @return response()
     */
    public function edit(Producto $producto)
    {
        return Inertia::render('Productos/Edit', [
            'producto' => $producto
        ]);
    }

    
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        Validator::make($request->all(), [
            'nombre' => ['required'],
            'precio' => ['required'],
            'categoria' => ['required'],
        ])->validate();
    
        Producto::find($id)->update($request->all());
        return redirect()->route('productos.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Producto::find($id)->delete();
        return redirect()->route('productos.index');
    }
}