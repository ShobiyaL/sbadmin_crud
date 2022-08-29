import React, { useEffect } from 'react'
import {useNavigate, useParams} from "react-router-dom"
import {useFormik} from "formik"
import axios from 'axios';

function EditProduct() {
    const navigate =useNavigate();
    const params = useParams();

    const formik=useFormik(
      {
        initialValues:{
          name:"",
          description:"",
          price:""
          
        },
        validate:(values)=>{
          let errors={};
          if(values.name===""){
            errors.name="Please enter your name"
          }
          return errors;
  
        },
        onSubmit: async (values)=>{
          await axios.put(`https://62a822d1a89585c1770d0eea.mockapi.io/api/v1/products/${params.id}`,values)
          alert("Product Updated")
          navigate("/portal/products")
        }
  
      })
      
      useEffect(()=>{
         loadProduct()
      },[])
      let loadProduct = async()=>{
        try {
          let product= await axios.get(`https://62a822d1a89585c1770d0eea.mockapi.io/api/v1/products/${params.id}`)
          formik.setValues({
          name: product.data.name,
          description: product.data.description,
          price: product.data.price
        })
        } catch (error) {
          
        }
      }

      return(
          <div className="container">
              <form onSubmit={formik.handleSubmit}>
  <h3>Edit Product</h3>
  <div className='row'>
              <div className="col-lg-6">
                <label for="name">Name</label>
                <input type="text" className="form-control" 
                value={formik.values.name}
                onChange={formik.handleChange}
                name="name" />
                <span>{formik.errors.name}</span>
              </div>
              <div className="col-lg-6">
                <label for="description">Description</label>
                <input type="text" className="form-control"
                value={formik.values.description}
                onChange={formik.handleChange}
                name="description" />
              </div>
              <div className="col-lg-6">
                <label for="price">Price</label>
                <input type="text" className="form-control"
                value={formik.values.price}
                onChange={formik.handleChange}
                name="price" />
              </div>
              </div>
              <button type="submit" className="btn btn-primary mt-2" dislabed={!formik.isValid} >Submit</button>
             </form>
          </div>
      )
}

export default EditProduct