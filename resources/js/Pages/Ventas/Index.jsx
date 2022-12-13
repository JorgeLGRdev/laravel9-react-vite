import React from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage, useForm, Link } from '@inertiajs/inertia-react';
  
export default function Dashboard(props) {

    const { ventas } = usePage().props
  
    function destroy(e) {
        if (confirm("Estás seguro de que quieres eliminar esta venta")) {
            Inertia.delete(route("ventas.destroy", e.currentTarget.id));
        }
    }
   
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Ventas</h2>}
        >
            <Head title="Ventas" />
  
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        
                        <div className="p-6 bg-white border-b border-gray-200">
    
                            <table className="table-fixed w-full">
                                <thead>
                                    <tr className="bg-sky-400">
                                        <th className="px-4 py-2 w-20">ID</th>
                                        <th className="px-4 py-2">Monto total</th>
                                        <th className="px-4 py-2">Fecha</th>
                                        <th className="px-4 py-2">Acción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ventas.map(({ id, monto, created_at }) => (
                                        <tr key={id} className="hover:bg-gray-100">
                                            <th className="border px-4 py-2">{ id }</th>
                                            <td className="border px-4 py-2">${ monto }</td>
                                            <td className="border px-4 py-2">{ created_at }</td>

                                            <td className="border px-4 py-2">
                                          
                                                <Link
                                                    tabIndex="1"
                                                    className="px-4 py-2 text-sm text-white bg-blue-500 hover:bg-blue-700 rounded"
                                                    href={route("productos.edit", id)}
                                                >
                                                    Ver detalle
                                                </Link>

                                            </td>
                                        </tr>
                                    ))}
  
                                    {ventas.length === 0 && (
                                        <tr>
                                            <td
                                                className="px-6 py-4 border-t"
                                                colSpan="4"
                                            >
                                                No hay ventas
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
}