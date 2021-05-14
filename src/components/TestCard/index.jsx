/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./TestCard.css";
const TestCard = () => {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">Something awesome</h2>
          <p className="card-body">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. repellat.
          </p>
          <a href="#" className="button">
            Delete
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
