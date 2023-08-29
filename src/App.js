import Cardproducto from './Cardproducto';
import Home from "./Screens/Home";
import Services from './Screens/Services';
import Product from './Screens/Product';
import Contact from './Screens/Contact';
import NavBar from './Components/NavBar';





function App() {
  return (
    <div className="App">
  
        <NavBar/>
        <Cardproducto />
        <Home />
        <Services />
        <Product />
        <Contact />

   
    </div>
  );
}

export default App;
