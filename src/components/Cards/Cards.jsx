import React from "react";
import "./Cards.css"
function Cards({item}){
    return(
        
     <div className="col-xl-3 col-md-6 mb-4">
        <div className={`card border-left-${item.theme} shadow h-100 py-2`}>
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        {
                            item.isTask ? <div>
                            <div className={`text-xs font-weight-bold text-${item.theme} text-uppercase mb-1`}>{item.title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{item.price}%
                                <div className="col">
                                  <div className="progress progress-sm mr-2">
                                    <div className={`progress-bar bg-${item.theme}`} role="progressbar"
                                        style={{width: `${item.price}%`, "ariaValuenow":item.price, "ariaValuemin":"0",
                                        "ariaValuemax":"100"}}>                       
                                    </div>
                                  </div>
                                </div>
                            </div>
                           </div>
                        :<div>
                         <div className={`text-xs font-weight-bold text-${item.theme} text-uppercase mb-1`}>
                        {item.title}
                        </div>                     
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{item.price}</div>
                        </div>
                        }
                    </div>
                    <div className="col-auto">
                        <i className="fas fa-calendar fa-2x text-gray-300">{
                            item.icon
                        }</i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    )
}

export default Cards;