import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
function Portal (){
    return(
        <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar />
          <Outlet/>
          </div>
      </div>
    </div>
    )
}

export default Portal;