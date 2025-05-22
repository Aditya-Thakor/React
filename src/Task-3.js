import { useState } from "react";

export default function Task3(){
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [number, setNumber]=useState('');

    const [data,setData]=useState([]);
    
    let submit =()=>{
        let inpData={
            "name": name,
            "email":email,
            "number": number
        };
        setData([...data,inpData]);
        setName('');
        setEmail('');
        setNumber('');
        
       
    }
    
    return(
        <div>
            <form style={{margin:"20px", display:"flex", flexDirection:"column", gap:"10px", }} >
               
                <input type="text"  value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your Name"  />
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your Email"  />
                <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}  placeholder="Enter your Number"  />
                <button onClick={submit} type="button">Submit</button>
            </form>

            <table className="table table-bordered m-3 table-sm">
               <tbody>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Action</th>
                </tr>
                {
                    data.map((item,index)=>(
                        <tr key={index}>
                            <td >{item.name}</td>
                            <td >{item.email}</td>
                            <td >{item.number}</td>
                            <td >Edit/Delete</td>
                        </tr>
                    ))
                }
               </tbody>
                
               
                   

            </table>
        </div>
    );
}