import React from "react"; 
import "./shop.css"


function Pants(props) {
     const {addToCheck, avPants} = props;
     

    return (
        avPants.map((item) => (
          <div className="item" key = {item.id}>
          <img src={item.img} alt="pants"/>
          <hr />
          <h1>{item.title}</h1>
          <p>${item.price}</p>
          <button className="add" id = {item.title} onClick = {addToCheck}>Add to cart</button>
          </div>
        ))
 
     )
}

export default Pants;