// LoadingAnimation.js
import React from 'react';
import './LoadingAnimation.css';

const LoadingAnimation = () => {
  return (
    <div className="loading-animation">
        <span>Loading</span>
      <div className="loading-circle red"></div>
      <div className="loading-circle orange"></div>
    </div>
  );
};

export default LoadingAnimation;
