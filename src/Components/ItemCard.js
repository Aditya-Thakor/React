import '../Style.css'

export default function ItemCard(props){

    //let discount = props.ammount - 20
    let discountamount = props.ammount/10;
    console.log(discountamount)  ;
    
    return(
        
        <div className="card w-25 p-1 m-2">

            <h1 className="card-header text-center" >{props.title}</h1>
            <h6>{props.cat}</h6>
            <p className="card-body">{props.des}</p>
            {/* <h2 className="card-footer text-center  " >$100 {props.eprice} <h3 className="txtdec">$199</h3> </h2> */}

            {
                props.ammount>= 200 ? <h2 className="card-footer text-center text-success " > <h3>{props.ammount - discountamount}</h3><h3 className="txtdec text-dark">{props.ammount}</h3> </h2>: <h2 className="card-footer text-center">{props.ammount}</h2>
            }

            {/* {
            props.ammount == "$100" ? <h2 className="card-footer text-center text-primary">{props.ammount}</h2>: <h2 className="card-footer text-center">{props.ammount}</h2>
            } */}
        </div>
    );
}