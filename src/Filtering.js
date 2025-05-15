import { useState } from "react"

export default function Filtering(){
   
    const [stdData,setStdData]=useState([
    {
        "Name": "Bob Smith",
        "Email": "bob.smith@example.com",
        "Gender": "Male",
        "Percentage": 91.2
    },
    {
        "Name": "Carla Martinez",
        "Email": "carla.martinez@example.com",
        "Gender": "Female",
        "Percentage": 78.4
    },
    {
        "Name": "David Lee",
        "Email": "david.lee@example.com",
        "Gender": "Male",
        "Percentage": 85.6
    },
    {
        "Name": "Eva Brown",
        "Email": "eva.brown@example.com",
        "Gender": "Female",
        "Percentage": 93.1
    },
    {
        "Name": "Frank Wilson",
        "Email": "frank.wilson@example.com",
        "Gender": "Male",
        "Percentage": 69.8
    },
    {
        "Name": "Grace Kim",
        "Email": "grace.kim@example.com",
        "Gender": "Female",
        "Percentage": 88.7
    },
    {
        "Name": "Henry Patel",
        "Email": "henry.patel@example.com",
        "Gender": "Male",
        "Percentage": 64.3
    },
    {
        "Name": "Isla Chen",
        "Email": "isla.chen@example.com",
        "Gender": "Female",
        "Percentage": 95.0
    },
    {
        "Name": "Jack Thompson",
        "Email": "jack.thompson@example.com",
        "Gender": "Male",
        "Percentage": 22.9
    },
    {
        "Name": "Nina Roberts",
        "Email": "nina.roberts@example.com",
        "Gender": "Female",
        "Percentage": 90.5
    }
]);

    var [txt,setTxt]=useState();
    var studentResult=[
    {
        "Name": "Bob Smith",
        "Email": "bob.smith@example.com",
        "Gender": "Male",
        "Percentage": 91.2
    },
    {
        "Name": "Carla Martinez",
        "Email": "carla.martinez@example.com",
        "Gender": "Female",
        "Percentage": 78.4
    },
    {
        "Name": "David Lee",
        "Email": "david.lee@example.com",
        "Gender": "Male",
        "Percentage": 85.6
    },
    {
        "Name": "Eva Brown",
        "Email": "eva.brown@example.com",
        "Gender": "Female",
        "Percentage": 93.1
    },
    {
        "Name": "Frank Wilson",
        "Email": "frank.wilson@example.com",
        "Gender": "Male",
        "Percentage": 69.8
    },
    {
        "Name": "Grace Kim",
        "Email": "grace.kim@example.com",
        "Gender": "Female",
        "Percentage": 88.7
    },
    {
        "Name": "Henry Patel",
        "Email": "henry.patel@example.com",
        "Gender": "Male",
        "Percentage": 64.3
    },
    {
        "Name": "Isla Chen",
        "Email": "isla.chen@example.com",
        "Gender": "Female",
        "Percentage": 95.0
    },
    {
        "Name": "Jack Thompson",
        "Email": "jack.thompson@example.com",
        "Gender": "Male",
        "Percentage": 22.9
    },
    {
        "Name": "Nina Roberts",
        "Email": "nina.roberts@example.com",
        "Gender": "Female",
        "Percentage": 90.5
    }
];

    const result = (item)=>{
        if(item.Percentage>90){
            return(
                <tr>
                <td className="bg-success">{item.Name}</td>
                <td className="bg-success">{item.Email}</td>
                <td className="bg-success">{item.Gender}</td>
                <td className="bg-success">{item.Percentage}</td>
                </tr>
            )
        }
        else if(item.Percentage<90 && item.Percentage>=70){
            return(
                <tr>
                <td className="bg-info">{item.Name}</td>
                <td className="bg-info">{item.Email}</td>
                <td className="bg-info">{item.Gender}</td>
                <td className="bg-info">{item.Percentage}</td>
                </tr>
            )
        }
        else if(item.Percentage<70 && item.Percentage>=30){
            return(
                <tr>
                <td className="bg-warning">{item.Name}</td>
                <td className="bg-warning">{item.Email}</td>
                <td className="bg-warning">{item.Gender}</td>
                <td className="bg-warning">{item.Percentage}</td>
                </tr>
            )
        }
        else{
            return(
                <tr>
                <td className="bg-danger">{item.Name}</td>
                <td className="bg-danger">{item.Email}</td>
                <td className="bg-danger">{item.Gender}</td>
                <td className="bg-danger">{item.Percentage}</td>
                </tr>
            )
        }
    }

    const filterData=()=>{
        var data = studentResult.filter(
            (t)=> 
                t.Name.toLowerCase().includes(txt.toLowerCase()) ||
                t.Email.toLowerCase().includes(txt.toLowerCase()) ||
                t.Gender.toLowerCase().includes(txt.toLowerCase())
            );
            setStdData(data);
        }
    
    return(
    
        <div>
            <input type="text" 
                    value={txt}
                    onChange={e=>setTxt(e.target.value)}
                    onKeyUp={filterData}
                    className="form-control mt-5"
            />
          <table className="table table-sm table-bordered mt-5 p-2">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Percentage</th>
            </tr>

                {stdData.map((item,index)=>(
                    result(item)
                ))}

          </table>
        </div>

    )
}