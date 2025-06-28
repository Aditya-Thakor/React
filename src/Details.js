import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Details(){

    //'https://fakestoreapi.com/products/1

    const [prod,setProd]=useState([]);
const {id} = useParams();
var url = "https://fakestoreapi.com/products/"+id;
    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((prod)=>{
            setProd(prod);
            console.log(prod);
        })
        .catch((err)=>{
            console.log("error..",err);
        });
    },[]);

    // const product= prod.map((item)=>(
    //     <img src={item.image} alt="productImage" />
    // ))
    return(
        <div>
            <div>
              <img src={prod.image} alt="" height={220} width={200} />
            </div>
        </div>
    );
}