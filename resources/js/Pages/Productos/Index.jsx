import React from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage, useForm, Link } from '@inertiajs/inertia-react';

import ProductCard from '../Components/ProductCard'
  
export default function Dashboard(props) {

    const { productos } = usePage().props
  
    function destroy(e) {
        if (confirm("Estás seguro de que quieres eliminar este producto?")) {
            Inertia.delete(route("productos.destroy", e.currentTarget.id));
        }
    }

    const { data, setData, errors, post } = useForm({
        name: "",
        price: "",
        image: "",
        quantity:"",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("cart.store"));
    }
   
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Productos</h2>}
        >
            <Head title="Productos" />
  
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
  
                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                    href={ route("productos.create") }
                                >
                                    Crear Producto
                                </Link>
                            </div>
  
                            <div className="container m-auto grid grid-cols-3 gap-4">

                            {productos.map((p) => (
                                <div>
                                    <ProductCard {...p}/>
                                </div>
                            ))}   

                            {productos.map(({ id, name, price, category, image, image_uri, }) => (
                                    
                                <div key={id} className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <img className="p-8 rounded-t-lg" width={200} height={200} src={image_uri} alt="Producto" />
                                    </a>
                                    <div className="px-5 pb-5">
                                        <a href="#">
                                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                                        </a>
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-400 dark:text-blue-800 ml-3">Categoria:</span>

                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{category}</span>

                                        <div className="flex items-center justify-between">
                                            <span className="text-3xl font-bold text-yellow-900 dark:text-yellow-400">${price}</span>
                                            Add to cart here            
                                        
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <a href={route("productos.edit", id)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800"><small>Editar</small></a>
                                         
                                                <button
                                                    onClick={destroy}
                                                    id={id}
                                                    tabIndex="-1"
                                                    type="button"
                                                    className="mx-1 px-4 py-2 text-sm text-white bg-red-500 rounded"
                                                >
                                                    Eliminar
                                                </button>
                                        </div>



                                    </div>
                                </div>


                            ))}
  
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}