import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div className="header">
           <h1>Routing Demo</h1>
           <ul>
            <li>
                <Link to='/home/'>Home</Link>
            </li>
            <li>
                <Link to='/shop' >Shop</Link>
            </li>
             <li>
                <Link to='/service/'>Services</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li> 
           </ul>
        </div>
    );
}