import "./header.css";
import React from 'react';
import {Link } from 'react-router-dom';


const Header = () => {
  
  return (
    <>
      <header className="header">
        <div className="container">
          <h2>Project and Technologies</h2>
          <Link to='login'>Log in / Log out</Link>
        </div>
      </header>
    </>
  )
}

export {Header};