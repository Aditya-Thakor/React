import { useState } from "react";

export default function UseStateDemo(){
   const [title,setTitle]=useState('React')
   
   let txt=()=>{
    setTitle('UseState hook!')
   }
    return(
        <div>
            <h1 style={{textAlign:'center' , background:"#f1f1f1"}} >This is a Demo Of {title}</h1>
            <button onClick={txt}>Change Text</button>  
        </div>
    );
}