import React from 'react'

const Mit = () => {
  return (
    <>
<section class="gallery">
<h1 style={{padding:"55px"}}>Our-services</h1>
<div class="container">
<div class="row">
<div class="col-md-3 " >
    <div class="gallery-box bg-primary ">
        <img src="../img/freetruck-removebg-preview.png"/>
        <h4>Free-shiping</h4>
        
        {/* <span className='mit'>On order above <br/>Rs 1000 on</span> */}
        
    </div>
</div> 
<div class="col-md-3">
    <div class="gallery-box bg-primary " >
    <img src="../img/Quality-removebg-preview.png" style={{width:"160px", height:"118px"}}/>
        <h4>Prime Quality</h4>
        {/* <span className='mit'>100% Gurantee</span> */}
    </div>
</div>
<div class="col-md-3">
    <div class="gallery-box bg-primary ">
    <img src="../img/HogeSavings-removebg-preview.png" style={{width:"160px", height:"118px"}}/>
      
        <h4>Huge savings</h4>
       {/*  <span className='mit'>At lowest price</span> */}
        
    </div>
</div>
<div class="col-md-3">
    <div class="gallery-box bg-primary ">
    <img src="../img/EasyReturns-removebg-preview (2).png" style={{width:"160px", height:"118px"}}/>
        <h4>Easy returns</h4>
       {/*  <span className='mit'>@ store</span> */}
      
    </div>
</div> 
</div>    
</div>
</section>
<div className="container-fluid serve">
              <div className="row">
                <div className="col">
                   <p className='cont'>We are on a mission to <br/> serve 100000 families with <br/> healthy & traditional food </p>
                </div>
              </div>
          </div>
    </>
  )
}
export default Mit
