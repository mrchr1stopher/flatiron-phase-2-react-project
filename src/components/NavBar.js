import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "black",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Welcome
      </NavLink>
      <NavLink
        to="/addword"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Add a word
      </NavLink>
      <NavLink
        to="/wordlist"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Wordlist
      </NavLink>
    </div>
  );
}

export default NavBar;
