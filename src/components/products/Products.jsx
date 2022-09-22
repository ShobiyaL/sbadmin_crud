import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom"
import axios from "axios"


function Products (){
   const [products,setProducts]=useState([]);
   const [isLoading,setLoading]=useState(false);
  useEffect(()=>{
    loadProducts();
  },[]);

    let loadProducts = async()=>{
      setLoading(true);
      let products = await axios.get("https://62a822d1a89585c1770d0eea.mockapi.io/api/v1/products");
      
      
      setProducts(products.data);
      setLoading(false);
    };
    let productDelete = async(id)=>{
      try{
        let ask =window.confirm("Are You Sure?Do You Want To Delete This Data")
        if(ask){
        let product = await axios.delete(`https://62a822d1a89585c1770d0eea.mockapi.io/api/v1/products/${id}`);
        console.log(product);
        // loadData()
        let index = products.findIndex((obj)=>obj.id===id)
        products.splice(index,1)
        setProducts([...products])
        }
      }catch(error){
  
      }
      
    }
    return(
        <div class="container-fluid">
      {/* s<!-- DataTales Example --> */}
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <div class="d-sm-flex align-items-center justify-content-between ">
            <h1 class="h3 mb-0 text-gray-800">Products</h1>
            <Link
              to="/portal/create-product"
              class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"  
            >
              <i class="fas fa-download fa-sm text-white-50"></i> Create-Product
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
                  <th>Price</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    
                    <td>
                      <Link
                        to={`/portal/products/${item.id}`}
                        className="btn btn-sm btn-info mr-2"
                      >
                        View
                      </Link>
                      <Link
                        to={`/portal/products/edit/${item.id}`}
                        className="btn btn-sm btn-primary mr-2"
                      >
                        Edit
                      </Link>
                      <button  onClick={()=>productDelete(item.id)} className="btn btn-sm btn-danger mr-2">
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
    )
}

export default Products;