import React from 'react';
import './Letter.css';

const Letter = ({ message, sender }) => {
  return (
    <div className="letter-container">
      <div className="letter-content">
        <h2 className="letter-title">Merry Christmas! 🎄</h2>
        <div className="letter-text">
          {message}
        </div>
        <div className="letter-signature">
          {sender}
        </div>
      </div>
    </div>
  );
};

export default Letter; 