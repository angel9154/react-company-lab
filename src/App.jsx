// src/App.jsx
import './App.css'
import { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import History from "./components/History";
import PastWork from "./components/Pastwork";
import Staff from "./components/Staff";
import ContactUs from "./components/Contactus";
import ExternalLinks from './components/ExternalLinks';

const App = () => {
  const [navItem, setNavItem] = useState("");
  const handleClick = (navItem) => {
    setNavItem(navItem);
    console.log(navItem);
  };

  const renderComponent = () => {
    if (navItem === "home") {
      return <Home />;
    } 
    if (navItem === "history") {
      return <History />;
    } 
    if (navItem === "past work") {
      return <PastWork />;
    } 
    if (navItem === "staff") {
      return <Staff />;
    } 
    if (navItem === "contact us") {
      return <ContactUs />;
    } 
    if (navItem === "external links") {
      return <ExternalLinks />;
    } 
    
  };

  return (
    <>
    {/* <div className="navBar"> */}
     
      <div><Navbar handleClick={handleClick} /></div>
     
      
      <div className='renderComponent'>{renderComponent()}</div>
    {/* </div> */}
    </>
  );
};

export default App;
