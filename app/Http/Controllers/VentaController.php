<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Venta;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Psy\Readline\Hoa\ConsoleOutput;

class VentaController extends Controller
{
    public function index()
    {
        $ventas = Venta::all();
        return Inertia::render('Ventas/Index', ['ventas' => $ventas]);
    }

    public function create( )
    {
        //Ventas.create recibe productos
            //Calcular subtotales y enviar a la vista
            //Calcular y mostrar total
            //button submit que mande a Ventas.store
        return Inertia::render('Ventas/Create');
    }

    public function store(Request $request)
    {
        //registrar venta
        Validator::make($request->all(), [
            'monto' => ['required'],
        ])->validate();

        Venta::create($request->all());
        
        //registrar DetalleVenta por cada producto
        $productos = $request->productos;
            foreach ($productos as $p) {
                json_encode($p);
            }
        return redirect()->route('ventas.index');
    }
}
