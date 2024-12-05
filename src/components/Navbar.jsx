import React, { useState } from "react";

const Navbar = ({ handleClick }) => {
  return (
    <>
      <button onClick={() => handleClick("home")} type="button">
        Home
      </button>
      <button type="button">History</button>
      <button type="button">Past work</button>
      <button type="button">Staff</button>
      <button type="button">Contact us</button>
    </>
  );
};

export default Navbar;
