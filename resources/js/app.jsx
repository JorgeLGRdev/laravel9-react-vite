// resources/js/App.jsx
import React from 'react';
import { createRoot } from 'react-dom/client'
//import TestComponent from './TestComponent';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
//componentes
import ShowProductos from './ShowProductos'
import CreateProducto from './CreateProducto'
import EditProducto from './EditProducto'


export default function App(){
    return(
        <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <ShowProductos/>} />
            <Route path='/create' element={ <CreateProducto/>} />
            <Route path='/edit/:id' element={ <EditProducto/>} />
          </Routes>
        </BrowserRouter>
      </>
    );
}

if(document.getElementById('root')){
    createRoot(document.getElementById('root')).render(<App />)
}