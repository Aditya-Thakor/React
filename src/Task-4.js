import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Product(){
   const [data,setData] = useState([]);

   
   useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((data)=>{
            setData(data);
        })
        .catch((err)=>{
            console.log("error..");
        });
   });
   
   
    return(
        <div className="">
            <h1 className="text-center">Products</h1>
            <hr />
            <div className="row">
            
                
                {
                    data.map((item)=>(
                        <div className="col-3 mb-3">
                        <div className="card h-100 d-flex flex-column  "  >
                            <div className="card-header">
                                <h2 className="card-title text-center">{item.title} </h2> 
                            </div>
                        <div className="card-body ">
                            <img src={item.image}  className="card-img img-fluid" alt="product-image" />
                            <hr />
                            <div className="card-description text-muted " >
                                {item.description}
                                <div>
                                    <Link to={'Details/'+item.id}>View More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer  bg-success text-center">${item.price}</div>
                        </div>
                        </div>
                    ))
                }
            </div>
           
        </div>
    );
}