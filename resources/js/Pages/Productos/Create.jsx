import React from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/inertia-react';
  
export default function Dashboard(props) {
  
    const { data, setData, errors, post } = useForm({
        nombre: "",
        precio: "",
        categoria: "",
        image:"",

    });
  
    function handleSubmit(e) {
        e.preventDefault();
        post(route("productos.store"));
    }
  
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Crear Producto</h2>}
        >
            <Head title="Productos" />
  
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
  
                            <form name="createForm" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label className="">Nombre</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Nombre"
                                            name="nombre"
                                            value={data.nombre}
                                            onChange={(e) =>
                                                setData("nombre", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.title}
                                        </span>
                                    </div>
                                   
                                    <div className="mb-4">
                                        <label className="">Precio</label>
                                        <input
                                            type="number"
                                            className="w-full px-4 py-2"
                                            label="Precio"
                                            name="precio"
                                            value={data.precio}
                                            onChange={(e) =>
                                                setData("precio", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.title}
                                        </span>
                                    </div>

                                    <div className="mb-4">
                                        <label className="">Categoria</label>
                         

<select
        className="w-full px-4 py-2"
        label="Categoria"
        name="categoria"
        value={data.categoria}
        onChange={(e) =>
            setData("categoria", e.target.value)
        }
>
  <option value="Damas">Damas</option>
  <option value="Niños">Niños</option>
  <option value="Caballeros">Caballeros</option>
</select>

                                        <span className="text-red-600">
                                            {errors.title}
                                        </span>
                                    </div>

                                    <div className="mb-3">
                                        <label className=''>Imagen:</label>
                                        <input
                                            id='image' 
                                            type="file" 
                                            name="image" 
                                            accept="image/png, image/gif, image/jpeg"
                                            onChange={(e) =>
                                                setData("image", e.target.files[0])
                                            }
                                            className=""
                                           />
                                        <span className="text-red-600">
                                            {errors.title}
                                        </span>
                                    </div>
                                    
                                </div>


                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        Guardar
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