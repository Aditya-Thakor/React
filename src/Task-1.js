import { useState } from "react";

export default function Task1(){
   
    const [value, setValue]=useState(0);
   
    let increment=()=>{
     setValue(value+1)
   }
   let decrement=()=>{
    setValue(value-1)
   }
   

   let counter = (a)=>{
    if(a=="+"){
        setValue(value+1)
    }
    else{
        setValue(value-1)
    }
   }

    return(
        <div className=" ">
            <div className="text-center mt-4 h1">{value}</div>
            {/* <button onClick={increment} className="btn btn-outline-success m-3">Increment</button>
            <button onClick={decrement} className="btn btn-outline-danger m-3">Decrement</button> */}
            <button onClick={()=>counter("+")} className="btn btn-outline-success m-3">Increment</button>
            <button onClick={()=>counter("-")} className="btn btn-outline-danger m-3">Decrement</button>
        </div>
    );
}