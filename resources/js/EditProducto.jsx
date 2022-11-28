import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const endpoint = 'http://localhost:8000/producto/'

const EditProducto = () => {

    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')
    const [categoria, setCategoria] = useState('')
    const [imgPath, setImgPath] = useState('')

const navigate = useNavigate()
const {id} = useParams()

const update = async (e) => {
e.preventDefault();
await axios.put(`${endpoint}${id}`, {
nombre: nombre,
precio: precio,
categoria: categoria
})
navigate('/')
}

useEffect( () =>{

const getProductoById = async () => {
const response = await axios.get(`${endpoint}${id}`)
setNombre(response.data.nombre)
setPrecio(response.data.precio)
setCategoria(response.data.categoria)
setImgPath(response.data.imgPath)

}
getProductoById()

}, [])
return (
<div>
    <h2>Editar Producto</h2>
    <form onSubmit={update}>
        <div className='mb-3'>
            <label className='form-label'>Nombre</label>
            <input 
            value={nombre} 
            onChange={ (e)=> setNombre(e.target.value)}
            type='text'
            className='form-control'
            />
        </div>

        <div className='mb-3'>
            <label className='form-label'>Precio</label>
            <input 
            value={precio} 
            onChange={ (e)=> setPrecio(e.target.value)}
            type='text'
            className='form-control'
            />
        </div>

        <div className='mb-3'>
            <label className='form-label'>Categoria</label>
            <input 
            value={categoria} 
            onChange={ (e)=> setCategoria(e.target.value)}
            type='text'
            className='form-control'
            />
        </div>


        <button type='submit' className='btn btn-success'>Actualizar</button>
    </form>
</div>
)
}

export default EditProducto