import React from 'react';
import {Navigate} from "react-router-dom"
import {NavLink,  useNavigate } from "react-router-dom"
import classes from "./header.module.css"

function Header(props) {
  const navigate = useNavigate();
  const backTo = () => {
    navigate(-1)
  }
  const goTo = () => {
    navigate(+1)
  }
  return (
    <div className={classes.joke}>
      <ul>
        <li>
          <NavLink className={classes.link} to="/">Главная</NavLink>
        </li>
        <li>
        <NavLink className={classes.link} to="/about">О нас</NavLink>
        </li>
        <li>
          <NavLink className={classes.link} to="/portfolio">пороро</NavLink>
        </li>
        <button className={classes.button} onClick={backTo}>BACK</button> <button className={classes.button2} onClick={goTo}>Вперед</button>
      </ul>
    </div>
  );
}

export default Header;