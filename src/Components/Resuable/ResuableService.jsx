import React from 'react'
import { useState } from 'react'
import Product from '../Product/Product'
import ServiceApi from '../../Api/ServiceApi'

const ResuableService = () => {
     const [productset, setproductset] = useState(ServiceApi)
  return (
    <>
   {/*     <div className="head mt-5">
          <h1>Our Service</h1>
      </div> */}
      <h1 style={{textAlign:"center", marginTop:"40px"}}>Our Service</h1>
      <div className="container-fluid d-flex mt-2" /* style={{background:""}} */>
          <div className="row ours"  style={{marginLeft:"15rem"}} >
              {productset.map((item)=> (
                  <Product key = {item.id} title={item.title} source={item.image} description = {item.description}/>

              ))}
             
                
          </div>
      </div>
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

export default ResuableService