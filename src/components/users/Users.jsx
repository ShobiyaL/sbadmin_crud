import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading,setLoading]=useState(false);

  useEffect(() => {
    loadData();
  }, []);

  let loadData = async () => {
    setLoading(true)
    let users = await axios.get(
      "https://62a822d1a89585c1770d0eea.mockapi.io/api/v1/users"
    );

    setUsers(users.data)
    setLoading(false)
  };
  
  let userDelete = async (id)=>{
    try{
      let ask =window.confirm("Are You Sure?Do You Want To Delete This Data")
      if(ask){
      let user = await axios.delete(`https://62a822d1a89585c1770d0eea.mockapi.io/api/v1/users/${id}`);
      
      let index = users.findIndex((obj)=>obj.id===id)
      users.splice(index,1)
      setUsers([...users])
      // loadData();
      }
    }catch(error){

    }
    
  }

  return (
    <div class="container-fluid">
      {/* s<!-- DataTales Example --> */}
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <div class="d-sm-flex align-items-center justify-content-between ">
            <h1 class="h3 mb-0 text-gray-800">Users</h1>
            <Link
              to="/portal/create-user"
              class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            >
              <i class="fas fa-download fa-sm text-white-50"></i> Create-User
            </Link>
          </div>
          
        </div>
{
  isLoading ? <span>Loading...</span> 
  :
  <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.position}</td>
                    <td>{item.office}</td>
                    <td>{item.age}</td>
                    <td>{item.startDate}</td>
                    <td>${item.salary}</td>
                    <td>
                      <Link
                        to={`/portal/users/${item.id}`}
                        className="btn btn-sm btn-info mr-2"
                      >
                        View
                      </Link>
                      <Link
                        to={`/portal/user/edit/${item.id}`}
                        className="btn btn-sm btn-primary mr-2"
                      >
                        Edit
                      </Link>
                      <button  onClick={()=>userDelete(item.id)} className="btn btn-sm btn-danger mr-2">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
}
        
      </div>
    </div>
  );
}
