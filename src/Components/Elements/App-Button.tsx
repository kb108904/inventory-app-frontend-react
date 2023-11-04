import React from 'react';
import { Link } from "react-router-dom";
import './App-Button.css'

const AppButton = (props:any) => {
  return (
    <Link to={"/"+props.link}>
    <button className="app-button">{props.title}</button>
  </Link>
  );
};

export default AppButton;
