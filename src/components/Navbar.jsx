import React, { useState } from 'react';

const Navbar = () => {
    
    const [navItems, setNavItem] = useState('home');
    
    
    const handleClick = (navItem) => {
      setNavItem(navItem);
    };
    const renderContent = () => {
        if (navItems === 'home') {
            return <Home />;
        }
          return <Home />;
      }
}







    // <>
    //         <li>Home</li>
    //         <li>About</li>
    //         <li>Past Work</li>
    //         <li>Contact</li>
    //       </>










//DEAD CODE 
// State to control the navbar collapse
    // const [isNavOpen, setIsNavOpen] = useState(false);

    // const handleNavToggle = () => {
    //     setIsNavOpen(!isNavOpen); // Toggle the state between true/false
    //   };