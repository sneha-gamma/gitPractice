
import { createContext } from "react";
import { useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({children})=>{

    const[cart, setCart] = useState([]);
    const[fav, setFav] = useState([]);

    const AddtoFav = (product)=>{
        setFav((prev)=>[...prev,product])
    }

    const AddtoCart = (product)=>{
        setCart((prev)=>[...prev,product])
    }

    return(
    <ProductContext.Provider value={{cart,fav,AddtoCart,AddtoFav}}>
        {children}
    </ProductContext.Provider>
)
};

export default ProductProvider;

