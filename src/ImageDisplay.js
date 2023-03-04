import React, {useState, useEffect} from 'react';
import image from "/Users/rdadoo/Desktop/EyeSpy-main/src/Screen Shot 2023-03-04 at 1.35.58 PM.png"; // import your image file
import './ImageDisplay.css';

function ImageDisplay() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchImage = async () => {
      const response = await fetch('/api/image');
      const data = await response.blob();
      setImageData(URL.createObjectURL(data));
    };
    fetchImage();
  }, []);
  return (
    <div
      style={{
        position: "relative",
        top: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "512px",
          height: "568px",
          borderRadius: "50px",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img src={imageData} alt="fetched image"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            paddingBottom:"8px",
          }}
        />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className="StartButton">
            <button
              className="Start"
              style={{
                backgroundColor: "#3f51b5",
                borderRadius: "30px",
                color: "white",
                padding: "10px 30px",
                border: "none",
                cursor: "pointer",
                fontSize: "18px",
                marginRight: "10px",
                fontWeight: "bold",
              }}
            >
              Start
            </button>
          </div>
          <div className="StopButton" style={{ marginLeft: "10px" }}>
            <button
              className="Stop"
              style={{
                backgroundColor: "#f44336",
                borderRadius: "30px",
                color: "white",
                padding: "10px 30px",
                border: "none",
                cursor: "pointer",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Stop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageDisplay;
