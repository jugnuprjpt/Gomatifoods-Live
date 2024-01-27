import React from 'react'

const Product = (props) => {
  return (
    <>
      {/* <div className="head mt-5">
          <h1>Our Service</h1>
      </div> */}
     

          
          <div className="col-md-3 "  style={{padding:"40px"}}>
            <div className="row bg-primary" style={{ boxShadow:"5px 3px 15px 0px black", borderRadius:"8px",padding:"20px", width:"150px", height:"175px"}}>
              
                  <img className = "" src={props.source} alt="" style={{width:"150px", height:"75px" }}/>
                  <h2 className = " mt-2 " style={{textAlign:"center",color:"#fff", fontSize:"16px"}}>{props.title}</h2>
                  <p className = "pd-6 " style={{textAlign:"center",color:"#fff",fontSize:"13px"}}>{props.description}</p>
          </div>
          </div>
          
         
        
    
    </>
  )
}

export default Product