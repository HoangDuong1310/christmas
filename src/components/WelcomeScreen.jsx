import React from 'react';
import { Gift, ChevronDown } from 'lucide-react';
import './WelcomeScreen.css';

const Snowflakes = React.memo(() => (
  <>
    {Array.from({ length: 50 }).map((_, index) => (
      <div
        key={`snow-${index}`}
        className="snowflake"
        style={{
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 5 + 15}s`,
          animationDelay: `-${Math.random() * 15}s`,
          fontSize: `${Math.random() * 10 + 5}px`,
          opacity: Math.random() * 0.6 + 0.4,
          filter: `blur(${Math.random() * 1}px)`,
        }}
      >
        ❄
      </div>
    ))}
  </>
));

const WelcomeScreen = ({ onOpen }) => (
  <div className="welcome-screen">
    <Snowflakes />
    
    <div className="content-wrapper">
      <div className="gift-box">
        <Gift size={120} className="gift-icon" />
        <div className="gift-glow"></div>
      </div>
      
      <h1 className="title">Merry Christmas</h1>
      <p className="subtitle">May your days be merry & bright</p>
      
      <button onClick={onOpen} className="open-button">
        Open Your Gift
        <ChevronDown size={24} className="chevron-icon" />
      </button>
    </div>
  </div>
);

export default WelcomeScreen; 