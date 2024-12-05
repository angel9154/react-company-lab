// src/App.jsx
import { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

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
  };

  return (
    <div>
      <Navbar handleClick={handleClick} />
      <button onClick={() => handleClick("home")} type="submit">
        Home
      </button>
      <h1>Welcome to MyApp!</h1>
      <p>This is a simple React app with a navbar.</p>
      <div>{renderComponent()}</div>
    </div>
  );
};

export default App;
