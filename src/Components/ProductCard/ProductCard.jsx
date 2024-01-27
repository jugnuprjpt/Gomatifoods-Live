import React from 'react'




  const ProductCard = ({ item, handleClick }) => {
    const { title, description, price, image , disc } = item;
  
  return (
        
    <>


    
  <div class="card mt-4 ml-5 main " style={{width: "20rem" }}>
 {/*  <img src={img} class="card-img-top mt-3" alt="..." style={{width:"100px", height:"100px", marginLeft:"65px",}}/> */}
  <img src={image} class="card-img-top mt-5" alt="..." style={{width:"200px", height:"300px", marginLeft:"65px",}}/>
  <div class="card-body">
    <h5 class="card-title">{title} </h5>
    <p class="card-text">{description}</p>
  
    <p class="card-text" style={{color:"white"}}> <b><del style={{color:"red"}}>&#8377; {disc}</del></b> &nbsp; &#8377;{price}</p>
  </div>
  
  
  
  <div class="card-body mb-4">
    {/* <button onClick={()=> props.handleClick(props)} class="card-link bg-primary ml-4" style={{color:"#fff",padding:"5px", borderRadius:"8px", fontSize:"15px", width:"50%", position:"absolute", textAlign:"center", marginLeft:"65px"}}>Buy Now</button> */}
   {/*  <button class="card-link bg-primary ml-4" onClick={() => handleClick(item)}>Add to Cart</button> */}
    <button class="card-link bg-primary ml-4" onClick={() => handleClick(item)}style={{color:"#fff",padding:"5px", borderRadius:"8px", fontSize:"15px", width:"50%", position:"absolute", textAlign:"center", left:"53px", bottom:"20px"}}>Buy Now</button>
  </div> 
</div>
</>

    
  )
}

export default ProductCard