import { useState } from "react"

export default function Page(){
    const[isTable, setTable]=useState(false);

    let pageCheck=()=>{
        
        if(isTable==false){
            return<div className="card ">
                <div className="card-header card-title">Title</div>
                <div className="card-body" >
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </div>
                <div className="card-footer">
                    <button className="btn btn-info">view more</button>
                </div>
            </div>
        }
        else{
            return<div>
                <table className="table table-sm table-bordered">
                    <tr>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>Title</td>
                        <td> What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </td>
                        <td>
                            <button className="btn btn-info">view more </button>
                        </td>
                    </tr>
                </table>
            </div>
        }
    }

    return(
        <div className="p-5">
           <div className="text-end">
            <button   className="btn btn-success m-3" onClick={pageCheck(false)}>Table</button>
            <button   className="btn btn-success "onClick={pageCheck(true)}>Card</button>
           </div>
           {pageCheck()}
        </div>
    )
}