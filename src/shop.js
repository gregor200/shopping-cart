import React, {useState, useMemo, useEffect} from "react";
import shopcss from "./shop.css"
import Pants from "./pants";
import Tshirts from "./t-shirts";
import Shoes from "./shoes";

import newBalanceMen from "./imgs/newBalanceMen.jpg"
import allenEdmond from "./imgs/allenEdmond.jpg"
import pumaMen from "./imgs/pumaMen.jpg";
import ikunka from "./imgs/ikunka.jpg";
import Bruno from "./imgs/Brunomarc.jpg";
import nbWomen from "./imgs/nbWomen.jpg";
import impdoo from "./imgs/impdoo.jpg";
import Brooks from "./imgs/Brooks.jpg";
import squareToe from "./imgs/squareToe.jpg";
import Blondo from "./imgs/Blondo.jpg";
import uniqid from "uniqid";

import element from "./imgs/element.jpg";
import Blouse from "./imgs/BlouseTop.jpg";
import Trippie from "./imgs/Trippie.jpg";
import louise from "./imgs/louise.jpg";
import consumer from "./imgs/consumer.jpg";
import consumer2 from "./imgs/consumer2.jpg"
import clubMonaco from "./imgs/clubMonaco.jpg";
import woventop from "./imgs/woventop.jpg";
import Bb from "./imgs/Bb.jpg";
import underAmour from "./imgs/underAmour.jpg";

import womenSkinny from "./imgs/womenSkinny.jpg";
import menStraightfit from "./imgs/menStraightfit.jpg";
import relaxedStraight from "./imgs/relaxedStraight.jpg";
import womenPetite from "./imgs/womenPetite.jpg";
import womenRipped from "./imgs/womenRipped.jpg";
import menRipped from "./imgs/menRipped.jpg";
import shaping from "./imgs/shaping.jpg";
import rustler from "./imgs/mensClassic.jpg";
import plusSize from "./imgs/plusSize.jpg";
import Hungson from "./imgs/Hungson.jpg";

const allShoes = [
    {title: "New Balance Men's Classic", gender:"male", price: 184.79, img: newBalanceMen, cat: "shoes", id: uniqid()},
    {title: "Allen Edmonds Men's Carlyle Oxford", gender:"male", price: 355.02, img: allenEdmond, cat: "shoes", id: uniqid()},
    {title: "PUMA Men's Ignite Pwradapt Caged", gender:"male", price: 120.77, img: pumaMen, cat: "shoes", id: uniqid()},
    {title: "ikunka Men's Fashion Sneakers", gender:"male", price: 40.99, img: ikunka, cat: "shoes", id: uniqid()},
    {title: "Bruno Marc Men's Dress Shoes", gender:"male", price: 36.99, img: Bruno, cat: "shoes", id: uniqid()},
    {title: "New Balance Women's", gender:"female", price: 81.00, img: nbWomen, cat: "shoes", id: uniqid()},
    {title: "Impdoo Women's Air Athletic", gender:"female", price: 48.99, img: impdoo, cat: "shoes", id: uniqid()},
    {title: "Brooks Women's Adrenaline", gender:"female", price: 184.99, img: Brooks, cat: "shoes", id: uniqid()},
    {title: "Ladies Western Square Toe", gender:"female", price: 69.99, img: squareToe, cat: "shoes", id: uniqid()},
    {title: "Blondo Women's Waterproof", gender:"female", price: 131.16, img: Blondo, cat: "shoes", id: uniqid()},
 ];

 const allTshirts = [
{title: "Element M961veba", gender:"unisex", price: 34.04, img: element, cat: "tshirt", id: uniqid()},
  {title: "Womens Dressy Blouses Tops", gender:"female", price: 23.99, img: Blouse, cat: "tshirt", id: uniqid()},
  {title: "Trippie Redd Hanes 5180", gender:"male", price: 26.94, img: Trippie, cat: "tshirt", id: uniqid()},
  {title: "Velvet Women's Louise Blouse", gender:"female", price: 104.87, img: louise, cat: "tshirt", id: uniqid()},
  {title: "Consumer Mens Apparel Blue", gender:"male", price: 75.89, img: consumer, cat: "tshirt", id: uniqid()},
  {title: "Consumer Mens Apparel Red", gender:"male", price: 78.86, img: consumer2, cat: "tshirt", id: uniqid()},
  {title: "Club Monaco", gender:"female", price: 77.00, img: clubMonaco, cat: "tshirt", id: uniqid()},
  {title: "Woven top", gender:"male", price: 64.95, img: woventop, cat: "tshirt", id: uniqid()},
  {title: "BB DAKOTA", gender:"female", price: 35.57, img: Bb, cat: "tshirt", id: uniqid()},
  {title: "Under Armour", gender:"male", price: 18.75, img: underAmour, cat: "tshirt", id: uniqid()},
 ];

  const allPants = [
    {title: "Women shaping skinny jeans", gender:"female", price: 21.63, img: womenSkinny, id: uniqid()},
    {title: "Men's straight fit Jeans", gender:"male", price: 23.40, img: menStraightfit, id: uniqid()},
    {title: "Levi's Relaxed Straight Jeans", gender:"male", price: 30.72, img: relaxedStraight, id: uniqid()},
    {title: "Democracy Women's Straight Leg Jean", gender:"female", price: 68.45, img: womenPetite, id: uniqid()},
    {title: "Women ripped jeans", gender:"female", price: 45.99, img: womenRipped, id: uniqid()},
    {title: "MICKASON Men's Ripped jeans", gender:"male", price: 40.99, img: menRipped, id: uniqid()},
    {title: "Women shapping pull-on jeans", gender:"female", price: 24.60, img: shaping, id: uniqid()},
    {title: "Rustler Men's Classic", gender:"male", price: 17.43, img: rustler, id: uniqid()},
    {title: "Lee Women's Plus Size", gender:"female", price: 32.90, img: plusSize, id: uniqid()},
    {title: "HUNGSON Men's Blue Slim Fit", gender:"male", price: 29.99, img: Hungson, id: uniqid()},
  ]




function Shop(props) {
    const {add} = props;
    const [avShoes, setAvshoes] = useState(allShoes);
    const [avTshirts, setAvtshirts] = useState(allTshirts);
    const [avPants, setAvpants] = useState(allPants);

    const [female, setFemale] = useState(false);
    const [male, setMale] = useState(false);
    const [all, setAll] = useState(true);
    const [malepants, setMalepants] = useState(false);
    const [less50, setLess50] = useState(false);
    const [great50, setGreat50] = useState(false)
    const [less100, setLess100] = useState(false);
    const [great100, setGreat100] = useState(false)

    const [shoes, setShoes] = useState(true);
    const [tshirts, setTshirt] = useState(false);
    const [pants, setPants] = useState(false);
    const [color, setColor] = useState("#E8D5C4");
    const [color2, setColor2] = useState("#609EA2");
    const [color3, setColor3] = useState("#609EA2");

    const [prod, setProd] = useState("Shoes")
    
    useEffect(() => {
     if(shoes === true) {setProd("Shoes")}
     if(tshirts === true) {setProd("Tshirts")}
     if(pants === true) {setProd("Pants")}
    }, [shoes, tshirts, pants])

    useEffect(() => {
     if(female !== true && male !== true && all === true) { 
        if(shoes === true) {setAvshoes(allShoes)}
        if(tshirts === true) {setAvtshirts(allTshirts)}
        if(pants === true) {setAvpants(allPants)}}

        if(female !== true && male!==true ) {
            setAll(true)
            if(shoes === true) {setAvshoes(allShoes)}
            if(tshirts === true) {setAvtshirts(allTshirts)}
            if(pants === true) {setAvpants(allPants)}
        }
    
        if(male !== true && female !== true) {
            setAll(true)
            if(shoes === true) {setAvshoes(allShoes)}
            if(tshirts === true) {setAvtshirts(allTshirts)}
            if(pants === true) {setAvpants(allPants)} 
        }

    if(female === true ) {
      if(shoes === true) {setAvshoes(allShoes.filter((item) => (item.gender === "female")))}
      if(tshirts === true) {setAvtshirts(allTshirts.filter((item) => (item.gender === "female")))}
      if(pants === true) {setAvpants(allPants.filter((item) => (item.gender === "female")))}
    }
     
    if(male === true ) {
        if(shoes === true) {setAvshoes(allShoes.filter((item) => (item.gender === "male")))}
        if(tshirts === true) {setAvtshirts(allTshirts.filter((item) => (item.gender === "male")))}
        if(pants === true) {setAvpants(allPants.filter((item) => (item.gender === "male")))}
      } 

    if(all === true) {
      if(shoes === true) {setAvshoes(allShoes)}
      if(tshirts === true) {setAvshoes(allTshirts)}
      if(pants === true) {setAvshoes(allPants)}
    }

    if(less50 === true && all === true  ) {
      if(shoes === true) {setAvshoes(allShoes.filter((item) => (item.price < 50)))}
      if(tshirts === true) {setAvtshirts(allTshirts.filter((item) => (item.price < 50)))}
if(pants === true) {setAvpants(allPants.filter((item) => (item.price < 50)))}
}
if(less50 === true && female == true) {
    if(shoes === true) {setAvshoes(allShoes.filter((item) => (item.price < 50 && item.gender == "female")))}
    if(tshirts === true) {setAvtshirts(allTshirts.filter((item) => (item.price && item.gender == "female" < 50)))}
    if(pants === true) {setAvpants(allPants.filter((item) => (item.price < 50 && item.gender == "female")))}
}
if(less50 === true && male == true) {
    if(shoes === true) {setAvshoes(allShoes.filter((item) => (item.price < 50 && item.gender == "male")))}
    if(tshirts === true) {setAvtshirts(allTshirts.filter((item) => (item.price && item.gender == "male" < 50)))}
    if(pants === true) {setAvpants(allPants.filter((item) => (item.price < 50 && item.gender == "male")))}
}


if(less100 === true) {
    if(shoes === true) {setAvshoes(allShoes.filter((item) => (item.price < 100)))}
    if(tshirts === true) {setAvtshirts(allTshirts.filter((item) => (item.price < 100)))}
    if(pants === true) {setAvpants(allPants.filter((item) => (item.price < 100)))}
  }
if(less100 == true && female == true) {
    if(shoes === true) {setAvshoes(allShoes.filter((item) => (item.price < 100 && item.gender == "female")))}
    if(tshirts === true) {setAvtshirts(allTshirts.filter((item) => (item.price < 100 && item.gender == "female" )))}
    if(pants === true) {setAvpants(allPants.filter((item) => (item.price < 100 && item.gender == "female")))}
}
if(less100 == true && male == true) {
    if(shoes === true) {setAvshoes(allShoes.filter((item) => (item.price < 100 && item.gender == "male")))}
    if(tshirts === true) {setAvtshirts(allTshirts.filter((item) => (item.price < 100 && item.gender == "male" )))}
    if(pants === true) {setAvpants(allPants.filter((item) => (item.price < 100 && item.gender == "male")))}
}


  if(great50 === true ) {
    if(shoes === true) {setAvshoes(allShoes.filter((item) => (item.price > 50)))}
    if(tshirts === true) {setAvtshirts(allTshirts.filter((item) => (item.price > 50)))}
    if(pants === true) {setAvpants(allPants.filter((item) => (item.price > 50)))}
  }
  if(great50 === true && female == true) {
    if(shoes === true) { setAvshoes(allShoes.filter((item) => (item.price > 50 && item.gender == "female")))}
    if(tshirts === true){ setAvtshirts(allTshirts.filter((item) => (item.price > 50 && item.gender == "female")))}
    if(pants === true) { setAvpants(allPants.filter((item) => (item.price > 50 && item.gender == "female")))}
  }
  if(great50 === true && male == true) {
    if(shoes === true) {setAvshoes(allShoes.filter((item) => (item.price > 50 && item.gender == "male")))}
    if(tshirts === true) {setAvtshirts(allTshirts.filter((item) => (item.price > 50 && item.gender == "male")))}
    if(pants === true) { setAvpants(allPants.filter((item) => (item.price > 50 && item.gender == "male")));}
  }

  if(great100 === true) {
    if(shoes === true) {setAvshoes(allShoes.filter((item) => (item.price > 100)))}
    if(tshirts === true) {setAvtshirts(allTshirts.filter((item) => (item.price > 100)))}
    if(pants === true) {setAvpants(allPants.filter((item) => (item.price > 100)))}
  }
  if(great100 === true && female === true) {
    if(shoes === true) {setAvshoes(allShoes.filter((item) => (item.price > 100 && item.gender == "female")))}
    if(tshirts === true) {setAvtshirts(allTshirts.filter((item) => (item.price > 100 && item.gender == "female")))}
    if(pants === true) {setAvpants(allPants.filter((item) => (item.price > 100 && item.gender == "female")))}
  }
  if(great100 === true && male === true) {
    if(shoes === true) {setAvshoes(allShoes.filter((item) => (item.price > 100 && item.gender == "male")))}
    if(tshirts === true) {setAvtshirts(allTshirts.filter((item) => (item.price > 100 && item.gender == "male")))}
    if(pants === true) {setAvpants(allPants.filter((item) => (item.price > 100 && item.gender == "male")))}
  }


}, [female, male, all, less50, great50, less100, great100])

return (
    <div>

    <div className="content" >

        <div className="options">  
             <h1>Filter</h1>
        <div className="filters">
            <h2>Gender</h2>
        <label htmlFor="all">
            All {prod}<input type="checkbox" checked = {all} onChange = {() => {
            if(male == true || female == true) {setFemale(false); setMale(false); setAll(true)}
            }} />
           </label>

           <label htmlFor="female">
            Female <input type="checkbox" checked = {female} onChange = {() => 
           {if(female === false) {setFemale(true); setMale(false); setAll(false)} else {setFemale(false)} }} />
           </label>

           <label htmlFor="female">
            Male <input type="checkbox" checked = {male} onChange={() => {
            if(male === false) {setMale(true); setFemale(false); setAll(false)} else {setMale(false)}
            }} />
           </label>

           <h2>Price</h2>

           <label>
           less than $50 <input type="checkbox" checked = {less50} onChange={() => {
           if(less50 === false) {setLess50(true); setGreat50(false); setLess100(false); setGreat100(false);}
           else {setLess50(false)}
           }} />
           </label>

           <label>
           Greater than $50 <input type="checkbox" disabled = {malepants} checked = {great50} onChange = {() => {
           if(great50 === false) {setGreat50(true); setLess50(false); setLess100(false); setGreat100(false);}
           else {setGreat50(false)}
           }} />
           </label> 

           <label>
           Less than $100 <input type="checkbox" checked = {less100} onChange = {() => {
            if(less100 === false) {setLess100(true); setGreat50(false); setLess50(false); setGreat100(false);}
            else {setLess100(false)}
           }} />
           </label>

           <label>
           Greater than $100 <input type="checkbox" disabled = {pants} checked = {great100} onChange = {() => {
           if(great100 === false) {setGreat100(true); setGreat50(false); setLess100(false); setLess50(false);}
           else {setGreat100(false)}
           }} />
           </label>
           

           </div>

        </div>

        <div className="products" id="prod">
            <div className="categories">
            <button onClick={() => {setShoes(true); setPants(false); setTshirt(false); 
            setColor("#E8D5C4"); setColor2("#609EA2"); setColor3("#609EA2");
            setAll(true); setFemale(false); setMale(false)
            setLess50(false); setGreat50(false); setLess100(false); setGreat100(false)}}
             style ={{background: color}}>Shoes</button>


            <button onClick={() => {setShoes(false); setPants(false); setTshirt(true);
             setColor("#609EA2"); setColor2("#E8D5C4"); setColor3("#609EA2"); 
             setAll(true); setFemale(false); setMale(false)
             setLess50(false); setGreat50(false); setLess100(false); setGreat100(false)}} 
            style ={{background: color2}}>T-shirts</button>

            <button onClick={() => {setShoes(false); setPants(true); setTshirt(false)
            setColor("#609EA2"); setColor2("#609EA2"); setColor3("#E8D5C4");
            setAll(true); setFemale(false); setMale(false)
            setLess50(false); setGreat50(false); setLess100(false); setGreat100(false)}} 
            style ={{background: color3}}>Pants</button>
            </div>

            <div className="prod" >
               { shoes ? <Shoes addToCheck = {add} avShoes = {avShoes} /> : void(0) }
               { tshirts ? <Tshirts addToCheck = {add} avTshirts = {avTshirts}  /> : void(0) }
               { pants ? <Pants addToCheck = {add} avPants = {avPants} /> : void(0) }
            </div>
        </div>

    </div>

    </div>
)
}

export {Shop, allShoes, allTshirts, allPants};