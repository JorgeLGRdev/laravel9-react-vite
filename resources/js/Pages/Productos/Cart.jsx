import React, { useState, useEffect } from "react";
//import PrincipalLayout from "@/Layouts/PrincipalLayout"; // Unused
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage, Link } from '@inertiajs/inertia-react';

const Cart = (props) => {
    const initialProducts = JSON.parse(localStorage.getItem("carrito")) || [];
    const [productos, setProductos] = useState(initialProducts);

    const remove = (id) => {
        setProductos((prev) => [...prev.filter((p) => p.id !== id)]);
    };

    const subAmount = (id, cantidad) => {
        if (cantidad === 1) {
            setProductos((prev) => [...prev.filter((p) => p.id !== id)]);
        } else {
            setProductos((prev) => [
                ...prev.map((p) => {
                    if (p.id === id) return { ...p, cantidad: cantidad - 1 };
                    return p;
                }),
            ]);
        }
    };

    const addAmount = (id) => {
        setProductos((prev) => [
            ...prev.map((p) => {
                if (p.id === id) return { ...p, cantidad: +p.cantidad + 1 };
                return p;
            }),
        ]);
    };

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(productos));
    }, [productos]);

    return (

        <Authenticated
        auth={props.auth}
        errors={props.errors}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Carrito de compras</h2>}
        >

        <Head title="Carrito" />
        
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">


                            <div className="flex items-center justify-between mb-6">
                                    <Link
                                        className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                        href={ route("productos.index") }
                                    >
                                        Regresar
                                    </Link>
                            </div>


                            <table className="table-fixed w-full">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="px-4 py-2 w-20" scope="col">ID</th>
                                        <th className="px-4 py-2 w-20" scope="col">Imagen</th>
                                        <th className="px-4 py-2 w-20" scope="col">Nombre</th>
                                        <th className="px-4 py-2 w-20" scope="col">Precio</th>
                                        <th className="px-4 py-2 w-20" scope="col">Cantidad</th>
                                        <th className="px-4 py-2 w-20" scope="col">Opciones</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {productos.map(
                                        ({ id, image_uri, name, price, cantidad }) => (
                                            <tr key={id}>
                                                <th className="border px-4 py-2">{id}</th>
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
                                                <td className="border px-4 py-2">
                                                    <div className="">
                                                        <button
                                                            onClick={() => remove(id)}
                                                            type="button"
                                                            className="mx-1 px-4 py-2 text-sm text-white bg-red-500 rounded"
                                                        >
                                                            del 
                                                            <i className=""></i>
                                                        </button>
                                                        <button
                                                            onClick={() => addAmount(id)}
                                                            type="button"
                                                            className="mx-1 px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                                        >
                                                            +
                                                            <i className="fa-solid fa-plus"></i>
                                                        </button>
                                                        <button
                                                            onClick={() =>
                                                                subAmount(id, cantidad)
                                                            }
                                                            type="button"
                                                            className="mx-1 px-4 py-2 text-sm text-white bg-yellow-500 rounded"
                                                        >
                                                            -
                                                            <i className="fa-solid fa-minus"></i>
                                                        </button>
                                                    </div>
                                                </td>
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
                    </div>
                </div>
            </div>
                
        </div>

        </Authenticated>
    );
};

export default Cart;