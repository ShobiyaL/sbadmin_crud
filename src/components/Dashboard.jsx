import React from "react";
import Cards from "./Cards/Cards";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendar,faDollarSign,faComments,faClipboard} from "@fortawesome/free-solid-svg-icons";

function Dashboard(){
    let cardDet=[
        {
            title:"EARNINGS (MONTHLY)",
            price:"$40,000",
            theme:"primary",
           icon:<FontAwesomeIcon icon={faCalendar}/>
        },
        {
            title:"EARNINGS (ANNUAL)",
            price:"$215,000",
            theme:"success",
            icon:<FontAwesomeIcon icon={faDollarSign} />
        },
        {
            title:"TASKS",
            isTask:true,
            price:70,
            theme:"info",
            icon:<FontAwesomeIcon icon={ faClipboard} />
        },
        {
            title:"PENDING REQUESTS",
            price:18,
            theme:"warning",
            icon:<FontAwesomeIcon icon={faComments} />
        }
    ]
    return(
// <!-- Begin Page Content -->
<div className="container-fluid">

{/* <!-- Page Heading --> */}
<div className="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 className="h3 mb-0 text-gray-800">Dashboard </h1>
    <a href="!#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
            className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
</div>
{/* <!-- Content Row --> */}
<div className="row">
    {
        cardDet.map((item,i)=>{
        return(
            <Cards item={item} key={i}/>
        )
    })
    }
</div>
{/* <!-- /.container-fluid --> */}
</div>

    );
}


export default Dashboard;