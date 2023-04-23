import React, {useState, useEffect} from "react";
import bag from "./imgs/whiteBag.png";
import arrow from "./imgs/right-arrow.png"
import woman from "./imgs/woman-shopping2.jpg"
import woman2 from "./imgs/woman.jpg"
import dot from "./imgs/full-stop.png"
import App from "./App";
import Cart from "./cart";
import { Link } from "react-router-dom";
import { Shop, allShoes, allTshirts, allPants} from "./shop";



import { HashRouter, Routes, Route } from "react-router-dom";


function RouteSwitch() {
    //Stores Items that have been picked by the User
    const [picked, setPicked] = useState([]);

    //Stores the Quantities of each picked product
    const quantities = [];
    const [iid, setId] = useState(0)
    const [sed, setSed] = useState(0);
  

    //Slides the cart from left to right when the cart icon is clicked
    const slide = () => {
        let check = document.getElementById("checkout");
        check.classList.toggle("slideIn");
     }

     function rise() {
      document.getElementById("alert").classList.toggle("rise");
      setTimeout(() => {
        document.getElementById("alert").classList.toggle("rise"); 
      }, 1000);
     }


     //Adds selected products to the picked array
     const add = (e) => {
       let id = e.target.id;
       let check = picked.findIndex(x => x.title === e.target.id)
       document.getElementById("dot").style.display = "flex";
       document.getElementById("sp").innerText= id;
       rise();

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

     function empty() {
      if(picked.length > 0) {
      setPicked([]);
      setSed(sed + 1);
      setTimeout(() => {
        slide();
      document.getElementById("dot").style.display = "none"; 
      }, 500);

      }
      else {
        slide()
      }
     }

   

     

    //reloads the picked array
    useEffect(() => {
        setPicked(picked);
       }, [iid])
  
   
  

    return (
        <HashRouter>

      {/* Universal header across all pages*/}
        
        <header>
          <Link className="link" to = "/">
          <li>Xstore</li>
          </Link>
          <div className="images" onClick={slide}>
          <img src={bag} alt="bag" />
          <img  className="dot" id="dot" src={dot} alt="dog"/>

           </div>
        </header>

        {/* Displays the Cart component and sends picked products to be displayed */}
        <Cart products = {picked} Quantities = {quantities} slide = {slide} iid = {iid} empty = {empty} sed = {sed}/>

        <Routes>

        <Route exact path="/" element = { <App />} />
        <Route exact path="/shop" element = { <Shop add = {add} />} />  
  
        
        </Routes>
        </HashRouter>
    )
}

export default RouteSwitch;