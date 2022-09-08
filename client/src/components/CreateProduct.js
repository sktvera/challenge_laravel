import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/product'

const CreateProduct = () => {
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const navigate = useNavigate()

    //create product
    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {description: description, price: price, stock: stock})
        navigate('/')
    }
    
  return (
    <div className='grilla'>
        <h3>Create Product</h3>
        <form className='gridOne' onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>Description:</label>
                <input 
                    value={description}
                    onChange={ (e)=> setDescription(e.target.value)}
                    type='text'
                    className='form-control input_select'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Price:</label>
                <input 
                    value={price}
                    onChange={ (e)=> setPrice(e.target.value)}
                    type='number'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Stock:</label>
                <input 
                    value={stock}
                    onChange={ (e)=> setStock(e.target.value)}
                    type='number'
                    className='form-control'
                />
            </div>
            <div className='buttn'>
            <button type='submit' className='btn btn-primary'>Store</button>
            </div>
            
        </form>
    </div>
  )
}

export default CreateProduct