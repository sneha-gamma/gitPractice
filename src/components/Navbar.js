import React from "react";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Navbar = ()=>{

const {cart,fav} = useContext(ProductContext);
const cartCount = cart.length;
const favCount = fav.length;

// const scrollDown = (e)=>{
//     e.preventDefault();

//     const scrollData = document.getElementById('scroll');

//     if(scrollData){
//         scrollData.scrollIntoView({behavior:'smooth'})
//     }

// }


    
    return(
        <div className="flex justify-between pt-2 pb-3 bg-gray-400">
            <h3 className="font-bold"><Link to='/'>ShopNow</Link></h3>
            <p> <Link to='/CartPage'>🛒{cartCount}</Link>| ❤️{favCount} </p>
        </div>
    )
}

export default Navbar;