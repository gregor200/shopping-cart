import React from "react"; 
import './shop.css';

 

function Shoes(props) {
     const {addToCheck, avShoes} = props;
     
    return (
      avShoes.map((item) => (
         <div className="item" key = {item.id}>
         <img src={item.img} alt="shoe"/>
         <hr />
         <h1>{item.title}</h1>
         <p>${item.price}</p>
         <button className = "add" id={item.title} onClick = {addToCheck}>Add to cart</button>
         </div>
       ))

    )
}

export default Shoes;