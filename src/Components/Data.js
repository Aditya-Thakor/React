export default function Data(props){
    return(
        <div className={ props.classname }>
            <div className="card">
                <div className="card-header card-title">
                    {props.title}
                </div>
                <div className="card-body">
                    {props.detail}
                </div>
                <div className="card-footer">
                    {props.footer}
                    <button onClick={props.btnEvent} className="btn btn-sm btn-info">click</button>
                </div>
            </div>


            {/* <table className="table table-sm  table-bordered  "> */}
                {/* <tr>
                    <th>Name </th>
                    <th>Contact </th>
                    <th>Gender</th> */}
                {/* </tr> */}
                {/* <tr> */}
                    {/* <td>adem</td>
                    <td>1234567890</td>
                    <td>male</td> */}
                    {/* <td>{props.name} </td> */}
                    {/* <td>{props.contact} </td>
                    <td>{props.gender} </td> */}
                {/* </tr> */}
            {/* </table> */}
        </div>
    );
}