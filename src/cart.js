import React, {useState, useMemo} from "react";
import cart from "./imgs/shopping-bag.png"
import "./cart.css";



function Cart(props) {
   //imports picked products and slide function from RouteSwitch
   const {products, slide, iid} = props;
   
   //stores the total number of picked products
   const [total, setTotal] = useState(0);
   const [allitems, setAllitems] = useState(0);
   const [inc, setInc] = useState([]);
   const [dec, setDec] = useState([]);

   //increases the product quantity when the + button is clicked
   const increase = () => {
    if(inc.length > 0) {
      let id = inc[0];
      let ind = products.findIndex(x => x.id === id);
      products[ind].Quantity ++;
    }
    else {
       void(0)
    }
   }

   //Decreases the product quantity when the - button is clicked
   const decrease = () => {
    if(dec.length > 0) {
        let id = dec[0];
        let ind = products.findIndex(x => x.id === id);
        if(products[ind].Quantity === 1) {
            let id = document.getElementById(products[ind].id);
            console.log(id)
            setTotal(total - products[ind].price)
            products.splice(ind, 1);
            setAllitems(allitems - 1);
        }
        else {
            products[ind].Quantity --;
        }
      }
      else {
         void(0)
      }
   }

   //loops through the selected products and multiply the quantity of each product by its price, and 
   //adds all of them to get the total price
   const Total = () => {
    let max = 0;
    if(products.length > 0) {
        for(let i=0; i<products.length; i++) {
         max += products[i].price * products[i].Quantity
        }
        setTotal(Number(max.toFixed(2)))
    }
   }

    //loops through the selected products and adds all the quantities, then displays them at the top of the cart
   const cartTotal = () => {
    let max = 0;
    if(products.length > 0) {
    for(let i=0; i<products.length; i++) {
    max += products[i].Quantity
    }
    setAllitems(max)
    }
   }

   //calls the total and the cart total to be recalculated when there is a change in 
   useMemo(() => {
     Total()
     cartTotal()
   }, [iid])

   
   //recalls the increase function when there is an increase
   useMemo(() => {
    increase()
    Total()
   }, [inc])

   //recalls the decrease function when there is a decrease
   useMemo(() => {
    decrease()
    Total()
   }, [dec])

   //recalls the total when there is a change in products
   useMemo(() => {
    Total();
   }, [products])

   //recalls the cart total when there is a change in products, an increase or decrease in quantity
   useMemo(() => {
    cartTotal()
   }, [products, inc, dec])

   //Shows and Hides the cart total when the selected products are zero, or when products are selected
   useMemo(() => {
    if(total > 1) { document.getElementById("num").style.display = "flex"};
    if(total < 1 && dec.length > 0) { document.getElementById("num").style.display = "none"}
   }, [total])

  



   

    return(
        <div className="checkout">

        <div className='cart'>

     
        <button className="circle" onClick={slide}>
        <img src={cart} alt="cart"/>
        </button>

        <div className="num" id="num"><p>{allitems}</p></div>

    
         </div>

         <div className="yourItems" id="check">
        <h2>Your items:</h2>

        <div className="items">
           {
            products.map((item) => (
        
               <div className="semiItem" key = {item.id} >

                <div className="image">
                <img src={item.img} alt="product" />
                </div>

                <div className="cont">

                <h1>{item.title}</h1>

                <p className="price">$ {Number( (item.price * item.Quantity).toFixed(2))}</p>

                <div className="buttons">
                 <button  id =  {item.id} onClick = {() => {setInc([item.id])}}>+</button>

                 <p id = {item.id}>{products[products.findIndex(x => x.id === item.id)].Quantity}</p>

                 <button  id = {item.id} onClick = {() => {setDec([item.id])}}>-</button>
                 </div>   


                </div>

                </div>
            ))
           }
       </div>

       <p >Total: $ {total}</p>
       <button >Checkout</button>


       </div>
       </div>

    )
}

export default Cart;