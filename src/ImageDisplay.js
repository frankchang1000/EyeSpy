import React from 'react';
import image from "/Users/rdadoo/newhacktj-eyespy/src/Screen Shot 2023-03-04 at 1.35.58 PM.png"; // import your image file

function ImageDisplay(){    
      return (
        <div
          style={{
            width: "512", // adjust width as needed
            height: "512px", // adjust height as needed
            borderRadius: "10px", // adjust border radius as needed
            overflow: "hidden", // hide any overflowing content
            display: "flex",
            justifycontent: "center",
            alignitems: "center",
          }}
        >
          <img src={image} alt="example" style={{ width: "100%" }} />
        </div>
      );
    }
export default ImageDisplay;