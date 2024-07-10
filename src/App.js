import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Apparel from './pages/Apparel';
import Figures from './pages/Figures';
import Interior from './pages/Interior';
import Paintings from './pages/Paintings';
import Terrariums from './pages/Terrariums';
import './App.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { MdOutlineShoppingCartCheckout } from "react-icons/md";


const App = () => {
  return (
    <div className="App">
      <Box className='topbar' sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: "black" }}position="static">
        <Toolbar color="black">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            fLY fISH
          </Typography>
          <Button color="inherit"><MdOutlineShoppingCartCheckout /> Check out</Button>
        </Toolbar>
      </AppBar>
    </Box>
      <Router>
      <div>
        <NavBar  />
        <div className="content">
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/apparel" element={<Apparel/>} />
            <Route path="/figures" element={<Figures/>} />
            <Route path="/interior" element={<Interior/>} />
            <Route path="/paintings" element={<Paintings/>} />
            <Route path="/terrariums" element={<Terrariums/>} />
          </Routes>
        </div>
      </div>
    </Router>
    </div>
  );
};

export default App;
