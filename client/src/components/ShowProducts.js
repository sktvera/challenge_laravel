import React, {useEffect, useState} from "react";
import axios from "axios";

import{link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const ShowProducts = () =>{
    const[ products, setProducts ] = useState( [] )

   useEffect(()=>{
    getAllProducts()
   }, [])

const getAllProducts = async () =>{
const response = await axios.get(`${endpoint}/products`)
setProducts(response)

}

const deleteProducts = () => {

}
    return(
        <div>Table</div>
    )
}

export default ShowProducts