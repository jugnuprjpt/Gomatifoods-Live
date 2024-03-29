import React from 'react'
import { useState } from 'react'

import Navbar from '../ProductCard/Navbar';
import Amezon from '../Resuable/Amezon';
import Cart from '../ProductCard/Cart';


 const Trolly = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

     /*  cart.push(item);
       console.log (cart) */
     
  return (
    <>
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Amezon handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </React.Fragment>
      
    </>
    
  );
};
export default Trolly
