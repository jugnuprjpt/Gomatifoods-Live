import React from 'react'
import { Link } from "react-router-dom"
import Trolly from './Trolly'

 const Navbar = ({setShow, size}) => {
  return (
    <>
   {/*  <Trolly></Trolly> */}
    <div className='my-trolly' >
      <h3 className='ml-4 ' style={{marginTop:"15px", marginLeft:"20px"}}onClick={()=>setShow(true)}> My-cart</h3>
      <div className=''onClick={()=>setShow(false)} >
      <img  src="../img/tolly.png" alt="" style={{width:"60px", height:"60px", position:"relative", top :"-33px", left:"150px"}} />
      <span style={{ position:"absolute", left:"170px", marginTop:"-40px", fontSize:"25px",borderRadius: "70%",width:"33px", height:"33px" ,background:"red", padding:"0px 10px"}}>{size}</span>
    
      
      </div>
      </div>
      
    </>
  )
}
export default Navbar 
