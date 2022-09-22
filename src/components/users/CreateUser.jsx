import React from "react";
import { useFormik } from 'formik';
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import {env} from "../../config";

export default function CreateUser (){
  const navigate =useNavigate();
  const formik=useFormik(
    {
      initialValues:{
        name:"",
        position:"",
        office:"",
        age:"",
        startDate:"",
        salary:""
      },
      validate:(values)=>{
        let errors={};
        if(values.name===""){
          errors.name="Please enter your name"
        }
        return errors;

      },
      onSubmit:async (values)=>{
        let user= await axios.post(`${env.api}/users`,values)
        alert("User Created Successfully")
        
        navigate("/portal/users")
      }

    })
    console.log(formik.values);
    return(
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
<h3>Create User</h3>
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
              <label for="position">Position</label>
              <input type="text" className="form-control"
              value={formik.values.position}
              onChange={formik.handleChange}
              name="position" />
            </div>
            <div className="col-lg-6">
              <label for="office">Office</label>
              <input type="text" className="form-control"
              value={formik.values.office}
              onChange={formik.handleChange}
              name="office" />
            </div>
            
            
            <div className="col-lg-6">
              <label for="age">Age</label>
              <input type="text" className="form-control"
              value={formik.values.age}
              onChange={formik.handleChange}
              name="age" />
            </div>
            <div className="col-lg-6">
              <label for="startdate">Start_Date</label>
              <input type="text" className="form-control"
              value={formik.values.startDate}
              onChange={formik.handleChange}
              name="startDate" />
            </div>
            <div className="col-lg-6">
              <label for="salary">Salary</label>
              <input type="text" className="form-control"
              value={formik.values.salary}
              onChange={formik.handleChange}
              name="salary" />
            </div>
            </div>
            <button type="submit" className="btn btn-primary mt-2" dislabed={!formik.isValid} >Submit</button>
           </form>
        </div>
    )
}