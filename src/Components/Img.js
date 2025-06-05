import '../Style.css';

export default function Img(props){


    return(
        <div className="Container">
            <img src={props.img} alt="" />
        </div>
    )
}