export default function Task2(){

    let stdData=[
        {"id":1 , "Name": "Ramesh", "Gender": "Male"},
        {"id":2 , "Name": "Riya", "Gender": "Female"},
        {"id":3 , "Name": "Jayesh", "Gender": "Male"},
        {"id":4 , "Name": "Priya", "Gender": "Female"},
        {"id":5 , "Name": "Suresh", "Gender": "Male"},
    ]
    let sd = [
        [1,2,3],
        [4,5,6],
        ['a','b','c']
    ];

    return(
        <div>
            <table className="table table-bordered table-sm ">
                <tr>
                    <th> ID </th>
                    <th> Name </th>
                    <th> Gender </th>
                </tr>
                
                {stdData.map((item,index)=>(
                        <tr> 
                            <td>{item.id}</td>
                            <td>{item.Name}</td>
                            <td>{item.Gender}</td>
                         </tr>
                    ))}
                
                
                
            </table>
            <table>
                {sd.map((item,index)=>(
                    <tr>
                        {/* {item} */} 
                        {
                            item.map( (it,ind)=>(
                                <td className="text-danger">{it}</td>
                            ) )
                        }
                        
                    </tr>
                ))}
            </table>
        </div>
    );
}