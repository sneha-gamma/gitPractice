import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'
import CartPage from './pages/CartPage';
import { BrowserRouter } from 'react-router-dom';
import { useEffect,useState } from 'react';



function App() {

  const [blur,setBlur] = useState(0);
  
  useEffect(()=>{
    const blurfn = ()=>{

         const position = window.scrollY;
         const newblur = Math.min(position/50,10);
         setBlur(newblur)
  }
               
        window.addEventListener('scroll', blurfn);
    return () => window.removeEventListener('scroll', blurfn);

  },[])


  return (
    
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      
       <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/CartPage' element={<CartPage/>}/>
       </Routes>
      
      {/* <Footer/> */}

    </div>
    </BrowserRouter>
    
  );
}

export default App;
