import React from 'react';
import SideMenu from './components/SideMenu';
import Products from './components/Products'
import Main from './components/Main'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {useUser} from 'reactfire'



function App() {
 
  return (
    <div >
      <SideMenu />
      <Main />
      <ToastContainer />
      <Footer/>
    </div>
  );
}

export default App;

