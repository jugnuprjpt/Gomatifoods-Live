import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
};

const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price) );
    // console.log(ans)
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            {/* <img src={item.img} alt="no image" /> */}
          {/*   <img src={item.img} alt="no image" /> */}
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
   
        <span >Rs - {price}</span>
        <Link to="/FormInput">
        <button class="card-link crd-btn "style={{/* color:"#fff",padding:"5px", borderRadius:"8px", fontSize:"15px", width:"10%", position:"absolute", textAlign:"center", marginTop:"8px",right:"109px" */}}>CheckOut</button>
        </Link>
      </div>
    </article>
  );
};

export default Cart;