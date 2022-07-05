import React from 'react';
import {NavLink} from "react-router-dom"
import classes from "../header/header.module.css"



function Footer(props) {
  return (
    <div className={classes.main}>
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
   </ul>
  </div>
    );
}


export default Footer;