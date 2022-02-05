import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
  <div>
    <NavLink exact to='/' >Home</NavLink>
  </div>
  <div>
    <NavLink exact to='/movies'>Movies</NavLink>
  </div>
  <div>
    <NavLink exact to='/directors' >Directors</NavLink>
  </div>
  <div>
    <NavLink exact to='/actors' >Actors</NavLink>
  </div>
  </>
  )
}

export default NavBar;
