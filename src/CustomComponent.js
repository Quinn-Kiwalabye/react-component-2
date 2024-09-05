import React from "react";
import "./Component.css"; // Import your custom CSS file

const CustomComponent = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="left-section">
          <div className="course-header">COURSE</div>
          <h1 className="course-title">JavaScript Fundamentals</h1>
          <a href="#" className="view-link">
            View all chapters &gt;
          </a>
        </div>
        <div className="right-section">
          <div className="header-progress-container">
            <div className="chapter-header">CHAPTER 4</div>
            <div className="progress-container">
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
              <span className="progress-text">6/9 Challenges</span>
            </div>
          </div>
          <p className="course-description">Callbacks & Closures</p>
          <button className="btn">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default CustomComponent;
