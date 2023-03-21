
import './App.css';
import { Link } from 'react-router-dom';
import arrow from "./imgs/right-arrow.png"
import woman1 from "./imgs/lady.jpg";
import woman2 from "./imgs/woman.jpg";
import clothes from "./imgs/clothes.jpg";
import man from "./imgs/man5.jpg";

 function App() {

  return (
    <div>

    <div className='intro'>
    <img src={man} alt = "man" />
    <img src={woman1} alt="woman1"/>
    <img src={clothes} alt="man" />
    <img src={woman2} alt="woman2" />
    </div>

    <Link className='li' to="/shop"> <li> <button>SHOP NOW
        <span>< img src={arrow} alt="shop" /></span>
      </button> </li>
      </Link>

    <div className='text'>
    <h1>The X-store</h1>
    <p>
      Purchase high quality Jeans, T-shirts, shirts and shoes at an affordable price, 
      and get them delivered at your place quicker than ever.
    </p>
      
    </div>
    </div>
  );
}

export default App;
