import React, { FC } from "react";
import { NavLink } from "react-router-dom";

const Header: FC = () => {
  return (
    <header>
      <NavLink className={({ isActive }) => (isActive ? 'active' : 'link')} to="/">Main</NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'active' : 'link')} to="/add">Add new item</NavLink>
    </header>
  )
}

export default Header