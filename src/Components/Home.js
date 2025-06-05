import { useParams } from 'react-router-dom';
import '../Style.css';
import Header from './Header';
import Img from './Img';
import ItemCard from './ItemCard';

export default function Home(){
    const {id} = useParams();
    var data = [
        {"title":"Item 1","desc":"This is demo Desc 1", "amount":100, "cat":"cat1"  },
        {"title":"Item 2","desc":"This is demo Desc 2", "amount":300, "cat":"cat2" },
        {"title":"Item 3","desc":"This is demo Desc 3", "amount":500, "cat":"cat1"},
        {"title":"Item 4","desc":"This is demo Desc 4", "amount":600, "cat":"cat1"},
    ];

    if(id!="all")
    {
        
        data = data.filter( (d)=>d.cat==id );
    }

   
    
    // for(var i=1; i<5; i++){
       
    // }
    

    return(
        <div>
            <h1>{id}</h1>
            <Img img='https://ideogram.ai/assets/image/lossless/response/sM6igVOfQPSlniqR5bwIJw' />
           <div className='d-flex '>
            {
                 data.map( (item,index) =>(
            <ItemCard title={item.title} des={item.desc} ammount={item.amount} cat={item.cat}   />        
                 ))
            }
                
            {/* <ItemCard title='Item-1' des=' This is a Description of Item one. ' ammount='$100' />
            <ItemCard title='Item-2' des='This is a Description Of Item Two.' ammount='$150' />
            <ItemCard title='Item-3' des='This is a Description of Item Three.' ammount='$99' />
            <ItemCard title='Item-4' des='This is a Description of Item Four' ammount='$199' /> */}
           </div>
        </div>
        // <div className='Container'>
        //     {/* <img src="https://ideogram.ai/assets/image/lossless/response/sM6igVOfQPSlniqR5bwIJw" alt="home page" /> */}
        //     <Img src='https://ideogram.ai/assets/image/lossless/response/sM6igVOfQPSlniqR5bwIJw'/>
        // </div>
    );
}