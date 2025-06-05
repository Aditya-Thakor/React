import ItemCard from "./ItemCard";

export default function Shop(){
    return(
        <div>
           <h1 className="ms-4">Products</h1>
           <div className="d-flex justify-content-around align-items-center flex-wrap m-3" >
             <ItemCard title='Item-1' des=' This is a Description of Item one. ' ammount='$100' cat="cat1" />
             <ItemCard title='Item-2' des='This is a Description Of Item Two.' ammount='$150' cat="cat3"/>
            <ItemCard title='Item-3' des='This is a Description of Item Three.' ammount='$99' cat="cat1" />
            <ItemCard title='Item-4' des='This is a Description of Item Four' ammount='$199' cat="cat2"/>
            <ItemCard title='Item-5' des='This is a Description of Item Five' ammount='$88'  cat="cat2"/>
            <ItemCard title='Item-6' des='This is a Description of Item Six' ammount='$99.9'  cat="cat1"/>
            </div>
           </div>
        
    );
}