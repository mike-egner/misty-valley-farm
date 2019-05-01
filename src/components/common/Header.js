import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
      {" | "}
      <NavLink to="/gallery" activeStyle={activeStyle}>
        Gallery
      </NavLink>
      {" | "}
      <NavLink to="/directions" activeStyle={activeStyle}>
        Directions
      </NavLink>
      {" | "}
      <NavLink to="/accommodation" activeStyle={activeStyle}>
        Accommodation
      </NavLink>
      {" | "}
      <NavLink to="/weather" activeStyle={activeStyle}>
        Weather
      </NavLink>
      {" | "}
      <NavLink to="/contact" activeStyle={activeStyle}>
        Contact
      </NavLink>
    </nav>
  );
};

export default Header;
