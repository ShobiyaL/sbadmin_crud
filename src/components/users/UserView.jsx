import React,{useEffect,useState} from 'react'
import {useParams,useSearchParams,useNavigate} from "react-router-dom"
import axios from "axios";


const UserView = () => {
  const navigate=useNavigate();
    const params=useParams();
    //console.log(params)
    const [searchParams,setSearchParams]=useSearchParams()
    // console.log(...searchParams)

    const [singleUser,setSingleUser] =useState({})
     useEffect(()=>{
      loadUser()
     },[])

     let loadUser = async ()=>{
        try{
          let user = await axios.get(`https://62a822d1a89585c1770d0eea.mockapi.io/api/v1/users/${params.id}`)
          setSingleUser(user.data);
        }catch(error){
           
        }
     }
  return (
  <>
    <h5><b>Name: </b>{singleUser.name}</h5>
    <h5><b>Position: </b>{singleUser.position}</h5>
    <h5><b>Office: </b>{singleUser.office}</h5>
    <h5><b>Age: </b>{singleUser.age}</h5>
    <h5><b>StartDate: </b>{singleUser.startDate}</h5>
    <h5><b>Salary: </b>${singleUser.salary}</h5>
      <button onClick={()=>navigate('/portal/users')} className="mt-2 ml-2">Retreat</button>
   </>
  )
}

export default UserView