import React from "react";
import { useFormik } from 'formik';
import {useNavigate} from 'react-router-dom'
import axios from "axios";


export default function CreateProduct (){
  const navigate =useNavigate();
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
      onSubmit:async (values)=>{
        let product=await axios.post("https://62a822d1a89585c1770d0eea.mockapi.io/api/v1/users",values)
        alert("Product Created Successfully")
        
        navigate("/portal/products")
      }

    })
    console.log(formik.values);
    return(
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
<h3>Create Product</h3>
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
              <label for="des">Description</label>
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