import React,{useEffect,useState} from 'react'
import {useParams,useSearchParams,useNavigate} from "react-router-dom"
import axios from "axios";

const ProductView = () => {
  const navigate=useNavigate();
    const params=useParams();
    //console.log(params)
    const [searchParams,setSearchParams]=useSearchParams()
    // console.log(...searchParams)

    const [singleProduct,setSingleProduct] =useState({})
     useEffect(()=>{
      loadProduct()
     },[])

     let loadProduct = async ()=>{
        try{
          let product = await axios.get(`https://62a822d1a89585c1770d0eea.mockapi.io/api/v1/products/${params.id}`)
          setSingleProduct(product.data);
        }catch(error){
           
        }
     }
  return (
  <>
    <h5><b>Name: </b>{singleProduct.name}</h5>
    <h5><b>Description: </b>{singleProduct.description}</h5>
    <h5><b>Price: </b>{singleProduct.price}</h5>
    
      <button onClick={()=>navigate('/portal/products')} className="mt-2 ml-2">Retreat</button>
   </>
  )
}

export default ProductView