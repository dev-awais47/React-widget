import React from "react";
import "./Widget.css";
import image1 from "../assests/image1.png";
import navbar from '../assests/navbar.png';
// import image2 from '../assets/image2.png';

const Widget = () => {
  return (
    <>
      <div className="widget-container">
      <img className="nav" src={navbar} alt="navbar" />
        {/* Grid Layout */}
        <div className="grid-layout">
          {/* Image Blocks */}
          {/* <div className="grid-item">
              <img src={image1} alt="Image 1" />
            </div> */}

          {/* <div className="grid-item">
              <img src={image2} alt="Image 2" />
            </div> */}

          {/* Random Video Block with Nesting Button */}
          <div className="grid-item video-block">
            <div className="overlay">
              <button className="nesting-btn">NESTING</button>
            </div>
          </div>
          {/* Insert Textblock */}
          <div className="grid-item text-block">
            <p>Insert Textblock</p>
          </div>
          {/* Random Quote Block */}
          <div className="grid-item quote-block">
            <p>Insert Random Quote</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Widget;
