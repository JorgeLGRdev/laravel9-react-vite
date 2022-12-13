import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <Link href={route('dashboard')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                            Pagina principal
                        </Link>
                    ) : (
                        <>
                        
                            <Link href={route('login')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                                Iniciar sesión
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                            >
                                Registrarse
                            </Link>
                        </>
                    )}
                </div>

                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-center pt-8 sm:justify-start sm:pt-0">
                    <img src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/null/external-shopping-cart-sales-vitaliy-gorbachev-blue-vitaly-gorbachev.png"/>
                                        
                        <div className="ml-4 text-lg text-2xl leading-7 font-extrabold">
                            <h1 className='text-cyan-400'>Welcome to My Shopping Cart - website</h1>
                        </div>
                    
                    </div>

                    <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-1">
                           
                            <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                                <div className="flex items-center">
                                    <div className="ml-4 text-lg leading-7 font-semibold">
                                      
                                    {props.auth.user ? (
                                        <>
                                               <div className="flex items-center">
                                               <svg
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="-mt-px w-5 h-5 text-gray-400"
                                            >
                                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                            </svg>
                                            <Link href={route('dashboard')} className="text-sm text-2xl text-sky-700 dark:text-sky-500 hover:text-sky-800 underline">
                                                Pagina principal
                                            </Link>
                        
                        </div>
                                       
                                        </>
                                               
                    ) : (
                        <>

                        <div className="flex items-center">
                            <Link href={route('login')} className="text-sm text-2xl text-sky-700 dark:text-sky-500 hover:text-sky-800 underline">
                                Iniciar sesión
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 text-sm text-2xl text-sky-700 dark:text-sky-500 hover:text-sky-800 underline"
                            >
                                Registrarse
                            </Link>
                        </div>
               
                        </>
                    )}

                                    </div>
                                </div>
                            </div>

                        
                        </div>
                    </div>

                    <div className="flex justify-center mt-4 sm:items-center sm:justify-between">
                        <div className="text-center text-sm text-gray-500 sm:text-left">
                            <div className="flex items-center">
                        
                            </div>
                        </div>

                        <div className="ml-4 text-center text-sm text-gray-500 sm:text-right sm:ml-0">
                            Laravel v{props.laravelVersion} (PHP v{props.phpVersion})
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
