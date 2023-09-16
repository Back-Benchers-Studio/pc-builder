/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../configrator.css";
import Header from "./Header";

import { Link } from "react-router-dom";

function Configrator() {
  const [selectedSquare, setSelectedSquare] = useState(null);

  const [selectedComponent, setSelectedComponent] = useState(null);

  const [selectedleftSquare, setSelectedleftSquare] = useState(null);

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleBackClick = (event) => {
    console.log("clicked");
  };

  const handleSquareClick = (id) => {
    setSelectedSquare(id);
  };

  const handleComponenetClick = (id) => {
    setSelectedComponent(id);
  };

  const handleleftSquareClick = (id) => {
    setSelectedleftSquare(id);
  };

  const handleButtonClick = () => {
    setIsButtonClicked(true);
    setTimeout(() => {
      setIsButtonClicked(false);
    }, 500);
  };

  return (
    // <div className="grey-container">
      <div className="blueish-container">
        <div className="centered-text">
          <h1 className="text-content">PC Builder</h1>
        </div>
        <Header />
        <div className="rightSection-container">
          <div className="vertical-container">
            
            <Link to={'/'}>
              <div className="back-button" onClick={handleBackClick}>
                <div className="back-icon">←</div>
                <div className="back-text">Back</div>
              </div>
              
            </Link>
            

            <p className="config-text">Configure the PC</p>

            <div className="selectable-squares">
              <div
                className={`square ${
                  selectedSquare === "square1" ? "selected" : ""
                }`}
                onClick={() => handleSquareClick("square1")}
              >
                <div className="icon pc-case">CPU</div>
              </div>
              <div
                className={`square ${
                  selectedSquare === "square2" ? "selected" : ""
                }`}
                onClick={() => handleSquareClick("square2")}
              >
                <div className="icon pc-case">GPU</div>
              </div>
              <div
                className={`square ${
                  selectedSquare === "square3" ? "selected" : ""
                }`}
                onClick={() => handleSquareClick("square3")}
              >
                <div className="icon pc-case">RAM</div>
              </div>
              <div
                className={`square ${
                  selectedSquare === "square4" ? "selected" : ""
                }`}
                onClick={() => handleSquareClick("square4")}
              >
                <div className="icon pc-case">RGB</div>
              </div>
            </div>

            <p className="component-text">Component</p>

            <div className="selectable-component">
              <div
                className={`component ${
                  selectedComponent === "c1" ? "selected" : ""
                }`}
                onClick={() => handleComponenetClick("c1")}
              >
                <div className="icon pc-case">CPU</div>
              </div>
              <div
                className={`component ${
                  selectedComponent === "c2" ? "selected" : ""
                }`}
                onClick={() => handleComponenetClick("c2")}
              >
                <div className="icon pc-case">GPU</div>
              </div>
              <div
                className={`component ${
                  selectedComponent === "c3" ? "selected" : ""
                }`}
                onClick={() => handleComponenetClick("c3")}
              >
                <div className="icon pc-case">RAM</div>
              </div>
              <div
                className={`component ${
                  selectedComponent === "c4" ? "selected" : ""
                }`}
                onClick={() => handleComponenetClick("c4")}
              >
                <div className="icon pc-case">RGB</div>
              </div>
            </div>
          </div>
        </div>

        <div className="leftSection-container">
          <div className="vertical-container">
            <div
              className={`leftsquare ${
                selectedleftSquare === "leftsquare1" ? "selected" : ""
              }`}
              onClick={() => handleleftSquareClick("leftsquare1")}
            >
              <div className="icon pc-case"></div>
            </div>
            <div
              className={`leftsquare ${
                selectedleftSquare === "leftsquare2" ? "selected" : ""
              }`}
              onClick={() => handleleftSquareClick("leftsquare2")}
            >
              <div className="icon pc-case"></div>
            </div>
          </div>
        </div>

        <div className="price-container">
          <div>
            <div className="price-text">Price</div>
            <div className="price-value">$250</div>
          </div>
          <button
            className={`add-to-cart-button ${isButtonClicked ? "clicked" : ""}`}
            onClick={handleButtonClick}
          >
            + Add to Cart
          </button>
        </div>
      </div>
    // </div>
  );
}

export default Configrator;
