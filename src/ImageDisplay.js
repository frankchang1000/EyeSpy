import React from 'react';
import image from "./Screen Shot 2023-03-04 at 1.35.58 PM.png"; // import your image file
import './ImageDisplay.css';

function ImageDisplay() {
    // make http request to backend here fetch, axios
    return (
     <div 
        style={{
            position:"relative",
            top:"20px",
            display: "flex",
      justifyContent: "center", // use proper capitalization
        alignItems: "center",
        }}>
      <div
        style={{
          width: "512px",
          height: "542px",
          borderRadius: "50px",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img src={image} alt="example" style={{ 
            width: "100%", 
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            }} />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className="StartButton">
            <button className="Start">Start</button>
          </div>
          <div className="StopButton" style={{ marginLeft: "10px" }}>
            <button className="Stop">Stop</button>
          </div>
        </div>
      </div>
      </div>
    );
  }
  
export default ImageDisplay;
