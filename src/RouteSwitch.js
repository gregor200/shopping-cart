import React, {useState, useEffect} from "react";
import App from "./App";
import Cart from "./cart";
import Contact from "./contacts"
import { Link } from "react-router-dom";
import { Shop, allShoes, allTshirts, allPants} from "./shop";



import { BrowserRouter, Routes, Route } from "react-router-dom";


function RouteSwitch() {
    //Stores Items that have been picked by the User
    const [picked, setPicked] = useState([]);

    //Stores the Quantities of each picked product
    const quantities = [];
    const [iid, setId] = useState(0)
  

    //Slides the cart from left to right when the cart icon is clicked
    const slide = () => {
        let check = document.getElementById("check");
        check.classList.toggle("slideIn");
     }


     //Adds selected products to the picked array
     const add = (e) => {
       let id = e.target.id;
       let check = picked.findIndex(x => x.title === e.target.id)

       if(check < 0) {
       let shoe = allShoes.filter((item) => (item.title === id));
       let tshirt = allTshirts.filter((item) => (item.title === id));
       let pant = allPants.filter((item) => (item.title === id));

       if(shoe.length > 0) { shoe[0].Quantity = 1; setPicked(picked.concat(shoe[0]));}
       if(tshirt.length > 0) { tshirt[0].Quantity = 1; setPicked(picked.concat(tshirt[0]));}
       if(pant.length > 0) { pant[0].Quantity = 1; setPicked(picked.concat(pant[0]));}

       }

       //if the clicked item has already been picked, its quantity is increased by 1
       else {
        picked[check].Quantity ++;
        setId(Math.random())
       }
    }
 

    //reloads the picked array
    useEffect(() => {
        setPicked(picked);
       }, [iid])
  
   
  

    return (
        <BrowserRouter>

      {/* Universal header across all pages*/}
        <header>
        <h1>Xstore</h1>
        <div className="Headerlinks">
        <Link className='link' to = "/">Home</Link>
        <Link className='link' to = "/shop">Shop</Link>
        <Link className='link' to = "/contacts">Contacts</Link>
        </div>
       </header>

        {/* Displays the Cart component and sends picked products to be displayed */}
        <Cart products = {picked} Quantities = {quantities} slide = {slide} iid = {iid} />

        <Routes>

        <Route exact path="/" element = { <App />} />
        <Route exact path="/shop" element = { <Shop add = {add} />} />  
        <Route exact path="/contacts" element = { <Contact />} />  
        
        </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;