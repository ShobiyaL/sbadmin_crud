import React, { useEffect } from 'react'
import {useNavigate, useParams} from "react-router-dom"
import {useFormik} from "formik"
import axios from 'axios';

function EditUser() {
    const navigate =useNavigate();
    const params = useParams();

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
        onSubmit: async (values)=>{
          console.log(values)
          await axios.put(`https://62a822d1a89585c1770d0eea.mockapi.io/api/v1/users/${params.id}`,values)
          alert("User Updated")
          navigate("/portal/users")
        }
  
      })
      
      useEffect(()=>{
         loadUser()
      },[])
      let loadUser = async()=>{
        try {
          let user = await axios.get(`https://62a822d1a89585c1770d0eea.mockapi.io/api/v1/users/${params.id}`)
          formik.setValues({
          name: user.data.name,
          position: user.data.position,
          office: user.data.office,
          age: user.data.age,
          startDate: user.data.startDate,
          salary: user.data.salary

        })
        } catch (error) {
          
        }
      }

      return(
          <div className="container">
              <form onSubmit={formik.handleSubmit}>
  <h3>Edit User</h3>
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

export default EditUser