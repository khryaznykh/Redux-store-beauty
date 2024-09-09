import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Shop from './Shop/Shop';
import Cart from "./Cart/Cart";
import Home from "./Home";


function App() {

  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Shop" element= {<Shop/>}/>
                <Route path="/Cart" element = {<Cart/>}/>
            </Routes>
        </Router>
    
    </div>
  );
}

export default App;
