import React from "react";
import './Header.css';
import image from "/Users/rdadoo/Desktop/EyeSpy-main/src/eyespylogo.png";


function Header() {
  return (
    <div className="mainHeader">
      <header
        style={{
          background: "linear-gradient(109.6deg, rgb(0, 37, 84) 11.2%, rgba(0, 37, 84, 0.32) 100.2%)",
          color: "white",
          padding: "1rem",
          paddingBottom: "2rem",
          marginBottom: "2rem",
        }}
      >
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            margin: 0,
            fontSize: "4rem",
            paddingLeft: "5rem"
          }}
        >
          EyeSpy
          <img
            src={image}
            alt="example"
            style={{
              width: "130px",
              marginLeft: "1rem",
              
            }}
          />
        </h1>
      </header>
    </div>
  );
}

export default Header;

