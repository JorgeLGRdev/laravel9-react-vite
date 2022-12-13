<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categorias = Category::all();
        return Inertia::render('Categorias/Index', ['categorias' => $categorias]);
    }

       /**
     * Write code on Method
     *
     * @return response()
     */
    public function create()
    {
        return Inertia::render('Categorias/Create');

      //  $categorias = Category::all();
       // return Inertia::render('Productos/Create', ['categorias' => $categorias]);
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
            'name' => ['required'],
        ])->validate();

        Category::create($request->all());

        //$producto = new Product();
       // $producto->name = $request->input('name');
      //  $producto->price = $request->input('price');
    //    $producto->category_id = $request->input('category_id');
  //      $producto->image = $image;
//        $producto->save();
    
        return redirect()->route('categorias.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $producto = Category::find($id);
        return $producto;
    }

        /**
     * Write code on Method
     *
     * @return response()
     */
    public function edit(Category $categoria)
    {

        //$categorias = Category::all();
       // return Inertia::render('Productos/Edit', [
          //  'categorias' => $categorias, 
        //    'producto' => $producto
       // ]);

        return Inertia::render('Categorias/Edit', [
            'categoria' => $categoria
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
            'name' => ['required'],
        ])->validate();
    
        Category::find($id)->update($request->all());
        return redirect()->route('categorias.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
//        Product::find($id)->delete();
        return redirect()->route('productos.index');
    }

}
