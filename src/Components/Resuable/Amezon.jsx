import React from 'react'
import { useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import ProductCardApi from '../../Api/ProductCardApi'


const Amezon = ({handleClick}) => {
    
  return (
    <>
   
     
      <h1 style={{textAlign:"center",   marginTop:"30px"}}>Products</h1>
      
      <div className="container-fluid d-flex mt-2 pros" /* style={{background:"black"}} */>
          <div className="row " style={{marginLeft:"5rem"}} >
              {ProductCardApi.map((item)=> (
                  <ProductCard key = {item.id} item={item}  handleClick={handleClick}/>
              /* {ProductCardApi.map((item)=> (
                  <ProductCard key = {item.id} id = {item.id} title={item.title} source={item.image} description = {item.description} price = {item.price} handleClick={handleClick}/> */

              ))}
             
          </div>
      </div>
      
    </>
  )
}

export default Amezon