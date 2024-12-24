import React from 'react';
import './Snowfall.css';

const Snowfall = () => (
  <div className="snowfall-container">
    {Array.from({ length: 30 }).map((_, index) => (
      <div
        key={`snow-${index}`}
        className="snowflake"
        style={{
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 3 + 2}s`,
          animationDelay: `-${Math.random() * 2}s`,
        }}
      >
        ❄
      </div>
    ))}
  </div>
);

export default Snowfall; 