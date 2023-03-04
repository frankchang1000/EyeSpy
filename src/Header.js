import React from "react";
import './Header.css';
import image from "./eyespylogo.png";

function Header() {
  return (
    <div className ="mainHeader">
    <header
      style={{
        backgroundColor: "#494D5F",
        color: "white",
        padding: "1rem",
        paddingBottom: "2rem",
        marginBottom: "2rem",
      }}
    >
      <h1 style={{
         margin: 0, 
         fontSize: "4rem",
         }}>EyeSpy
         <img src={image} alt="example" style={{ 
            width: "130px", 
            }} />
            </h1>
         
    </header>
    </div>
  );
}

export default Header;
