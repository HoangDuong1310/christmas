import React, { useState } from 'react';
import WelcomeScreen from './WelcomeScreen';
import ChristmasTree from './ChristmasTree';
import Letter from './Letter';
import './ChristmasCard.css';

const ChristmasCard = () => {
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showLetter, setShowLetter] = useState(false);

  React.useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  const treePhotos = [
    { src: '/images/photo1.jpg', top: '20%', left: '30%', rotate: '-15deg' },
    { src: '/images/photo2.jpg', top: '35%', left: '60%', rotate: '10deg' },
    { src: '/images/photo3.jpg', top: '50%', left: '25%', rotate: '-20deg' },
    { src: '/images/photo4.jpg', top: '65%', left: '55%', rotate: '15deg' },
    { src: '/images/photo5.jpg', top: '80%', left: '35%', rotate: '-10deg' },
  ];

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="christmas-loader"></div>
      </div>
    );
  }

  return (
    <div className="christmas-card">
      <div className={`screen-container ${step === 1 ? 'slide-up' : ''}`}>
        <WelcomeScreen onOpen={() => setStep(1)} />
        <ChristmasTree 
          photos={treePhotos} 
          onLetterClick={() => setShowLetter(true)} 
          showLetter={showLetter}
        />
      </div>
      {showLetter && (
        <div 
          className="letter-overlay"
          onClick={() => setShowLetter(false)}
        >
          <Letter 
            message={`Gửi bạn thân mến,

            Trong không khí ấm áp của mùa Giáng sinh,
            Xin gửi đến bạn những lời chúc tốt đẹp nhất.
            Mong rằng Giáng sinh này sẽ mang đến cho bạn
            thật nhiều niềm vui và hạnh phúc.
            
            Chúc bạn có một Giáng sinh an lành!`}
            sender="Gửi từ trái tim ❤️"
          />
        </div>
      )}
    </div>
  );
};

export default ChristmasCard;