import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Products from './pages/Products';
import Singlepage from './pages/Singlepage';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Errorpage from './pages/Errorpage';
import About from './pages/About';

function App() {

  return (

    <div className="App">

      <BrowserRouter>
          <Navbar />
        <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="about" element={<About />} />
                <Route path="products" element={<Products />} />
                <Route path="products/:id" element={<Singlepage />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route path="cart" element={<Cart />} />                
                <Route path="*" element={<Errorpage />} />
        </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
