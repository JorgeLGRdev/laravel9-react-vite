import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'


   // export default CreateProducto
    const endpoint = 'http://localhost:8000/producto'
    
    const CreateProducto = () => {
    
    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')
    const [categoria, setCategoria] = useState('')
    //const [image, setImage] = useState('')
    const navigate = useNavigate()
     
      const handleSubmit = async (e) => {
        (e).preventDefault();
    
        const prod = {nombre: nombre, precio: precio, categoria: categoria}
    
        await axios.post(endpoint,  prod )
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
          navigate('/');

    }      

    return (
    <div>
        <h2>Crear un nuevo Producto</h2>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label className='form-label'>Nombre</label>
                <input 
                value={nombre} 
                onChange={ (e)=> setNombre(e.target.value)}
                type='text'
                className='form-control'
  //              name='nombre'
                />
            </div>
    
            <div className='mb-3'>
                <label className='form-label'>Precio</label>
                <input 
                value={precio} 
                onChange={ (e)=> setPrecio(e.target.value)}
                type='number'
                className='form-control'
    //            name='precio'
                />
            </div>
    
            <div className='mb-3'>
                <label>
                Categoria:
                <select 
                value={categoria} 
                onChange={(e)=> setCategoria(e.target.value)} 
                className='form-control'
    //            name='categoria'
                >
                    <option value="Damas">Damas</option>
                    <option value="Niños">Niños</option>
                    <option value="Caballeros">Caballeros</option>
                </select>
                </label>
            </div>
    
            <input type="submit" value="Submit" />
            <button type='submit' className='btn btn-success'>Guardar</button>
        </form>
    </div>
    )
}


export default CreateProducto