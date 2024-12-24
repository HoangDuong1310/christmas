import React from 'react';
import './ChristmasTree.css';

const ChristmasTree = ({ photos, onLetterClick }) => {
  // Tạo mảng vị trí cho đèn trang trí
  const lightPositions = [
    { bottom: '460px', left: '40%' },
    { bottom: '410px', left: '25%' },
    { bottom: '410px', left: '75%' },
    { bottom: '310px', left: '35%' },
    { bottom: '310px', left: '65%' },
    { bottom: '210px', left: '45%' },
    { bottom: '210px', left: '55%' },
    { bottom: '110px', left: '30%' },
    { bottom: '110px', left: '70%' },
    // Thêm nhiều đèn hơn
    { bottom: '360px', left: '50%' },
    { bottom: '260px', left: '50%' },
    { bottom: '160px', left: '50%' },
  ];

  // Tạo mảng vị trí cho quà
  const giftPositions = [
    { bottom: '20px', left: '25%' },
    { bottom: '20px', left: '45%' },
    { bottom: '20px', left: '65%' },
    { bottom: '40px', left: '35%' },
    { bottom: '40px', left: '55%' },
  ];

  // Thêm vị trí cho tất Giáng sinh
  const sockPositions = [
    { bottom: '360px', left: '15%', rotate: '15deg' },
    { bottom: '260px', left: '80%', rotate: '-10deg' },
    { bottom: '160px', left: '20%', rotate: '20deg' },
  ];

  // Thêm vị trí cho hoa treo
  const flowerPositions = [
    { bottom: '410px', left: '85%', rotate: '-5deg' },
    { bottom: '310px', left: '10%', rotate: '10deg' },
    { bottom: '210px', left: '75%', rotate: '-15deg' },
  ];

  return (
    <div className="christmas-tree-container">
      <div className="tree-wrapper">
        {/* Thân cây */}
        <div className="tree-trunk"></div>
        
        {/* Lớp lá cây */}
        <div className="tree-layer"></div>
        
        {/* Ngôi sao */}
        <div className="star">⭐</div>

        {/* Đèn trang trí */}
        {lightPositions.map((pos, index) => (
          <div
            key={`light-${index}`}
            className="light-decoration"
            style={{
              position: 'absolute',
              bottom: pos.bottom,
              left: pos.left,
            }}
          />
        ))}

        {/* Hộp quà */}
        {giftPositions.map((pos, index) => (
          <div
            key={`gift-${index}`}
            className="gift"
            style={{
              position: 'absolute',
              bottom: pos.bottom,
              left: pos.left,
              transform: `rotate(${Math.random() * 20 - 10}deg)`,
            }}
          >
            <div className="gift-top"></div>
            <div className="gift-ribbon"></div>
          </div>
        ))}

        {/* Tất Giáng sinh */}
        {sockPositions.map((pos, index) => (
          <div
            key={`sock-${index}`}
            className="christmas-sock"
            style={{
              position: 'absolute',
              bottom: pos.bottom,
              left: pos.left,
              transform: `rotate(${pos.rotate})`,
              zIndex: 6
            }}
          >
            <div className="sock-body">🧦</div>
          </div>
        ))}

        {/* Hoa treo */}
        {flowerPositions.map((pos, index) => (
          <div
            key={`flower-${index}`}
            className="christmas-flower"
            style={{
              position: 'absolute',
              bottom: pos.bottom,
              left: pos.left,
              transform: `rotate(${pos.rotate})`,
              zIndex: 6
            }}
          >
            <div className="flower-body">🎄</div>
          </div>
        ))}

        {/* Phong bì */}
        <div 
          className="christmas-letter"
          onClick={onLetterClick}
          style={{
            position: 'absolute',
            bottom: '310px',
            right: '15%',
            transform: 'rotate(10deg)',
            zIndex: 10,
          }}
        >
          <div className="envelope-icon">✉️</div>
          <div className="envelope-glow"></div>
        </div>

        {/* Ảnh kỷ niệm */}
        {photos?.map((photo, index) => (
          <div 
            key={`photo-${index}`}
            className="memory-photo"
            style={{
              position: 'absolute',
              bottom: `${460 - index * 100}px`,
              left: index % 2 === 0 ? '30%' : '55%',
              '--rotation': `${index % 2 === 0 ? '-8deg' : '12deg'}`,
              zIndex: 5,
            }}
          >
            <div className="photo-frame">
              <img src={photo.src} alt={`Christmas Memory ${index + 1}`} loading="lazy" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChristmasTree; 