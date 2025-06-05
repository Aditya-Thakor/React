import { useParams } from "react-router-dom";
import Img from "./Img";

export default function Services(){
    const {id} = useParams();
    return(
<div>
    <h1>{id}</h1>
        <Img img='https://ideogram.ai/assets/progressive-image/balanced/response/TfKy_iXrQsufeiJWpWb9Uw' />
</div>

        // <div className="Container">
        //     <img src="https://ideogram.ai/assets/progressive-image/balanced/response/TfKy_iXrQsufeiJWpWb9Uw" alt="" />
        // </div>
    );
}