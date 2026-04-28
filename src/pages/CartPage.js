import React from "react";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const CartPage = ()=>{

    const {cart} = useContext(ProductContext);
    console.log(cart);

    
    return(
        <div>
            
          {cart.map((item,index)=>(
            <div className="gap-4" key={index}>
                <img src={item.thumbnail} />
                <p>{item.title}</p>
                <p>{item.price}</p>
                
            </div>
          ))}
          
        </div>
    )
}

export default CartPage;