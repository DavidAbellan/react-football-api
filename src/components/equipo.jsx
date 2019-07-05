import React from 'react';
import {Link} from 'react-router-dom'

function equipo (props) {
    return (
    <div className="card">  
      <div className="card mb-3 mxw" > 
          <div className="row no-gutters">
              <div className="col-md-4">
                   <img src={props.crestUrl} className="card-img" />
              </div>
              <div className="col-md-8">
                 <div className="card-body">
                     <h5 className="card-title">{props.name}</h5>
                     <p className="card-text">{props.venue}</p>
                     <p className="card-text"><small className="text-muted"><Link to={"/plantilla/" +props.id}>Ver Plantilla</Link></small></p>
                 </div>

              </div>

          </div>
     </div>  
            
      </div>



      )
      
      
    }
    
        
                           
                            
                
export default equipo;