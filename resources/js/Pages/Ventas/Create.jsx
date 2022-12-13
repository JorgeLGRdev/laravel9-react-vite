//import React from 'react';
import React, { useState, useEffect } from "react";

import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, useForm, Link } from '@inertiajs/inertia-react';
  
export default function Dashboard(props) {
  
    const initialProducts = JSON.parse(localStorage.getItem("carrito")) || [];
    const [productos, setProductos] = useState(initialProducts);

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(productos));
    }, [productos]);

    let sum=0;
    productos.map(({price,cantidad})=>sum += price * cantidad)
    //setData("monto", sum)

    const { data, setData, errors, post } = useForm({
        id:"",
        monto: sum,
        productos:productos,
    });
  
    function handleSubmit(e) {
        e.preventDefault();
        post(route("ventas.store"));
    }
  
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Detalle de la compra</h2>}
        >
            <Head title="Ventas" />
  
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">  
                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded-md focus:outline-none"
                                    href={ route("carrito") }
                                >
                                    Volver al carrito
                                </Link>
                            </div>
  
                            <table className="table-fixed w-full">
                                <thead>
                                    <tr className="bg-orange-200">
                                        <th className="px-4 py-2 w-20" scope="col">Imagen</th>
                                        <th className="px-4 py-2 " scope="col">Nombre</th>
                                        <th className="px-4 py-2 " scope="col">Precio</th>
                                        <th className="px-4 py-2 " scope="col">Cantidad</th>
                                        <th className="px-4 py-2 " scope="col">Subtotal</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {productos.map(
                                        ({ id, image_uri, name, price, cantidad }) => (
                                            <tr key={id} className="hover:bg-gray-100">
                                                <td className="border px-4 py-2">
                                                    <img
                                                        width={200}
                                                        height={200}
                                                        src={image_uri}
                                                        alt={`product-${id}`}
                                                    />
                                                </td>
                                                <td className="border px-4 py-2">{name}</td>
                                                <td className="border px-4 py-2">${price}</td>
                                                <td className="border px-4 py-2">{cantidad}</td>
                                                <th className="border px-4 py-2 text-red-500">
                                                    <div className="">
                                                    ${price*cantidad}                                           
                                                    </div>
                                                </th>
                                            </tr>
                                        )
                                    )}

                                    {productos.length === 0 && (
                                        <tr>
                                            <td
                                                className="px-6 py-4 border-t"
                                                colSpan="4"
                                            >
                                                Aún no has agregado productos al carrito
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>

                            <form name="createForm" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <div className="mb-4 flex flex-col">
                                        <label className="">Monto total a pagar</label>
                                        <input
                                            placeholder='Monto total'
                                            type="text"
                                            className="px-4 py-2 text-2xl text-center text-red-500"
                                            label="Total"
                                            name="monto"
                                            value={data.monto}
                                            onChange={(e) =>
                                                setData("monto", e.target.value)
                                            }
                                            readOnly
                                            autoFocus
                                        />                                        
                                        <span className="text-red-600">
                                            {errors.title}
                                        </span>
                                    </div>                    
                
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 hover:bg-green-700 rounded"
                                    >
                                        Confirmar compra
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}