import { useEffect, useState } from "react";
import axios from 'axios';
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import {Button} from '@mui/material';


 const HomePage = ()=>{

    const[data, setData] = useState([]);
    const[loading, setLoading] = useState(true);
    const {AddtoCart , AddtoFav} = useContext(ProductContext);
 
useEffect(()=>{

    const fetchData = async()=>{

        try{

            const result = await axios.get('https://dummyjson.com/products');
            console.log(result);
            setData(result.data.products);
            setLoading(false)
        }
        catch(err){
            console.error(err);
        }

    }
    fetchData();
},[])

    return(
        <div className="grid md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1">
             
          {data.map((product)=>(
            <div key={product.id}>
                <img src={product.thumbnail} />
                <p>{product.title}</p>
                <p>{product.price}</p>
                <div className="flex gap-2"> 
                    <Button  variant="contained" color="primary"  onClick={AddtoCart}>Add to Cart</Button>
                    <Button variant="contained" color="primary"  onClick={AddtoFav}>Add to fav</Button>
                    {/* <button className=" py-1 bg-blue-300 rounded-md" onClick={AddtoCart}>Add To Cart</button> 
                    <button className=" py-1 bg-blue-300 rounded-md" onClick={AddtoFav}>Add to favourite</button> */}
                </div>
            </div>
          ))}
          
        </div>
    )
 }

 export default HomePage;