import logo from './logo.svg';
import PersistentDrawerLeft from './componenets/Header';
import MovieList from './componenets/Movies';
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Print from './componenets/Body'
import Navbar from './componenets/Navbar';
import { useEffect, useRef, useState } from 'react';
import './App.css';
import { TextField } from '@mui/material';

function App() {
  const [showNav, setShowNav] = useState(false);
  const navRef = useRef(null)

console.log("navref",navRef)
  return (
    <div className="App">
      
       <header><MenuIcon 
       onClick={()=> navRef.current.className == 'sidenav active' ? 'sidenav' : 'sidenav active'}
       
       
       
       
       />
       
       <TextField className="abc">ABC</TextField>
       </header>
    
          <Navbar show={'true'} navRef={navRef} />
   {/* <PersistentDrawerLeft/> */}
   

   
  
    </div>
  );
}

export default App;
