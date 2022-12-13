import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/inertia-react';

import ProductCard from './Components/ProductCard';
import CategoryTitle from './Components/CategoryTitle';

export default function Dashboard(props) {
    
    const { categorias } = usePage().props


    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Inicio</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        

                        {categorias.map((category) => {
                    const { id, productos, name } = category;
                    return (
                        productos.length > 0 && (
                            <div key={id} className="p-6 bg-white hover:bg-lime-100 border-b border-gray-200">
                                <CategoryTitle name={name} />
                                <div className="container m-auto grid grid-cols-3 gap-4">
                                        {productos.map((p) => (
                                            <div key={p.id} className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-200 dark:border-gray-700 hover:bg-gray-300">
                                                <ProductCard {...p} />
                                            </div>
                                        ))}
                                </div>
                            </div>
                           
                        )
                    );
                })}                        

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
